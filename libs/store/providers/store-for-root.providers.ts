import { getStoreServiceToken } from '../common';
import { StoreServiceFactory } from '../factories';
import { Reducer } from 'redux';
import { Epic } from 'redux-observable';

export function createStoreForRootProviders(reducer: Reducer, epic: Epic) {
  return [
    {
      provide: getStoreServiceToken(),
      useFactory: StoreServiceFactory(reducer, epic),
    },
  ];
}
