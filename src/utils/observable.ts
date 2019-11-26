import { Observable, Observer } from 'rxjs';
import { Store } from 'redux';

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
