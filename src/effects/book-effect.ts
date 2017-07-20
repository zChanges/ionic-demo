import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/skip';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { BooksService } from './../service/book-service';
import * as Acbooks from '../actions/books-action';
import 'rxjs/add/operator/switchMap';



@Injectable()
export class BookEffect{
    @Effect()
    search$: Observable<Action>  = this.actions$
    .ofType(Acbooks.SEARCH)
    .map(toPayload)
    .switchMap(query => {
      if (query === '') {
        return empty();
      }
      const nextSearch$ = this.actions$.ofType(Acbooks.SEARCH).skip(1);
      return this.booksService.searchBooks(query)
        .takeUntil(nextSearch$)
        .map(books => new Acbooks.SearchCompleteAction(books))
        .catch(() => of(new Acbooks.SearchCompleteAction([])));
    });

    constructor(private actions$: Actions,private booksService: BooksService) { }

}


