import React, { Component } from 'react'
import TodoList from '../../components/todo/TodoList'

class Todo extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Todo">
        <TodoList />
      </div>
    );
  }
}

export default Todo;
