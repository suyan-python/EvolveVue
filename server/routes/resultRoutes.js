import express from "express";
import {
  submitResult,
  getAllResults,
  deleteResult,
} from "../controllers/resultController.js";
import { submitLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/submit", submitLimiter, submitResult);
router.get("/", getAllResults);
router.delete("/:id", deleteResult);

export default router;
