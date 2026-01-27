import express from "express";
import upload from "../middleware/multer.middleware.js";
import {
  checkEmail,
  applyJob,
  getApplications,
  deleteApplication,
} from "../controllers/jobController.js";
import { adminAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/check-email", checkEmail);
router.post("/apply", upload.single("resume"), applyJob);

// Admin routes
router.get("/admin/applications", adminAuth, getApplications);
router.delete("/admin/applications/:id", adminAuth, deleteApplication);

export default router;
