import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  resumeUrl: String, // <- Cloudinary URL
  resumePublicId: String, // <- optional for delete
  coverLetter: String,
  appliedAt: { type: Date, default: Date.now },
});

export default mongoose.model("JobApplication", JobApplicationSchema);
