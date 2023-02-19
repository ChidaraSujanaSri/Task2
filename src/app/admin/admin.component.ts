import { Component } from '@angular/core';
import { News } from '../news';
import { NewsOperationsService } from '../news-operations.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  router:Router;
  __newsService:NewsOperationsService;
  activeRoute:ActivatedRoute;
  n : News = new News('','','','');

  constructor(newsService:NewsOperationsService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__newsService = newsService;
    //this.n = this.__newsService.getNewsArr();
    this.router = router;
    this.activeRoute = activeRoute;

    let searchCategory= this.activeRoute.snapshot.params['category']; 
    console.log(searchCategory);
    this.n = this.__newsService.getNewsByCategories(searchCategory); 
    console.log(this.n);
  }

}
