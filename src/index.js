import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Store from './store'
import Routes from './routes'

const StoreInstance = Store()

ReactDOM.render(
  <Routes store={StoreInstance} />,
  document.getElementById('root')
)
registerServiceWorker()
