import React from 'react';
import ReactDOM from 'react-dom';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('props', this.props);

    return(
      <li>{this.props.todo.title}</li>
    );
  }
}

export default TodoListItem;
