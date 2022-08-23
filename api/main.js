const express = require('express')
const booksRouter = require('./routes/booksRoutes')
const mongoose = require('mongoose')
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config')
const app = express()

mongoose.connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
    .then(() => console.log("Succesfully connected to DB"))
    .catch((e) => console.log(e))


const port = process.env.PORT || 3000
app.use('/api', booksRouter)

app.listen(3000, () => {
    console.log(`Server running on port ${port}`)
 })

