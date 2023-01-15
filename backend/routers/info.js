import express from 'express'
import { getAllAnimals, getAnimalById, getAllParks, getSpeciesFromPark } from '../controllers/info.js'

const router = express.Router()

router.get('/',              getAllAnimals)
router.get('/parks',         getAllParks)
router.get('/:id',           getAnimalById)
router.get('/species/:park', getSpeciesFromPark)

export default router