import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css'
import 'font-awesome/css/font-awesome.min.css'
import Navigation from './components/template/Navigation'
import { BackTop, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_SECRET_CODE)
    // console.log(this.props)
    return (
      <div className="App">
        <Navigation location={this.props.location} />
        { this.props.children }
        <BackTop><Icon type="up-circle" style={{fontSize:"40px"}} /></BackTop>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}


export default withRouter(connect()(App))
