export default (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        }
      case 'DECREMENT':
        return {
          count: state.count - 1
        }
      case 'ZERO':
        return{
          count: state.count - state.count
        }
      default:
        return state
    }
  }