import JobApplication from "../models/JobApplication.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";

// ✅ Check Email
export const checkEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const exists = await JobApplication.findOne({ email });
    res.json({ exists: !!exists });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// ✅ Apply Job
export const applyJob = async (req, res) => {
  try {
    const {
      name,
      email,
      coverLetter,
      jobTitle,
      jobTag,
      jobLocation,
      sourceWebsite,
    } = req.body;

    const exists = await JobApplication.findOne({ email });
    if (exists) return res.status(400).json({ error: "Email already used" });

    if (!req.file)
      return res.status(400).json({ error: "Resume file is required" });

    const cloudinaryResponse = await uploadOnCloudinary(req.file.path);
    if (!cloudinaryResponse)
      return res.status(500).json({ error: "Resume upload failed" });

    const application = new JobApplication({
      name,
      email,
      coverLetter,
      resumeUrl: cloudinaryResponse.secure_url,
      resumePublicId: cloudinaryResponse.public_id,

      jobTitle,
      jobTag,
      jobLocation,
      sourceWebsite,
    });

    await application.save();
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Submission failed" });
  }
};

// ✅ Get All Applications (Admin use)
export const getApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ appliedAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch applications" });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const app = await JobApplication.findById(req.params.id);

    if (!app) {
      return res.status(404).json({ error: "Application not found" });
    }

    // Delete resume from Cloudinary
    if (app.resumePublicId) {
      await cloudinary.uploader.destroy(app.resumePublicId, {
        resource_type: "raw", // important for PDFs
      });
    }

    await app.deleteOne();

    res.json({ success: true, message: "Application deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete application" });
  }
};
