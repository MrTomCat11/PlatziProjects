import { createStore } from 'redux';

import reducer from './reducer';

const store = createStore(reducer);
/*
store.dispatch({
  type: 'SET_POST',
  payload: {
  }
});

store.subscribe(() => {
  const state = store.getState();
});
*/
export default store;
