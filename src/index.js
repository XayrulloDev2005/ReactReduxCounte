import React from 'react'
import { render } from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import counter from './reducers/counter'
import Counter from './components/Counter'

render(
  <Provider store={createStore(counter)}>
    <Counter />
  </Provider>,
  document.querySelector('#root')
)