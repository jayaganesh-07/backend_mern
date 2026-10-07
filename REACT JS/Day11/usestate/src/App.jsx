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
//Task-4
const [employeeList,setEmployeeList]=useState([
  { id: 1, name: "Arun", salary: 25000 },
  { id: 2, name: "Priya", salary: 30000 },
  { id: 3, name: "Kumar", salary: 28000 }
])
const addEmployee = () => {
  setEmployeeList([...employeeList,{id: 4, name: "Bala", salary: 32000}])
}
const changeSalary=()=>{
  setEmployeeList([...employeeList,{ id: 2, name: "Priya", salary: 35000 }])
}
  return (
    <>
    <div className="p-5">

      {/* TASK 1 */}
      <div className="mb-10 border p-5 rounded">
        <h1 className="text-2xl font-bold mb-3">
          Task-1
        </h1>

        <h1 className="text-xl font-semibold mb-3">
          Employee Salary
        </h1>

        <h1 className="text-lg mb-2">
          Employee Name : {employeeName}
        </h1>

        <h2 className="text-lg mb-3">
          Salary : ₹{salary}
        </h2>

        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increase Salary
        </button>
      </div>


      {/* TASK 2 */}
      <div className="mb-10 border p-5 rounded">
        <h1 className="text-2xl font-bold mb-3">
          Task-2
        </h1>

        <h1 className="text-xl font-semibold mb-3">
          Course List
        </h1>

        <div className="mb-3">
          {courses.map((e, i) => (
            <p key={i + 1} className="text-lg">
              {e}
            </p>
          ))}
        </div>

        <button
          onClick={addReact}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Add React
        </button>

        <button
          onClick={updateCSS}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          Update CSS
        </button>
      </div>


      {/* TASK 3 */}
      <div className="mb-10 border p-5 rounded">
        <h1 className="text-2xl font-bold mb-3">
          Task-3
        </h1>

        <h1 className="text-xl font-semibold mb-3">
          Product Details
        </h1>

        <h2 className="text-lg mb-2">
          Product Name: {product.name}
        </h2>

        <h2 className="text-lg mb-2">
          Price: ₹{product.price}
        </h2>

        <h2 className="text-lg mb-2">
          Stock: {product.stock}
        </h2>

        <h2 className="text-lg mb-3">
          Brand: {product.brand}
        </h2>

        <button
          onClick={updatePrice}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Update Price
        </button>

        <button
          onClick={addBrand}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Add Brand
        </button>
      </div>


      {/* TASK 4 */}
      <div className="mb-10 border p-5 rounded">
        <h1 className="text-2xl font-bold mb-3">
          Task-4
        </h1>

        <h1 className="text-xl font-semibold mb-3">
          Employee List
        </h1>

        {employeeList.map((e) => (
          <div key={e.id} className="mb-3 border-b pb-3">

            <p>ID: {e.id}</p>

            <p>Name: {e.name}</p>

            <p>Salary: ₹{e.salary}</p>

          </div>
        ))}

        <button
          onClick={addEmployee}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Employee
        </button>
        <button
          onClick={changeSalary}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
         Update Salary
        </button>
      </div>

    </div>
  </>
  )
}

export default App