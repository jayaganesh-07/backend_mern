import { useState } from "react"

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

    
    </>
  )
}

export default App