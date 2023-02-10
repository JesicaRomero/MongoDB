const Photo = require('../models/photo.model')

function getPhotos(name) {
  return Photo.find({ name }).then((data) => data)
}

function savePhoto(photo) {
  return Photo.create(photo).then((data) => data)
}

function updatePhoto(title, description, newDescription) {
  return Photo.findOneAndUpdate(
    { title, description },
    { description: newDescription },
    { new: true }
  ).then((data) => data)
}

function deletePhoto(name, title) {
  return Photo.findOneAndDelete({ name, title }).then((data) => data)
}

function deletePhotos(name) {
  return Photo.deleteMany({ name }).then((data) => data)
}

module.exports = {
  getPhotos,
  savePhoto,
  updatePhoto,
  deletePhoto,
  deletePhotos,
}
