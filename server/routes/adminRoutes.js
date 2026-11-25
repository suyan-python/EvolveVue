import express from "express";
import { loginAdmin, verifyAdmin } from "../controllers/adminController.js";
import {
  createApplication,
  deleteApplication,
  getApplications,
} from "../controllers/jobController.js";

const router = express.Router();

// Public login route
router.post("/login", loginAdmin);

// Protected admin route
router.get("/applications", verifyAdmin, getApplications);
router.post("/applications", verifyAdmin, createApplication);
router.delete("/applications/:id", verifyAdmin, deleteApplication);

export default router;
