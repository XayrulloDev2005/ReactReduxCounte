import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement, zero } from '../actions/actions'

const Counter = ({ count, onDecrement, onIncrement, onzero }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
    <button onClick={onzero}>0</button>
  </div>
)

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => {
      dispatch(increment())
    },
    onDecrement: () => {
      dispatch(decrement())
    },
    onzero: () =>{
        dispatch(zero())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)