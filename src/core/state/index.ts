import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { itemsEpic } from './items.effects';
import { itemsReducer } from './items.reducer';

export const rootEpic = combineEpics(
  itemsEpic,
);

export const rootReducer = combineReducers({
  itemsReducer,
});
