import { combineReducers } from 'redux';
import cart from './cart';
import todo from './todo';
import todoFilter from './todoFilter';

const rootReducer = combineReducers({
  cart,
  todo,
  todoFilter
})

export default rootReducer;
