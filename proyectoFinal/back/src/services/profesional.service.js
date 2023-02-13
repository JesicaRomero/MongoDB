const { Profesional } = require('../models')

function getProfesional(id) {
  return Profesional.findById(id)
    .then((data) => [data])
    .catch(() => [])
}

function getProfesionals() {
  return Profesional.find().then((data) => data)
}

function saveProfesional(profesional) {
  return Profesional.create(profesional).then((data) => data)
}

function updateProfesional(id, newData) {
  return Profesional.findOneAndUpdate({ _id: id }, newData, { new: true }).then(
    (data) => data
  )
}

function deleteProfesional(id) {
  return Profesional.findOneAndDelete({ _id: id }).then((data) => data)
}

module.exports = {
  getProfesional,
  getProfesionals,
  saveProfesional,
  updateProfesional,
  deleteProfesional,
}
