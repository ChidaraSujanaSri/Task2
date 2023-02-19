import { Injectable } from '@angular/core';
import { News } from './news';

@Injectable({
  providedIn: 'root'
})
export class NewsOperationsService {

  constructor() { 

  let bnews : News = new News("Increase in trade volume 'purely market driven': Adani Transmission","Business","Adani Transmission said the increase in trading volume/price of the shares is purely market driven. The management has no information that may have a bearing on the spike in share volume and which is yet not disclosed to the stock exchange.","bnews.jpg");
  let pnews : News = new News("BJP","Politics","George Soros remarks: Political slugfest erupts; Congress slams govt, BJP calls it an attack on democracy","pnews.jpg");
  let cnews : News = new News("CID","Crime","..........","cnews.jpg");
  let wnews : News = new News("Russia and Ukraine","World","Russia-Ukraine war live: US and Moscow row over ‘crimes against humanity’ claims","wnews.jpg");
  let tnews : News = new News("10 ways ChatGPT can boost your business and create awareness","Technology","Ever since OpenAI unveiled its AI-powered chatbot ChatGPT, the world is no longer the same. Based on OpenAI’s GPT-3 family of large language models, the chatbot became a worldwide phenomenon in a short time.This widespread acceptance of the chatbot is owing to its ability to offer instant responses that are human-like and comprehensible. After it was launched in November last year, the chatbot emerged as a handy tool for professionals from a variety of industries","tnews.jpg");
  let snews : News = new News("Guwahati to host maiden IPL matches","Sports","Rajasthan Royals will play against Punjab Kings in the first match and take on Delhi Capitals in the second one, Assam Cricket Association (ACA) CEO Pritam Mahanta said.","snews.jpg");

  this.allNews.push(bnews)
  this.allNews.push(pnews)
  this.allNews.push(cnews)
  this.allNews.push(wnews)
  this.allNews.push(tnews)
  this.allNews.push(snews)


  }
  allNews : News[] = [];

  getNewsArr():News[]
  {
    return this.allNews;
  }

  getNewsByCategory(filterCategory:string):News[]
  {

   let outputArr:News[] = [];

    this.allNews.forEach(n=>{
      if(n.category == filterCategory)
      {
        outputArr.push(n);
      }
    });

    return outputArr;
  }

  getNewsByCategories(searchCategory:string):News
  {
    let outputNews:News = new News('','','','');
    for(let i=0;i<this.allNews.length;i++)
    {
      let thisNews:News = this.allNews[i];
        if(thisNews.category == searchCategory)
        {
          outputNews = thisNews;
          break;
        }
    }

    return outputNews;
  }

}
