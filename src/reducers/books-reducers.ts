import { createSelector } from 'reselect';
import * as Acbook from '../actions/books-action';
import { bookModel } from '../models/book-model';

export interface State {
    id: string;
    entities: {};
    selectId: string | null;
}

export const initializeState:State = {
    id:'',
    entities: {},
    selectId:''
}

export function reducer(state = initializeState, action: Acbook.Action) {
    switch (action.type) {
        case Acbook.SEARCH:{
            const query = action.payload;
            if(query === ''){
                return {
                    id: '',
                    query
                }
            }
            return Object.assign({},state,{
                query
            });
        }
       
        case Acbook.SEARCH_COMPLETE:{
            const books = action.payload;
            console.log(books)
            // const newBooks = books.filter(book => !state.entities[book.id]);
    
            // const newBookIds = newBooks.map(book => book.id);
            // const newBookEntities = newBooks.reduce((entities: { [id: string]: bookModel }, book: bookModel) => {
            // return Object.assign(entities, {
            //     [book.id]: book
            // });
            // }, {});
    
            // return {
            // ids: [ ...[state.id], ...newBookIds ],
            // entities: Object.assign({}, state.entities, newBookEntities),
            // selectedBookId: state.selectId
            // };
            
        }

    
        default:{
            return state;
        };
    }  
}