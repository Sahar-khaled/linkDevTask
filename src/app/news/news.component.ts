import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Dayjs } from 'dayjs';

import { MainServiceService } from '../service/main-service.service';

import link from '../_files/link.json';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  public products: any[] = [];

  curPage: number = 1;
  pageSize: number = 12;
  searchText: string = '';
  startDate: string;
  allArticles: {
    id: number;
    sourceID: number;
    showOnHomepage: boolean;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[] = [];

  public latestArticles: {
    id: number;
    sourceID: number;
    showOnHomepage: boolean;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[] = [];

  categories: {
    id: number;
    name: string;
  }[] = [];

  config = {
    displayKey: 'name', //if objects array passed which key to be displayed defaults to description
    search: true, //true/false for the search functionlity defaults to false,
    placeholder: 'Select Category', // text to be displayed when no item is selected defaults to Select,
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  };

  constructor(private service: MainServiceService) {}

  ngOnInit(): void {
    this.allArticles = this.latestArticles = this.service.getNews();
    this.categories = this.service.getCategory();
  }
  numberOfPages() {
    return Math.ceil(this.products.length / this.pageSize);
  }
  selectionChanged(selected) {
    if (!Array.isArray(selected)) {
      this.latestArticles = this.allArticles.filter(
        (x) => x.sourceID === selected.id
      );
    } else {
      this.latestArticles = this.allArticles;
    }
  }
  onSearch() {
    this.latestArticles = this.allArticles.filter((x) =>
      x.title.toLowerCase().match(this.searchText.toLowerCase())
    );
  }
}
