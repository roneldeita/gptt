import React, { Component } from 'react'

class TodoBoard extends Component {

  render(){
    return (
      <li style={{textDecoration: (this.props.todo.done ? 'line-through' : '')}}>
        { this.props.todo.title }
      </li>
    )
  }
}

export default TodoBoard
