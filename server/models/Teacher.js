const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({

  name: String,

  email: String,

  subject: String,

  phone: String,

  salary: Number,

  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],

})

module.exports = mongoose.model(
  "Teacher",
  teacherSchema
)