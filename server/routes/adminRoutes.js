import express from "express";
import { loginAdmin, verifyAdmin } from "../controllers/adminController.js";
import { getApplications } from "../controllers/jobController.js";

const router = express.Router();

// Public login route
router.post("/login", loginAdmin);

// Protected admin route
router.get("/applications", verifyAdmin, getApplications);

export default router;
