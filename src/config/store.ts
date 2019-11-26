import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from '../core/state';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { fromStore } from 'src/utils/observable';

@Injectable()
export class StoreService {
  private epicMiddleware = createEpicMiddleware();
  private store = createStore(
    rootReducer,
    applyMiddleware(this.epicMiddleware),
  );
  private state$ = fromStore<any>(this.store);

  constructor() {
    this.epicMiddleware.run(rootEpic);
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
