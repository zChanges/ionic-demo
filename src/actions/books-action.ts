import { bookModel } from './../models/book-model';
import { Action } from '@ngrx/store';

export const SEARCH = 'BOOK Search';
export const SEARCH_COMPLETE = 'BOOK Search Complete';

export class SearchAction implements Action {
    readonly type = SEARCH;
    constructor(public payload: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: bookModel[]) { }
}

export type Action = SearchAction | SearchCompleteAction;


/**
 * 实现action接口。固定了action的类型，后面使用就不需在提供atcion的字符串，其实就是创建create action，
 * 在通过构造函数传入action所要附加的数据（payload）
 */