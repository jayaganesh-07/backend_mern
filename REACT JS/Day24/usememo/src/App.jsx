import React, { useState } from 'react'

const App = () => {
const [theme, setTheme] = useState(true)
const [odd, setOdd] = useState("");

const handleChange = () => {
setTheme(!theme)
}

const handleOdd = (e) => { 
  const num = Number(e.target.value); 
  if (num % 2 !== 0) { 
    setOdd(num);
    
   } else { setOdd("Please enter an odd number"); } };
return (
<>
<div className={theme ? "bg-amber-200 text-black h-15" : "bg-black text-white h-15"}>


    <h1>Theme Change</h1>

    <button className='rounded-3xl border-4' onClick={handleChange}>
      Change Theme
    </button>

    <br />

 <div> 
  <h1>{odd}</h1>
   <input className='border-4' type="number" onChange={handleOdd} /> 
   <button>Odd Number</button> 
   </div>

  </div>
</>


)
}

export default App
