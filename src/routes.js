import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App from './App'
import NotFound from './components/notFound'
import HomePage from './components/home/HomePage'
import LoginPage from './components/auth/LoginPage'
import RegisterPage from './components/auth/RegisterPage'
import FlightPage from './components/flight/FlightPage'

// console.log(enUS)

const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <LocaleProvider locale={enUS}>
        <App>
          <Switch>
            <Route path="/" exact component={HomePage} onEnter={ () => { console.log('router was changed')}} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/flights" component={FlightPage} />
            <Route path="/hotels" component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>
        </App>
      </LocaleProvider>
    </Router>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes
