import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer, rootEpic } from '../core/state';
import { Injectable } from '@nestjs/common';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware),
  );

  epicMiddleware.run(rootEpic);

  return store;
}

@Injectable()
export class StoreService {
  private store = configureStore();

  select() {
    console.log('selecting');
    return this.store;
  }

  dispatch(action) {
    this.store.dispatch(action);
  }
}
