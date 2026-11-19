import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import stuRoute from './routes/stuRoute.js'
import DataDB from './config/DataDB.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/student", stuRoute)

const PORT = process.env.PORT || 3000

DataDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server connected http://localhost:${PORT}`)
    })
}).catch((error) => {
    console.log("Database connection failed:", error.message)
})