import express from "express";

import {
  getGrades,
  addGrade,
} from "../controllers/gradeController.js";

import { auth } from "../middleware/authMiddleware.js";

const router =
  express.Router();

router.get("/", auth, getGrades);

router.post(
  "/",
  auth,
  addGrade
);

export default router;