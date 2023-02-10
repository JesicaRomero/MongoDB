const express = require('express')
const photoController = require('../controllers/photo.controller')

const router = express.Router()

router.get('/photos', photoController.getPhotos)
router.post('/photos', photoController.savePhoto)
router.put('/photos', photoController.updatePhoto)
router.delete('/photos', photoController.deletePhotos)

module.exports = router
