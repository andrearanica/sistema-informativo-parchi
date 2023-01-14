import express from 'express'
import { getAllAnimals, getAnimalById } from '../controllers/info.js'

const router = express.Router()

router.get('/',    getAllAnimals)
router.get('/:id', getAnimalById)

export default router