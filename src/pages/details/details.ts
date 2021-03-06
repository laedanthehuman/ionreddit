import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  item:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
  hasImage(){
     if(this.item.preview.images){
       return true;
     }else{
       return false;
     }
  }

}
