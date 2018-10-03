import React from 'react';
import TodoList from './todos/todo_list';
import TodoListContainer from './todos/todo_list_container';

export default class App extends React.Component{
  render (){
    console.log('in app.jsx this is:', this.props);
    // console.log('first');
    // console.log('second');
    return (
    // <h1>HUZZAH!</h1>
    <TodoListContainer />
    );
}
}
