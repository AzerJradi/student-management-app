import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema(
  {
    student: String,
    course: String,
    grade: Number,
  },
  { timestamps: true }
);

export default mongoose.model(
  "Grade",
  gradeSchema
);