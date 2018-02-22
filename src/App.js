import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import TopNavigation from './components/template/TopNavigation'
import BottomNavigation from './components/template/BottomNavigation'
import { BackTop, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavigation location={this.props.location}/>
        <div className="container">{ this.props.children }</div>
        <BottomNavigation/>
        <BackTop><Icon type="up-circle" style={{fontSize:"40px", color:'white'}} /></BackTop>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default withRouter(connect()(App))
