import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props){
    super(props)

    this.state = {
      TodoList:[
        { id: 0, title:'Wake up @ 6am', done: false },
        { id: 1, title:'Go to worK @ 8am', done: false },
      ]
    }
  }
  render() {
    const List = this.state.TodoList.map((item, id) =>{
      return <li key={item.id}>{item.title}</li>
    })
    return (
      <div>
        <h1>TodoList</h1>
        <ul>
          { List }
        </ul>
      </div>
    )
  }
}

export default TodoList
