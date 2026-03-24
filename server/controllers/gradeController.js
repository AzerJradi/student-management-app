import Grade from "../models/Grade.js";

export const getGrades =
  async (req, res) => {
    const data =
      await Grade.find();
    res.json(data);
  };

export const addGrade =
  async (req, res) => {
    const {
      student,
      course,
      grade,
    } = req.body;

    const g =
      await Grade.create({
        student,
        course,
        grade,
      });

    res.json(g);
  };