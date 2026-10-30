import React, { useReducer } from 'react'

const reducer = (state, action) => {

  switch (action.type) {

    case "ADD":
      return state + action.payload

    case "SUBTRACT":
      return state - action.payload

    case "RESET":
      return 10

    default:
      return state
  }

}

const Task2 = () => {

  const [count, dispatch] = useReducer(reducer, 10)

  return (
    <>
      <h1>Custom Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch({ type: "ADD", payload: 5 })}>
        Add 5
      </button>

      <button onClick={() => dispatch({ type: "ADD", payload: 10 })}>
        Add 10
      </button>

      <button onClick={() => dispatch({ type: "SUBTRACT", payload: 5 })}>
        Subtract 5
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </>
  )
}

export default Task2