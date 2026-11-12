import express, { Router } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './router/router.js'




dotenv.config()



const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express())
app.use("/api/ganesh",router)

app.listen (PORT,()=>{
    console.log(`server successfully connected http://localhost:${PORT}`);
    
})