import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Store } from '@ngrx/store';
import * as Acbook from '../../actions/books-action';


/**
 * Generated class for the SearchBooksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search-books',
  templateUrl: 'search-books.html',
})
export class SearchBooksPage {

  constructor(private store: Store<any>) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBooksPage');
  }
  getItems($evnet) {
    const val = $evnet.target.value;
    this.store.dispatch(new Acbook.SearchAction(val))
  }


}
