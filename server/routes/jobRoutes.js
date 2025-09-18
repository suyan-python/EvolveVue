// routes/jobRoutes.js
import express from "express";
import upload from "../middleware/upload.js";
import {
  checkEmail,
  applyJob,
  getApplications,
} from "../controllers/jobController.js";
import { adminAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/check-email", checkEmail);
router.post("/apply", upload.single("resume"), applyJob);

// Protected admin route
router.get("/admin/applications", adminAuth, getApplications);

export default router;
