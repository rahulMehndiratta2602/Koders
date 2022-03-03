import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

import authenticateUser from './middleware/auth.js'


import errorHandlingMiddleware from './middleware/errorHandler.js'
import notFoundMiddleware from './middleware/notFound.js'
const app = express()

//routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

import 'express-async-errors'

app.use(express.json())
app.get('/api/v1', (req, res) => {
    res.json({ "data": 'Welcome!' })

})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

//Last middleware 
app.use(errorHandlingMiddleware)
app.use(notFoundMiddleware)


const port = process.env.PORT || 4000
const DB = process.env.DATABASE.replace
    (/<PASSWORD>/, encodeURIComponent(process.env.DATABASE_PASSWORD))

mongoose.connect(DB, {
    autoIndex: false
}).then(() => {
    console.log("📓-------DB Connection Successful-----📓 ")
}).catch(err => console.log("Error  ------", err.message))

const server = app.listen(port, () => console.log(`🔥Example app listening on port ${port}!🔥`))