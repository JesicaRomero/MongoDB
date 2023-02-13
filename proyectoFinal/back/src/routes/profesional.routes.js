const express = require('express')
const { profesionalController } = require('../controllers')

const router = express.Router()

router.get('/profesionales', profesionalController.getProfesionals)
router.post('/profesionales', profesionalController.saveProfesional)
router.put('/profesionales', profesionalController.updateProfesional)
router.delete('/profesionales', profesionalController.deleteProfesional)

module.exports = router
