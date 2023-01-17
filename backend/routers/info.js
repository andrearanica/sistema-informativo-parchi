import express from 'express'
import { getAllAnimals, getAnimalById, getAllParks, getSpeciesFromPark, getSpecieInfo, getStatistics } from '../controllers/info.js'

const router = express.Router()

router.get('/',                         getAllAnimals)
router.get('/parks',                    getAllParks)
router.get('/species/:park',            getSpeciesFromPark)
router.get('/:park/:specie',            getSpecieInfo)
router.get('/:park/:specie/statistics', getStatistics)

export default router