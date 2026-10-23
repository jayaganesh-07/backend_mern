// import { useEffect, useState } from "react"


// const App = () => {

// const [time,setTime]=useState(0)
 
   
// useEffect(()=>{
//   const timer = setInterval(()=>{
//     setTime((p)=>p+1)
//   },1000)

//   return()=>{
//     clearInterval(timer)
//   }
// },[])

// const handleClick = ()=>{
//  setTime((p)=>p+1)
// }


//   return (
//     <>
//     <h1>Timer</h1>
//     {time}
//     <button onClick={handleClick}>Increase</button>
    
//     </>
//   )
// }

// export default App



import { useEffect, useState } from "react"
import Task from "react"
const App = () => {
  //task-1
  const[count,setCount]=useState(0)
  const[timers,setTimer]=useState(null)
  //task-2
  const[msg,setMsg]=useState("Please wait...")
  //task-3
  const[datas,setDatas]=useState([{name:"John",age:21,course:"FS Java"},
    {name:"Mick",age:23,course:"FS Python"},
    {name:"Arun",age:22,course:"FS .Net"}
  ])



  //task-1
  const funStart=()=>{
    if (timers !== null) return;
 let timer=setInterval(()=>setCount((p)=>p+1),1000)
   setTimer(timer)
  }
  const funStop=()=>{
    clearInterval(timers)
    setTimer(null)
  }
  const funReset=()=>{
    setCount(0)
    setTimer(null)
  }
  useEffect(()=>{
    return ()=>clearInterval(timers)
  },[timers])
  //task-2
  useEffect(()=>{
    let value=setTimeout(()=>setMsg("Welcome to My Website"),3000)
  },[msg])
  const msgReset=()=>{
    clearTimeout(msg)
    setMsg("Please wait..")
  }
  //Task-3
  const fucEffect=()=>{
    const details=localStorage.setItem("datas",JSON.stringify(datas))
  setDatas(details)
  }
  useEffect(()=>{
fucEffect()
  
  },[])
  
  
  return (
    <>
    
    <h1>Task-1</h1>
    <h1>Timer</h1>
    <h1>{count}</h1>
    <button onClick={funStart}>start</button>
    <button onClick={funStop}>stop</button>
    <button onClick={funReset}>Reset</button>
    <h1>Task-2</h1>
    <h1>{msg}</h1>
    <button onClick={msgReset}>Reset</button>
    
    </>
  )
}

export default App