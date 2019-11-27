import { StoreService } from '../services';
import { Reducer } from 'redux';
import { Epic } from 'redux-observable';

export function StoreServiceFactory<T extends object>(
  reducer: Reducer,
  epic: Epic,
) {
  return () => new StoreService<T>(reducer, epic);
}
