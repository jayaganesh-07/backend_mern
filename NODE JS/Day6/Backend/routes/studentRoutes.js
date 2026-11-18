const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

// Create Student
router.post("/", studentController.createStudent);

// Get All Students
router.get("/", studentController.getStudents);

// Update Student
router.put("/:id", studentController.updateStudent);

// Delete Student
router.delete("/:id", studentController.deleteStudent);

module.exports = router;