const express = require('express')
const cors = require('cors')

const photoRoutes = require('./routes/photo.routes')
const errorHandling = require('./error/errorHandling')

const app = express()

app.use(express.json())
app.use(cors())
app.use(photoRoutes)
app.use(errorHandling.notFound)
app.use(errorHandling.internalServer)

module.exports = app
