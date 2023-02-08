const mongoose = require('mongoose')
require('dotenv').config()

const Photo = require('./models/photo.model')

const { DB_URL } = process.env

mongoose.set('strictQuery', false)
mongoose
  .connect(DB_URL, { useNewUrlParser: false, useUnifiedTopology: false })
  .then(() => console.log('Connected!'))

function checkResponse(err, res) {
  err ? console.log(`Error: ${err}`) : console.log(res)
}

const photos = [
  {
    name: 'Jesica',
    url: 'https://loremflickr.com/320/240',
    title: 'Gatos',
    description: 'Una foto de un gato',
  },
  {
    name: 'Jesus',
    url: 'https://loremflickr.com/320/240/paris',
    title: 'Paris',
    description: 'Una foto de París',
  },
  {
    name: 'Jesica',
    url: 'https://loremflickr.com/320/240/dog',
    title: 'Perro',
    description: 'Perrito',
  },
  {
    name: 'Maria',
    url: 'https://loremflickr.com/320/240/car',
    title: 'Mi coche',
    description: 'Una foto de mi primer coche',
  },
]

Photo.insertMany(photos, checkResponse)
Photo.find({ name: 'Jesica' }, checkResponse)
Photo.findOneAndUpdate(
  { title: 'Gatos', description: 'Una foto de un gato' },
  { description: 'Los gatitos' },
  checkResponse
)
Photo.findOneAndDelete({ name: 'Jesica', title: 'Gatos' }, checkResponse)
Photo.deleteMany({ name: 'Jesica' }, checkResponse)
