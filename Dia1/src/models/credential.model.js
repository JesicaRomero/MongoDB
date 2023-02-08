const mongoose = require('mongoose')
const { validateEmail } = require('../utils')

const CredentialSchema = new mongoose.Schema({
  address: String,
  phone: String,
  email: {
    type: String,
    validate: [
      (email) => validateEmail(email),
      'El formato de email es incorrecto',
    ],
  },
})

module.exports = mongoose.model('Credential', CredentialSchema)
