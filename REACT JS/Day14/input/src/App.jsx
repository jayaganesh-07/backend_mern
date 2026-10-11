import { useState } from "react"
import Task1 from "./Components/Task1"

const App = () => {
  const [data,setData]=useState("")
  const [addData,setAddData]=useState([])

  const handleChange =(e)=>{
    setAddData(e.target.value)
  }

  const handleClick =()=>{
    setData(addData)
  }
  return (
    <>


<div>
  <h1>{data}</h1>
<input type="text" value={addData}  onChange={handleChange} /> <br /> <br />
<button onClick={handleClick} >sumit</button>
</div>


<br /><br />
<Task1/>
    
    </>
  )
}

export default App