import React from 'react'

const Display = (props) => {
    
    
  return (
    <>
  
    <h1>Students Details</h1>
    <h1>Name:{props.array}</h1>
   <p>Age:{props.num}</p>
    <p>course:{props.courses}</p>
    <p>Fees:{props.amount}</p>
    <h1>Skills</h1>
    {props.skill.map((e,i)=>(
      <p key={i+1}>{e}</p>
    ))}
    <h1>Details</h1>
    <h2>Person 1:</h2>
     <h3>Name:{props.object.name}</h3>
     <h3>Age:{props.object.age}</h3>
     <h3>Course:{props.object.course}</h3>
     <h3>city:{props.object.city}</h3>

     <div>{props.details.map((e,i)=>(
      <div key={i+1}>
        <h2>person:{i+2}</h2>
    <h3>ID:{e.id}</h3>
    <h3>Name:{e.name}</h3>
    <h3>Course:{e.course}</h3>
    </div>
     ))}</div>
    </>
  )
}

export default Display