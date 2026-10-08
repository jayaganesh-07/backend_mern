import React, { useState } from 'react'

const Task = () => {

const [obj,setObj]=useState([
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Priya", salary: 30000 },
  { id: 3, name: "Kumar", salary: 28000 }
])

const handleChange=()=>{

//   const arr = [...obj]

// const update =   arr.map((e)=>e.salary==30000?{...e,salary:e.salary+5000}:e)
// console.log(update);

 setObj((p)=>p.map((e)=>e.id==2?{...e,salary:e.salary+5000}:e))


// setObj(update)

}
  return (

 
  <>
  
 {obj.map((e,i) => (
          <div key={i+1}>

            <p>ID: {e.id}</p>

            <p>Name: {e.name}</p>

            <p>Salary: ₹{e.salary}</p>

          </div>
        ))}

        <button onClick={handleChange}>Add 5k</button>
  </>
  )
}

export default Task