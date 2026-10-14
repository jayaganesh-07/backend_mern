import { useEffect, useState } from "react"


const App = () => {

const [time,setTime]=useState(0)
 


const handleClick = ()=>{
   
useEffect(()=>{
  const timer = setInterval(()=>{
    setTime((p)=>p+1)
  },1000)

  return()=>{
    clearInterval(timer)
  }
},[])
}


  return (
    <>
    <h1>Timer</h1>
    {time}
    <button onClick={handleClick}>Increase</button>
    
    </>
  )
}

export default App