export const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'test':
      console.log('test action called');
      return state;

    case 'done':
      console.log('test done');
      return state;

    default:
      return state;
  }
};
