import { createStore as reduxCreateStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === `SET_ENG_LANG`) {
    return Object.assign({}, state, {
      lang: 'ENG',
    });
  }

  if (action.type === `SET_RU_LANG`) {
    return Object.assign({}, state, {
      lang: 'RU',
    });
  }
  return state;
};

const initialState = { lang: 'RU' };

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
