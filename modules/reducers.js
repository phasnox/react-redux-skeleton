import { routerStateReducer as router } from 'redux-router';
import { combineReducers } from 'redux';

import { default as counter } from './counter/reducer';
import { default as currency } from './currency/reducer';


export default combineReducers({
  router,
  counter,
  currency
});
