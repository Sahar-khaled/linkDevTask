import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import link from '../_files/link.json';

@Injectable({
  providedIn: 'root',
})
export class MainServiceService {
  articles: {
    id: number;
    sourceID: number;
    showOnHomepage: boolean;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[] = [];
  sourceCategory: {
    id: number;
    name: string;
  }[] = [];

  constructor(private http: HttpClient) {
    this.articles = link.articles;
    this.sourceCategory = link.sourceCategory;
  }

  getLatest() {
    return this.articles
      .sort(
        (a, b) =>
          0 - (new Date(a.publishedAt) > new Date(b.publishedAt) ? 1 : -1)
      )
      .filter((x) => x.showOnHomepage === true)
      .slice(0, 6);
  }
  getNewDetails(newId: number) {
    return this.articles.find((x) => x.id === newId);
  }
  getNews() {
    return this.articles.sort(
      (a, b) => 0 - (new Date(a.publishedAt) > new Date(b.publishedAt) ? 1 : -1)
    );
  }
  getCategory() {
    return this.sourceCategory;
  }
}
