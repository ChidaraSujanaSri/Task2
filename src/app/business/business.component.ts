import { Component } from '@angular/core';
import { News } from '../news';
import { NewsOperationsService } from '../news-operations.service';
import { DescriptionPipe } from '../description-pipe';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {

  router:Router;
  __newsService:NewsOperationsService;
  allNews : Array<News> = [];

  constructor(newsService:NewsOperationsService,router:Router)
  {
    this.__newsService = newsService;
    this.allNews = this.__newsService.getNewsByCategory('Business');
    this.router = router;
    console.log(this.allNews.length);
  }

  ReadFA(category:string)
  {

    this.router.navigate(['news',category]);
  }

}
