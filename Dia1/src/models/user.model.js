const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  login: String,
  password: {
    type: String,
    validate: [
      (password) => password.length >= 8,
      'La contraseña tiene que tener al menos 8 caracteres',
    ],
    select: false,
  },
})

module.exports = mongoose.model('User', UserSchema)
