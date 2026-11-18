const studentService = require("../services/studentService");

// Create Student
const createStudent = (req, res) => {
    const student = studentService.createStudent(req.body);

    res.status(201).json({
        message: "Student created successfully",
        data: student
    });
};

// Get All Students
const getStudents = (req, res) => {
    const students = studentService.getStudents();

    res.status(200).json({
        data: students
    });
};

// Update Student
const updateStudent = (req, res) => {
    const id = Number(req.params.id);

    const student = studentService.updateStudent(id, req.body);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json({
        message: "Student updated successfully",
        data: student
    });
};

// Delete Student
const deleteStudent = (req, res) => {
    const id = Number(req.params.id);

    const student = studentService.deleteStudent(id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.status(200).json({
        message: "Student deleted successfully",
        data: student
    });
};

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
};