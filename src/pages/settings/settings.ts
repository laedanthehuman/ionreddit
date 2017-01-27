import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
import { RedditsPage } from '../reddits/reddits';

@Component({
  templateUrl: 'settings.html'
})
export class SettingsPage {
 items: any;
    category:any;
    limit:any;
    constructor(private navCtrl:NavController,private redditService:RedditService) {
        this.getDefaults();
     }

    getDefaults(){
      if(localStorage.getItem('category')!=null){
        this.category = localStorage.getItem('category');
      }else{
        this.category='funny';
      }
      if(localStorage.getItem('limit')!=null){
        this.limit = localStorage.getItem('limit');
      }else{
        this.limit=5;
      }
        
    }

    setDefaults(){
      localStorage.setItem('category',this.category);
      localStorage.setItem('limit',this.limit);
      this.navCtrl.push(RedditsPage);
    }
}
