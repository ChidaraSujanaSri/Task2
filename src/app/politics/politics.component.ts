import { Component } from '@angular/core';
import { NewsOperationsService } from '../news-operations.service';
import { News } from '../news';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent {

  __newsService:NewsOperationsService; // creating object of Service layer
  router:Router;


  allNews : Array<News> = [];




  constructor(newsService:NewsOperationsService,router:Router)
  {
    this.__newsService = newsService;
    this.allNews = this.__newsService.getNewsByCategory('Politics');
    this.router = router;
    console.log(this.allNews.length);
  }
  ReadFA(category:string)
  {

    this.router.navigate(['news',category]);
  }


}
