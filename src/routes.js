import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import NotFound from './components/notFound'
import HomePage from './components/home/HomePage'
import LoginPage from './components/auth/LoginPage'
import FlightPage from './components/flight/FlightPage'

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/flights" component={FlightPage} />
          <Route path="/hotels" component={NotFound} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes
