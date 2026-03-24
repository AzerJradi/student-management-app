const mongoose = require("mongoose")

const attendanceSchema =
  new mongoose.Schema({

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

    status: {
      type: String,
      enum: ["present", "absent", "late"],
    },

    date: {
      type: Date,
      default: Date.now,
    },

  })

module.exports = mongoose.model(
  "Attendance",
  attendanceSchema
)