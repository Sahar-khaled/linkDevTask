import { Component, OnInit } from '@angular/core';
import link from '../_files/link.json';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  p: number = 1;
  collection = [];

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
  pageOfItems: Array<any>;

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

  ngOnInit(): void {
    for (let i = 1; i <= this.latestArticles.length; i++) {
      this.collection.push(`item ${i}`);
    }

    this.articlesList = link.articles;
    this.latestArticles = this.articlesList

      .sort(
        (a, b) =>
          0 - (new Date(a.publishedAt) > new Date(b.publishedAt) ? 1 : -1)
      )
      // .filter((x) => x.showOnHomepage === true)
      .slice(0, 12);
    Array(20)
      .fill(0)
      .map((x, i) => ({ id: i + 1, name: `Item ${i + 1}` }));
  }
}
