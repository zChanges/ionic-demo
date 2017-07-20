import { Http } from '@angular/http';
import { BooksService } from './../service/book-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
// import { ListPage } from '../pages/list/list';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StoreModule} from '@ngrx/store';
import * as reduecr from '../reducers/books-reducers';

import { EffectsModule } from '@ngrx/effects';
import { BookEffect } from '../effects/book-effect';
@NgModule({
  declarations: [
    MyApp  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(reduecr),
    EffectsModule.forRoot([BookEffect])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BooksService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
