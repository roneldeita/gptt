import React, { Component } from 'react'
import Todo from './Todo.js'

class TodoBoard extends Component {

  render(){
    const Todos = this.props.todos.map( (todo, i) => {
        return <Todo key={i} todo={todo}></Todo>
      })
    return (
      <div>
        <ul>{Todos}</ul>
      </div>
    )
  }
}

export default TodoBoard
