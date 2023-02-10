const mongoose = require('mongoose')
const app = require('./app')
require('dotenv').config()

const { PORT, DB_URL } = process.env

const port = PORT || 3000

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})

mongoose.set('strictQuery', false)
mongoose
  .connect(DB_URL, { useNewUrlParser: false, useUnifiedTopology: false })
  .then(() => console.log('Connected!'))
