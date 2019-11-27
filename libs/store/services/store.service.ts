import { Injectable } from '@nestjs/common';
import { createStore, applyMiddleware, Reducer, Store } from 'redux';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { fromStore } from '../common';

@Injectable()
export class StoreService<T> {
  private epicMiddleware = createEpicMiddleware();
  private store: Store<any>;
  private state$: Observable<any>;

  public counter: number;

  constructor(reducer: Reducer, epic: Epic) {
    this.store = createStore(reducer, applyMiddleware(this.epicMiddleware));
    this.epicMiddleware.run(epic);
    this.state$ = fromStore<T>(this.store as any);
  }

  select(selector) {
    return this.state$.pipe(map(selector));
  }

  dispatch(action) {
    this.store.dispatch(action);
  }

  getState() {
    return this.store.getState();
  }
}
