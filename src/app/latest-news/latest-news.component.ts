import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainServiceService } from '../service/main-service.service';
import link from '../_files/link.json';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css'],
})
export class LatestNewsComponent implements OnInit {
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

  constructor(private service: MainServiceService) {}

  ngOnInit(): void {
    this.latestArticles = this.service.getLatest();
  }
}
