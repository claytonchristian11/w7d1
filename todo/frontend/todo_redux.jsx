import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import App from "./components/app";
import Root from './components/root';
import allTodos from './reducers/selectors';
import connect from './components/todos/todo_list_container';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();
  window.store = store;
  window.allTodos = allTodos;

  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.connect = connect;

  ReactDOM.render(

      <Root store={store}/>,
    root
  );
});
