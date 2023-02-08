const mongoose = require('mongoose')
require('dotenv').config()

const { Credential, Profile, User } = require('./models')

const { DB_URL } = process.env

mongoose.set('strictQuery', false)
mongoose
  .connect(DB_URL, { useNewUrlParser: false, useUnifiedTopology: false })
  .then(() => console.log('Connected!'))

function checkResponse(err, res) {
  err
    ? console.log(`Error: ${err}`)
    : console.log('Documento guardado correctamente')
}

const userDocument = new User({
  login: 'Jesica',
  password: '123456789',
})

const profileDocument = new Profile({
  name: 'Maria',
  surname: 'Perez',
  dateOfBirth: new Date('1987-03-20'),
  comments: ['Todo bien', 'Todo mal'],
  rol: 'user',
})

const credentialDocument = new Credential({
  address: 'Calle Felicidad',
  phone: '635895421',
  email: 'maria@mail.com',
})

userDocument.save(checkResponse)
profileDocument.save(checkResponse)
credentialDocument.save(checkResponse)
