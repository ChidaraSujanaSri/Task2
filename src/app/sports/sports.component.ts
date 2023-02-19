import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsOperationsService } from '../news-operations.service';
import { News } from '../news';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {

  __newsService: NewsOperationsService; // creating object of Service layer
  router: Router;


  allNews: Array<News> = [];
  constructor(newsService: NewsOperationsService, router: Router) {
    
    this.__newsService = newsService;
    this.allNews = this.__newsService.getNewsByCategory('Sports');
    this.router = router;
    console.log(this.allNews.length);
  }
  ReadFA(category: string) {

    this.router.navigate(['news', category]);
  }


}
