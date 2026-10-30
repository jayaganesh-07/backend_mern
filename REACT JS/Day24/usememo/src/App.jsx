import React, { useState, useMemo } from 'react'

// Function outside the component
const calculateDouble = (num) => {

  console.log("Calculation Running...")

  let result = num * 2

  // Expensive calculation
  for (let i = 0; i < 100000000; i++) {
    result = num * 2
  }

  return result
}

const App = () => {

  const [number, setNumber] = useState(0)
  const [theme, setTheme] = useState(false)

  // useMemo
  const double = useMemo(() => {
    return calculateDouble(number)
  }, [number])

  const handleTheme = () => {
    setTheme(!theme)
  }

  return (
    <>
      <div style={{
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
        padding: "30px",
        height: "100vh"
      }}>

        <h1>Number Multiplication</h1>

        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          placeholder="Enter Number"
        />

        <h2>Double: {double}</h2>

        <button onClick={handleTheme}>
          Change Theme
        </button>

      </div>
    </>
  )
}

export default App