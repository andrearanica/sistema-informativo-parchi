import express from 'express'
import { getAllAnimals, getAllParks, getSpeciesFromPark, getSpecieInfo, getAverageAge, count, getAge } from '../controllers/info.js'

const router = express.Router()

router.get('/',                         getAllAnimals)
router.get('/parks',                    getAllParks)
router.get('/species/:park',            getSpeciesFromPark)
router.get('/:park/:specie',            getSpecieInfo)
router.get('/:park/:specie/averageAge', getAverageAge)
router.get('/:park/:specie/count',      count)
router.get('/:park/:specie/age',        getAge)

export default router