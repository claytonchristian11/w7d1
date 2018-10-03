import React from 'react';

export default class TodoForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {title: "", body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
    console.log('todo_form:', this.state);

  }

  // handleChange(e) {
  //   // e.target.value =
  //   console.log(e.target.value);
  //   this.setState({body: e.target.value}) ;
  // }

  update(field){
    return (e) =>{
      this.setState({
        [field]: e.target.value
      });
    };
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}> <label>Title
        <input type="text" onChange={this.update('title')} value={this.state.title}></input>
        </label>

        <label>body
        <input type="text" onChange={this.update('body')} value={this.state.body}></input>
        </label>

        <input type="submit" value="Create Todo"></input>
        </form>
      </div>

    );
  }
}
