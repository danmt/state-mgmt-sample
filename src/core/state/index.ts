import { createSelector } from 'reselect';
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { itemsEpic } from './items.effects';
import * as fromItems from './items.reducer';
import { ItemEntity } from '@models';

export interface State {
  items: ItemEntity;
}

export const rootEpic = combineEpics(itemsEpic);

export const rootReducer = combineReducers({
  items: fromItems.reducer,
});

export const selectItems = (state: State) => state.items;
export const selectItemsData = createSelector(
  selectItems,
  fromItems.selectItemsData,
);
