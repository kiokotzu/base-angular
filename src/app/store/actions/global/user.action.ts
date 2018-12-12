import { Action } from '@ngrx/store';


export const LOAD_USER = 'LOAD_USER';


export class LoadUser implements Action {
  readonly type: string = LOAD_USER;

  constructor(public name: string) { }
}


export type actions = LoadUser;
