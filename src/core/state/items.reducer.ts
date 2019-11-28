import { Item } from '@models';

export interface State {
  data?: Item;
}

export const reducer = (state: State = {}, action) => {
  switch (action.type) {
    case 'test':
      return { ...state, data: { ...state.data, test: true } };

    case 'done':
      return { ...state, data: { ...state.data, test: false } };

    default:
      return state;
  }
};

export const selectItemsData = (state: State) => state.data;
