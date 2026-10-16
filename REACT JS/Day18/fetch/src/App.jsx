// import { useEffect, useState } from "react"


// const App = () => {

//   const [fetchdata,setFetchData]=useState([])
//   const [search,setSearch]=useState("")


//   const fetchDatas = async()=>{
//     const getDatas=await fetch ("https://dummyjson.com/products")
//     const datas = await getDatas.json()
//    setFetchData (datas.products)
   
//   }
// const handleChange=(e)=>{
//   setSearch(e.target.value)
//    console.log(search);
   
// }


// useEffect(() => {
//  fetchDatas()
// }, [])

//   return (
//    <>

//    <div>
//     <input type="test" onChange={handleChange} placeholder="Search Here" value={search} />
//    </div>
   
//    <h1>{fetchdata.map((e,i)=>(
//     <div key={i+1}>
//       <h1>{e.title}</h1>
//        <h1>{e.price}</h1>
//        <h1>{e.category}</h1>

//     </div>

//    ))}</h1>
//    </>
//   )
// }

// export default App



import { useState } from "react";

const App = () => {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || []
  );

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [editId, setEditId] = useState(null);

  // Save data
  const saveData = (data) => {
    setEmployees(data);
    localStorage.setItem("employees", JSON.stringify(data));
  };

  // Add and Update
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || salary === "") {
      return;
    }

    if (editId === null) {
      const newEmployee = {
        id: Date.now(),
        name: name,
        salary: salary,
      };

      saveData([...employees, newEmployee]);
    } else {
      const updatedEmployees = employees.map((employee) =>
        employee.id === editId
          ? { ...employee, name: name, salary: salary }
          : employee
      );

      saveData(updatedEmployees);
      setEditId(null);
    }

    setName("");
    setSalary("");
  };

  // Edit
  const handleEdit = (employee) => {
    setName(employee.name);
    setSalary(employee.salary);
    setEditId(employee.id);
  };

  // Delete
  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );

    saveData(updatedEmployees);
  };

  return (
    <>
      <h1>Employee CRUD</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />

        <button type="submit">
          {editId === null ? "Add Employee" : "Update Employee"}
        </button>
      </form>

      <h2>Employee List</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.salary}</td>
              <td>
                <button onClick={() => handleEdit(employee)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(employee.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;

