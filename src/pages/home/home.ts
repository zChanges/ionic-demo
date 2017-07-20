import { Component } from '@angular/core';
import { NavController, NavParams,IonicPage } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

    books = [
    {
      text:'Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open ',
      title:'Angular'
    },
    {
      text:'Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open ',
      title:'Angular'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
