const mongoose = require('mongoose')
require('dotenv').config()

const { Teacher, Mark } = require('./models')
const { populateDB } = require('./populate')

const { DB_URL, POPULATE_DB } = process.env

mongoose.set('strictQuery', false)
mongoose
  .connect(DB_URL, { useNewUrlParser: false, useUnifiedTopology: false })
  .then(() => console.log('Connected!'))
  .catch((err) => new Error(err))

if (POPULATE_DB == 'true') populateDB()

// Calcular la nota media de los alumnos de una asignatura concreta.
const subjectName = 'Arte'
Mark.aggregate([
  {
    $match: {
      subject_name: subjectName,
    },
  },
  {
    $group: {
      _id: 0,
      average: {
        $avg: '$mark',
      },
    },
  },
])
  .then((res) =>
    console.log(`La nota media en ${subjectName} es: ${res[0].average}`)
  )
  .catch((err) => new Error(err))

// Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.
Mark.aggregate([
  {
    $count: 'totalStudents',
  },
])
  .then((res) =>
    console.log(`El número total de alumnos es: ${res[0].totalStudents}`)
  )
  .catch((err) => new Error(err))

// Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.
Mark.aggregate([
  {
    $project: {
      Nombre: '$student_first_name',
      Apellido: '$student_last_name',
      _id: 0,
    },
  },
])
  .then((res) => console.log('Alumnos:\n', res))
  .catch((err) => new Error(err))

// Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.
Teacher.aggregate([
  {
    $project: {
      Nombre: '$teacher_first_name',
      Apellido: '$teacher_last_name',
      _id: 0,
    },
  },
])
  .then((res) => console.log('Profesores:\n', res))
  .catch((err) => new Error(err))

// Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.
Mark.aggregate([
  {
    $group: {
      _id: '$group_name',
      total: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      _id: -1,
    },
  },
])
  .then((res) => console.log('Alumnos por grupo:\n', res))
  .catch((err) => new Error(err))

// Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.
Mark.aggregate([
  {
    $group: {
      _id: '$subject_name',
      average: {
        $avg: '$mark',
      },
    },
  },
  {
    $match: {
      average: {
        $gt: 5,
      },
    },
  },
  {
    $sort: {
      average: -1,
    },
  },
  {
    $limit: 5,
  },
])
  .then((res) => console.log('Top 5 asignaturas:\n', res))
  .catch((err) => new Error(err))

// Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.
Mark.aggregate([
  {
    $unwind: '$teachers',
  },
  {
    $group: {
      _id: '$subject_name',
      teachers: {
        $addToSet: '$teachers',
      },
    },
  },
  {
    $project: {
      subject: '$_id',
      count: {
        $size: '$teachers',
      },
    },
  },
])
  .then((res) => console.log('Profesores por asignatura:\n', res))
  .catch((err) => new Error(err))
