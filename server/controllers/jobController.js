import JobApplication from "../models/JobApplication.js";

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
    const { name, email, coverLetter } = req.body;

    const exists = await JobApplication.findOne({ email });
    if (exists) return res.status(400).json({ error: "Email already used" });

    const application = new JobApplication({
      name,
      email,
      coverLetter,
      resumePath: req.file ? req.file.path : null,
    });

    await application.save();
    res.json({ success: true, message: "Application submitted!" });
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
