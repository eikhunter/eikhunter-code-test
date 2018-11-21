import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import store from './store/index'

import App from '../js/stateful/App/App'

import '../sass/app.scss'

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)
