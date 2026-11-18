let students = [];

let id = 1;

// Create Student
const createStudent = (data) => {
    const student = {
        id: id++,
        name: data.name,
        age: data.age,
        department: data.department,
        email: data.email
    };

    students.push(student);

    return student;
};

// Get All Students
const getStudents = () => {
    return students;
};

// Update Student
const updateStudent = (studentId, data) => {
    const student = students.find((s) => s.id === studentId);

    if (!student) {
        return null;
    }

    student.name = data.name || student.name;
    student.age = data.age || student.age;
    student.department = data.department || student.department;
    student.email = data.email || student.email;

    return student;
};

// Delete Student
const deleteStudent = (studentId) => {
    const index = students.findIndex((s) => s.id === studentId);

    if (index === -1) {
        return null;
    }

    const deletedStudent = students.splice(index, 1);

    return deletedStudent[0];
};

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
};