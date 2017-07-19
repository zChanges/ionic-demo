import { BookListPage } from './book-list';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [BookListPage],
  imports: [IonicPageModule.forChild(BookListPage)],
  exports:[BookListPage]
})
export class BookListPageModule { }
