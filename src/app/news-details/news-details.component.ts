import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from '../service/main-service.service';
import link from '../_files/link.json';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css'],
})
export class NewsDetailsComponent implements OnInit {
  newId: number;
  sourceName: string;
  article: {
    id: number;
    sourceID: number;
    showOnHomepage: boolean;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  } = {} as any;

  categories: {
    id: number;
    name: string;
  }[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: MainServiceService
  ) {
    this.route.params.subscribe((params) => {
      this.newId = +params['id'];
    });
  }

  ngOnInit(): void {
    this.article = this.service.getNewDetails(this.newId);
    this.categories = this.service.getCategory();
    this.sourceName = this.categories.find(
      (x) => x.id === this.article.sourceID
    ).name;
  }
}
