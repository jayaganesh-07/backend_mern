import { useState } from "react"


const App = () => {
  const[color,setColor]=useState(false)


  const changeColor=()=>{
    setColor(!color)
  }
  return (
   <>
   <div className={color?"bg-violet-500 w-385 h-100":"bg-blue-600 w-385 h-100"}>
    <div>
      <button className="flex justify-center items-center gap-2" onClick={changeColor}>change color</button>
    </div>
   </div>
   
   </>
  )
}

export default App