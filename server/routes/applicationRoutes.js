import express from "express";
import upload from "../middleware/multer.middleware.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const router = express.Router();

router.post("/apply", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Resume file is required" });
    }

    // Upload resume to Cloudinary
    const cloudinaryResponse = await uploadOnCloudinary(req.file.path);

    if (!cloudinaryResponse) {
      return res.status(500).json({ error: "Resume upload failed" });
    }

    const applicant = {
      name: req.body.name,
      email: req.body.email,
      coverLetter: req.body.coverLetter,
      resumeUrl: cloudinaryResponse.secure_url,
      resumePublicId: cloudinaryResponse.public_id,
    };

    // Save to DB here later

    res.status(200).json({ message: "Application submitted", applicant });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
