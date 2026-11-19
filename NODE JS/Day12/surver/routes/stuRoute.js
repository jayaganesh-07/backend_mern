import express from 'express'
import { controllers } from '../controllers/controllers.js'


const routers=express.Router()
routers.post("/datas",controllers)

export default routers