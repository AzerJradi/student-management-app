import Student from "../models/Student.js";

export const getStudents =
  async (req, res) => {
    const data =
      await Student.find();
    res.json(data);
  };

export const addStudent =
  async (req, res) => {
    const {
      name,
      age,
      email,
      level,
      className,
    } = req.body;

    const student =
      await Student.create({
        name,
        age,
        email,
        level,
        className,
      });

    res.json(student);
  };

export const deleteStudent = async (req, res) => {

  await Student.findByIdAndDelete(
    req.params.id
  );

  res.json("deleted");
};