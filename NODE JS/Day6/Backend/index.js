const express = require("express");

const app = express();

app.use(express.json());

// Route Mounting
const studentRoutes = require("./routes/studentRoutes");

app.use("/api/students", studentRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});