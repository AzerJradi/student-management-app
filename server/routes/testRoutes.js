import express from "express";

import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/private",
  auth,
  (req, res) => {
    res.json("PRIVATE OK");
  }
);

export default router;