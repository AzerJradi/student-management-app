import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
    level: String,
    className: String,
  },
  { timestamps: true }
);

export default mongoose.model(
  "Student",
  studentSchema
);