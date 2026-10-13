
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({name: "",age: "", email: "", password: "", })
  const [users, setUsers] = useState([])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setUsers([...users, formData]);

    setFormData({ name: "", age: "", email: "", password: "", })}

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Registration Form</h1>





      

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
        <input type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} className="border p-2"required />

        <input type="number" name="age"  placeholder="Enter Age"  value={formData.age}  onChange={handleChange}  className="border p-2" required />

        <input type="email"  name="email"  placeholder="Enter Email"  value={formData.email} onChange={handleChange} className="border p-2"  required/>

        <input  type="number"  name="password"  placeholder="Enter Password"  value={formData.password}  onChange={handleChange}  className="border p-2"  required/>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded" > Submit</button>
      </form>

      <h2 className="text-xl font-bold mt-6 mb-3">User List</h2>

      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Password</th>
          </tr>
        </thead>

        <tbody>
          {users.map((e, i) => (
            <tr key={i+1}>
              <td className="border p-2">{e.name}</td>
              <td className="border p-2">{e.age}</td>
              <td className="border p-2">{e.email}</td>
              <td className="border p-2">{e.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App

