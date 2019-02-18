import { ITodo } from './models';

// action constants
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

interface IActions<T> {
  readonly type: string;
  payload: T;
}

// action creators
export class AddTodo implements IActions<ITodo> {
  readonly type = ADD_TODO;
  constructor(public payload: ITodo) {}
}

export class RemoveTodo implements IActions<ITodo> {
  readonly type = REMOVE_TODO;
  constructor(public payload: ITodo) {}
}
