
import { useState } from "react";

const Task1 = () => {
  const [studentName, setStudentName] = useState("")
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    setStudents([...students, studentName]);
    setStudentName("")
  }

  return (
    <div>
      <h1>Student Name List</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <button onClick={addStudent}>Add Student</button>

      <h2>Students:</h2>

      <ul>
        {students.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task1

