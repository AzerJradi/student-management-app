import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    name: String,
    teacher: String,
  },
  { timestamps: true }
);

export default mongoose.model(
  "Course",
  courseSchema
);