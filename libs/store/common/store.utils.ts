import { Observable, Observer } from 'rxjs';
import { Store } from 'redux';
import { STORE_SERVICE } from './store.constants';

export function getStoreServiceToken(featureName?: string) {
  return featureName && featureName !== STORE_SERVICE
    ? `${featureName}${STORE_SERVICE}`
    : STORE_SERVICE;
}

export const fromStore = <T>(store: Store<T>) => {
  return Observable.create((observer: Observer<T>) => {
    observer.next(store.getState());
    const unsubscribe = store.subscribe(() => {
      observer.next(store.getState());
    });
    return () => {
      observer.complete();
      unsubscribe();
    };
  });
};
