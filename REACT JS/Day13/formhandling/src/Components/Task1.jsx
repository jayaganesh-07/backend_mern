
import React, { useState } from 'react'

const Task1 = () => {
  const [isOn, setIsOn] = useState(false)

  const toggleStatus = () => {
    setIsOn(!isOn)
  }

  return (
    <>
      <div>
        <h1>Status: {isOn ? "ON" : "OFF"}</h1>

        <button onClick={toggleStatus}>
          {isOn ? "Turn OFF" : "Turn ON"}
        </button>
      </div>
    </>
  )
}

export default Task1

