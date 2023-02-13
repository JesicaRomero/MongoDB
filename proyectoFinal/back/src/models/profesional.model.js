const { Schema, model } = require('mongoose')

const ProfesionalSchema = new Schema({
  name: String,
  age: Number,
  weight: Number,
  height: Number,
  isRetired: Boolean,
  nationality: String,
  oscarNumber: Number,
  profession: String,
})

module.exports = model('Profesional', ProfesionalSchema)
