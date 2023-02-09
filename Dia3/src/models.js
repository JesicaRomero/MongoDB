const { Schema, model } = require('mongoose')

const TeacherSchema = new Schema({
  teacher_first_name: String,
  teacher_last_name: String,
})

const MarkSchema = new Schema({
  date: Date,
  mark: Number,
  student_first_name: String,
  student_last_name: String,
  group_name: String,
  subject_name: String,
  teachers: [TeacherSchema],
})

TeacherSchema.add({
  marks: [MarkSchema],
})

module.exports = {
  Teacher: model('Teacher', TeacherSchema),
  Mark: model('Mark', MarkSchema),
}
