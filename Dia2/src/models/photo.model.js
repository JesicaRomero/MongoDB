const mongoose = require('mongoose')

const PhotoSchema = new mongoose.Schema({
  name: String,
  url: String,
  title: String,
  description: String,
})

module.exports = mongoose.model('Photo', PhotoSchema)
