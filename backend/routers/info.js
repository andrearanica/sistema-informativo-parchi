import express from 'express'
import { getAllAnimals } from '../controllers/info.js'

const router = express.Router()

router.get('/', getAllAnimals)

export default router