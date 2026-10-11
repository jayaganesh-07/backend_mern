
import { useState } from "react";

const Task3 = () => {
  const [user, setUser] = useState({
    name: "Rahul",
    age: 22,
    city: "Chennai"
  })

  const changeName = () => {
    setUser({ ...user, name: "Arjun" });
  };

  const increaseAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const changeCity = () => {
    setUser({ ...user, city: "Bangalore" });
  };

  return (
    <div>
      <h1>User Details</h1>

      <h3>Name: {user.name}</h3>
      <h3>Age: {user.age}</h3>
      <h3>City: {user.city}</h3>

      <button onClick={changeName}>Change Name</button>
      <br /><br />

      <button onClick={increaseAge}>Increase Age</button>
      <br /><br />

      <button onClick={changeCity}>Change City</button>
    </div>
  );
};

export default Task3

