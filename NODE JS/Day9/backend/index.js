import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'





dotenv.config()



const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express())


app.listen (PORT,()=>{
    console.log(`server successfully connected http://localhost:${PORT}`);
    
})