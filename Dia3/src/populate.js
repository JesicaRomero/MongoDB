const { teachers, marks } = require('./data')
const { Teacher, Mark } = require('./models')

function populateDB() {
  const teacher0 = new Teacher(teachers[0])
  const teacher1 = new Teacher(teachers[1])
  const teacher2 = new Teacher(teachers[2])
  const teacher3 = new Teacher(teachers[3])

  const mark0 = new Mark({ ...marks[0], teachers: [teacher0] })
  const mark1 = new Mark({ ...marks[1], teachers: [teacher0] })
  const mark2 = new Mark({ ...marks[2], teachers: [teacher0] })
  const mark3 = new Mark({ ...marks[3], teachers: [teacher1] })
  const mark4 = new Mark({ ...marks[4], teachers: [teacher1] })
  const mark5 = new Mark({ ...marks[5], teachers: [teacher1] })
  const mark6 = new Mark({ ...marks[6], teachers: [teacher2] })
  const mark7 = new Mark({ ...marks[7], teachers: [teacher2] })
  const mark8 = new Mark({ ...marks[8], teachers: [teacher3] })
  const mark9 = new Mark({ ...marks[9], teachers: [teacher3] })

  teacher0
    .save()
    .then(() => teacher1.save())
    .then(() => teacher2.save())
    .then(() => teacher3.save())
    .then(() => mark0.save())
    .then(() => mark1.save())
    .then(() => mark2.save())
    .then(() => mark3.save())
    .then(() => mark4.save())
    .then(() => mark5.save())
    .then(() => mark6.save())
    .then(() => mark7.save())
    .then(() => mark8.save())
    .then(() => mark9.save())
    .then(() =>
      Teacher.updateOne(
        { teacher_first_name: teacher0.teacher_first_name },
        { marks: [mark0, mark1, mark2] }
      )
    )
    .then(() =>
      Teacher.updateOne(
        { teacher_first_name: teacher1.teacher_first_name },
        { marks: [mark3, mark4, mark5] }
      )
    )
    .then(() =>
      Teacher.updateOne(
        { teacher_first_name: teacher2.teacher_first_name },
        { marks: [mark6, mark7] }
      )
    )
    .then(() =>
      Teacher.updateOne(
        { teacher_first_name: teacher3.teacher_first_name },
        { marks: [mark8, mark9] }
      )
    )
    .catch((err) => new Error(err))
}

module.exports = { populateDB }
