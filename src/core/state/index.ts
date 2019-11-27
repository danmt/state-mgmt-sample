import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { itemsEpic } from './items.effects';
import * as fromItems from './items.reducer';
import { createSelector } from 'reselect';

export const rootEpic = combineEpics(itemsEpic);

export const rootReducer = combineReducers({
  items: fromItems.reducer,
});

export const selectItems = (state: any) => state.items;
export const selectItemsTest = createSelector(
  selectItems,
  fromItems.selectItemsTest,
);
