import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import infoRouter from './routers/info.js'

const app = express()
dotenv.config()

app.use(cors())
app.use('/info', infoRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${ process.env.PORT }`)
})