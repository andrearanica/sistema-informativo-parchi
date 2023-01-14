import express from 'express'
import { getAllAnimals, getAnimalById, getAllParks } from '../controllers/info.js'

const router = express.Router()

router.get('/',      getAllAnimals)
router.get('/parks', getAllParks)
router.get('/:id',   getAnimalById)

export default router