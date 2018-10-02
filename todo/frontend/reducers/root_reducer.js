import todosReducer from './todos_reducer.js';
import {combineReducers} from 'redux';

export default combineReducers(
  {
    todos: todosReducer
  }
);
