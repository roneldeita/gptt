import React, { Component } from 'react'
import TodoBoard from '../../components/todo/TodoBoard'
// import TodoList from '../../components/todo/TodoList'
// import TodoDisplay from '../../components/todo/TodoDisplay'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos:[
        {id:0, title: 'Email Christopher Villanueva', done: true},
        {id:1, title: 'Feed puppy', done: false }
      ]
    }
  }
  render() {
    return (
      <div className="Todo">
         <TodoBoard todos={this.state.todos} />
      </div>
    );
  }
}

export default Index;
