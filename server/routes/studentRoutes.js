import express from "express";

import {
  getStudents,
  addStudent,
} from "../controllers/studentController.js";

import { auth } from "../middleware/authMiddleware.js";

const router =
  express.Router();

router.get("/", auth, getStudents);
router.delete("/:id", deleteStudent);
router.post(
  "/",
  auth,
  addStudent
);

export default router;