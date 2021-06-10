import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import link from '../_files/link.json';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
})
export class LatestNewsComponent implements OnInit {
  articlesList: {
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

  constructor() {}
  // btnClick = function () {
  //   this.router.navigateByUrl('../news');
  // };

  ngOnInit(): void {
    this.articlesList = link.articles;
    this.latestArticles = this.articlesList
      .sort(
        (a, b) =>
          0 - (new Date(a.publishedAt) > new Date(b.publishedAt) ? 1 : -1)
      )
      .filter((x) => x.showOnHomepage === true)
      .slice(0, 6);
  }
}
