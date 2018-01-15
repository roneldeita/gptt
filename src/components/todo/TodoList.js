import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../../actions/todo'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.onClickAdd = this.onClickAdd.bind(this)
    this.onClickRemove = this.onClickRemove.bind(this)
    this.onChangeInput = this.onChangeInput.bind(this)
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this)
    this.onToggleTodo = this.onToggleTodo.bind(this)
    this.state = {
      title: 'Wake up @ 6am',
      done: false
    }
  };
  onClickAdd(item){
    this.props.action.addTodo({title:this.state.title, done:this.state.done})
  }
  onClickRemove(id){
    this.props.action.removeTodo(id)
  }
  onChangeInput(e){
    this.setState({title: e.target.value})
  }
  onChangeCheckbox(e){
    this.setState({done: !this.state.done})
  }
  onToggleTodo(id){
    this.props.action.toggleTodo(id)
  }
  render() {
    const List = this.props.todo.map((item, id) =>{
      return <li key={item.id}
        style={{textDecoration:(item.done? 'line-through': '')}} onClick={() => this.onToggleTodo(item.id)}>
          {item.title} <button onClick={() => this.onClickRemove(item.id)}>x</button>
      </li>
    })
    return (
      <div>
        <h1>TodoList</h1>
        <input type="text" value={this.state.title} onChange={this.onChangeInput} />
        <input type="checkbox" checked={this.state.done} onChange={this.onChangeCheckbox} />
        <button onClick={this.onClickAdd}>Add Todo</button>
        <ul>
          { List }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state, prop) {
  return {
    todo: state.todo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
