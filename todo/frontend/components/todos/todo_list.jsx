import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

console.log('this in todo_list.jsx:', this);

export default (props) => {
  console.log(props);
  // let testcase = props.todos.map(todo =>
  //   <li>{todo.title}</li>
  // );

  let testcase = props.todos.map(todo => (
    <TodoListItem todo={todo} newprop='4'/>
    )
  );

  // return <h3>test</h3>;
  return (
    <div>
      {testcase}
      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  );
};
