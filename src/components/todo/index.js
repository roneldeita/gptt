import React, { Component } from 'react'
import TodoList from '../../components/todo/TodoList'
import TodoDisplay from '../../components/todo/TodoDisplay'

class Index extends Component {
  render() {
    return (
      <div className="Todo">
        <TodoList />
        <TodoDisplay />
      </div>
    );
  }
}

export default Index;
