import React, { useReducer } from 'react'

const reducer = (state, action) => {

  switch (action.type) {

    case "SHOW":
      return true

    case "HIDE":
      return false

    default:
      return state
  }

}

const Task3 = () => {

  const [show, dispatch] = useReducer(reducer, false)

  return (
    <>
      <h1>Password Application</h1>

      <input
        type={show ? "text" : "password"}
        placeholder="Enter Password"
      />

      <br /><br />

      <button onClick={() => dispatch({ type: "SHOW" })}>
        Show Password
      </button>

      <button onClick={() => dispatch({ type: "HIDE" })}>
        Hide Password
      </button>

    </>
  )
}

export default Task3