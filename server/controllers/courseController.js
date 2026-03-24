import Course from "../models/Course.js";

export const getCourses =
  async (req, res) => {
    const data =
      await Course.find();
    res.json(data);
  };

export const addCourse =
  async (req, res) => {
    const { name, teacher } =
      req.body;

    const course =
      await Course.create({
        name,
        teacher,
      });

    res.json(course);
  };