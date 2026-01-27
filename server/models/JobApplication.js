import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  resumeUrl: String,
  resumePublicId: String,
  coverLetter: String,

  // 🔥 NEW
  jobTitle: String,
  jobTag: String,
  jobLocation: String,
  sourceWebsite: String,

  appliedAt: { type: Date, default: Date.now },
});

export default mongoose.model("JobApplication", JobApplicationSchema);
