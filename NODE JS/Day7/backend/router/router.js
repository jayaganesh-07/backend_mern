import express from 'express'
import { controller } from '../controller/controller.js'

const router =express.Router()


router.post("/dataAdding",controller)



export default router