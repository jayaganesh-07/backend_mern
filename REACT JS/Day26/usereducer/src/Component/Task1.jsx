import React, { useReducer } from 'react'

const reducer = (state, action) => {

  switch (action.type) {

    case "INCREMENT":
      return state + 1

    case "DECREMENT":
      return state - 1

    case "RESET":
      return 0

    default:
      return state
  }

}

const App = () => {

  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <h1>Counter Application</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </>
  )
}

export default App