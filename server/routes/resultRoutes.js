import express from "express";
import {
  submitResult,
  getAllResults,
} from "../controllers/resultController.js";
import { submitLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/submit", submitLimiter, submitResult);
router.get("/", getAllResults);

export default router;
