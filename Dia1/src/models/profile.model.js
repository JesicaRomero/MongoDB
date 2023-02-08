const mongoose = require('mongoose')
const { isDateBeforeToday } = require('../utils')

const ProfileSchema = new mongoose.Schema({
  name: String,
  surname: String,
  dateOfBirth: Date,
  comments: [{ type: String }],
  rol: {
    type: String,
    enum: ['user', 'admin'],
  },
})

ProfileSchema.pre('save', function (next) {
  if (isDateBeforeToday(this.dateOfBirth)) {
    return next()
  } else {
    return next(new Error('Fecha no válida'))
  }
})

module.exports = mongoose.model('Profile', ProfileSchema)
