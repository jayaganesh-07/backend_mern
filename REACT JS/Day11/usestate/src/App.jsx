import React, { useState } from 'react'

const App = () => {
//Task-1
  const [employeeName,setEmployeeName]=useState("Arun")
  const [salary,setSalary]=useState(25000) 

 const handleClick=()=>{
  setSalary(salary+5000)
 }

 //Task-2
 const [courses, setCourses] = useState(["HTML", "CSS","JavaScript"])
  const addReact = () => {
    setCourses([...courses, "React"])
  }

  const updateCSS = () => {
    setCourses(
      courses.map((course) =>
        course === "CSS" ? "Advanced CSS" : course
      )
    )
  }
//Tast-3
 const [product, setProduct] = useState({ name: "Laptop", price: 45000, stock: 10})

  const updatePrice = () => {
    setProduct({...product,price: 50000 })
  }
 const addBrand = () => {
    setProduct({  ...product,brand: "Dell"})
  }


  return (
   <>
  
   <div>
     <h1>Task-1</h1>
    <h1>Employee Salary</h1>
   <h1>employee name : {employeeName}</h1>
   <h2>salary : {salary}</h2>
   <button onClick={handleClick}>Increase Salary</button>
   </div>
  <div>
    <h1>Task-2</h1>
  <h1>Course List</h1>
<div> {courses.map((e, i) => (
      <p key={i+1}> {e} </p>))}
        </div>
 <button onClick={addReact}>Add React </button><br />
<button onClick={updateCSS}> Update CSS</button>
      </div>

      <div>
        <h1>Task-3</h1>
          <h1>Product Details</h1>

      <h2>Product Name: {product.name}</h2>

      <h2>Price: ₹{product.price}</h2>

      <h2>Stock: {product.stock}</h2>

      <h2>Brand: {product.brand}</h2>

      <button onClick={updatePrice}>  Update Price</button> <br />

      <button onClick={addBrand}>  Add Brand</button>
      </div>
  
   
   </>
  )
}

export default App