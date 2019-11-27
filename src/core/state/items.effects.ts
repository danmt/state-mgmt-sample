import { ofType } from 'redux-observable';
import { mapTo } from 'rxjs/operators';

export const testAction = () => ({ type: 'test' });

export const itemsEpic = action$ =>
  action$.pipe(ofType('test'), mapTo({ type: 'done' }));
