const { Schema, model } = require('mongoose')

const PhotoSchema = new Schema({
  name: String,
  url: String,
  title: String,
  description: String,
})

module.exports = model('Photo', PhotoSchema)
