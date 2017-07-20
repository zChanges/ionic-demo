import { HomePage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookListPageModule } from './../book-list/book-list.module';


@NgModule({
  declarations: [HomePage],
  imports: [
    BookListPageModule,
    IonicPageModule.forChild(HomePage)
  ],
})
export class HomePageModule { }
