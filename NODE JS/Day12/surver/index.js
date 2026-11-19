import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import stuRoute from './routes/stuRoute.js'

import DataDB from './config/DataDB.js'

const app = express()

dotenv.config()

DataDB()
app.use(cors())
app.use(express.json())

app.use("/api/student",stuRoute)

const PORT = process.env.PORT || 3000


app.listen(PORT,()=>{
    console.log(`servre connected http://localhost:${PORT}`);
    
})