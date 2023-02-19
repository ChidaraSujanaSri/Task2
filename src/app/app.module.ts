import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule,Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { PoliticsComponent } from './politics/politics.component';
import { CrimeComponent } from './crime/crime.component';
import { WorldComponent } from './world/world.component';
import { TechnologyComponent } from './technology/technology.component';
import { SportsComponent } from './sports/sports.component';
import { DescriptionPipe } from './description-pipe';
import { ReadFAComponent } from './read-fa/read-fa.component';

const allLinks:Routes = [
  {path:'business',component:BusinessComponent},
  {path:'politics',component:PoliticsComponent},
  {path:'crime',component:CrimeComponent},
  {path:'world',component:WorldComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'sports',component:SportsComponent},
  {path:'news/:category',component:ReadFAComponent},
  
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BusinessComponent,
    PoliticsComponent,
    CrimeComponent,
    WorldComponent,
    TechnologyComponent,
    SportsComponent,
    DescriptionPipe,
    ReadFAComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
