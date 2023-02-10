const photoService = require('../services/photo.service')

async function getPhotos(req, res, next) {
  try {
    const { name } = req.query
    const data = await photoService.getPhotos(name)
    res.json({ photos: data })
  } catch (err) {
    next(err)
  }
}

async function savePhoto(req, res, next) {
  try {
    const photo = req.body
    const data = await photoService.savePhoto(photo)
    res.json({ photo: data })
  } catch (err) {
    next(err)
  }
}

async function updatePhoto(req, res, next) {
  try {
    const { title, description, newDescription } = req.body
    const data = await photoService.updatePhoto(
      title,
      description,
      newDescription
    )
    res.json({ photo: data })
  } catch (err) {
    next(err)
  }
}

async function deletePhotos(req, res, next) {
  try {
    const { name, title } = req.query
    const data = title
      ? await photoService.deletePhoto(name, title)
      : await photoService.deletePhotos(name)
    res.json({ response: data })
  } catch (err) {
    next(err)
  }
}

module.exports = { getPhotos, savePhoto, updatePhoto, deletePhotos }
