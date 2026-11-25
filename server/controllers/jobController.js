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

// ✅ Add Candidate (Admin use)
export const createApplication = async (req, res) => {
  try {
    const {
      name,
      email,
      appliedAt,
      jobTitle,
      jobTag,
      jobLocation,
      sourceWebsite,
      resumeUrl,
      coverLetter,
    } = req.body;

    const requiredFields = {
      name,
      email,
      appliedAt,
      jobTitle,
      jobTag,
      jobLocation,
      sourceWebsite,
    };
    const missingFields = Object.entries(requiredFields)
      .filter(([, value]) => typeof value !== "string" || !value.trim())
      .map(([field]) => field);

    if (missingFields.length) {
      return res.status(400).json({
        error: "Required fields are missing",
        fields: missingFields,
      });
    }

    const dateApplied = new Date(appliedAt);
    if (Number.isNaN(dateApplied.getTime())) {
      return res.status(400).json({ error: "Applied date is invalid" });
    }

    const exists = await JobApplication.findOne({ email: email.trim() });
    if (exists) return res.status(400).json({ error: "Email already used" });

    const application = await JobApplication.create({
      name: name.trim(),
      email: email.trim(),
      appliedAt: dateApplied,
      jobTitle: jobTitle.trim(),
      jobTag: jobTag.trim(),
      jobLocation: jobLocation.trim(),
      sourceWebsite: sourceWebsite.trim(),
      resumeUrl: typeof resumeUrl === "string" ? resumeUrl.trim() : "",
      coverLetter: typeof coverLetter === "string" ? coverLetter : "",
    });

    res.status(201).json({ success: true, application });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "Email already used" });
    }
    console.error(err);
    res.status(500).json({ error: "Failed to add candidate" });
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
