const express = require('express')
const cors = require('cors')

const { profesionalRoutes } = require('./routes')
const errorHandling = require('./error/errorHandling')

const app = express()

app.use(express.json())
app.use(cors())
app.use(profesionalRoutes)
app.use(errorHandling.notFound)
app.use(errorHandling.internalServer)

module.exports = app
