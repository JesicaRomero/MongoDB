const { profesionalService } = require('../services')

async function getProfesionals(req, res, next) {
  try {
    const { id } = req.query
    const data = id
      ? await profesionalService.getProfesional(id)
      : await profesionalService.getProfesionals()
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function saveProfesional(req, res, next) {
  try {
    const profesional = req.body
    const data = await profesionalService.saveProfesional(profesional)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function updateProfesional(req, res, next) {
  try {
    const { id } = req.query
    const newData = req.body
    const data = await profesionalService.updateProfesional(id, newData)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

async function deleteProfesional(req, res, next) {
  try {
    const { id } = req.query
    const data = await profesionalService.deleteProfesional(id)
    res.json({ data })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getProfesionals,
  saveProfesional,
  updateProfesional,
  deleteProfesional,
}
