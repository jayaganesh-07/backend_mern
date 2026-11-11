

// const App = () => {
// let a =1

// const handleclick =()=>{
//   a++
//   console.log(a);
  
// }

//   return (

    
//   <>
  
//   <h1>{a}</h1>
//   <button onClick={handleclick}>Click Me</button>
//   </>
//   )
// }

// export default App


import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(p => {
      if (p % 5 === 0) {
        return p + 5
      }
      return p + 1
    })
  }

  return (
    <>
      <h1>Count: {count}</h1>
 <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App