import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions  from '../../actions/todo';

class TodoDisplay extends Component {
  constructor(props){
    super(props)
    this.onClickFilter = this.onClickFilter.bind(this)
  }

  onClickFilter(filter){
    this.props.action.todoDisplay(filter)
  }

  render() {
    return (
      <div>
        <ul>
          <li onClick={()=>this.onClickFilter('SHOW_ALL')} style={{color:(this.props.TodoDisplay === 'SHOW_ALL' ? 'grey' : 'black')}}>Show All</li>
          <li onClick={()=>this.onClickFilter('SHOW_ACTIVE')} style={{color:(this.props.TodoDisplay === 'SHOW_ACTIVE' ? 'grey' : 'black')}}>Show Active</li>
          <li onClick={()=>this.onClickFilter('SHOW_COMPLETED')} style={{color:(this.props.TodoDisplay === 'SHOW_COMPLETED' ? 'grey' : 'black')}}>Show Completed</li>
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state, prop) {
  return {
    TodoDisplay: state.todoFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoDisplay)
