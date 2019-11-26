export const reducer = (state = { test: null }, action) => {
  switch (action.type) {
    case 'test':
      return { test: true };

    case 'done':
      return { test: false };

    default:
      return state;
  }
};

export const selectItemsTest = (items: any) => items.test;
