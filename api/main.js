const express = require('express')
const app = express()
const booksRouter = require('./routes/booksRoutes')

const port = process.env.PORT || 3000
app.use('/api', booksRouter)

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`)
})