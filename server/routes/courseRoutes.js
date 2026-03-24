import express from "express";

import {
  getCourses,
  addCourse,
} from "../controllers/courseController.js";

import { auth } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router =
  express.Router();

router.get("/", auth, getCourses);

router.post(
  "/",
  auth,
  isAdmin,
  addCourse
);

export default router;