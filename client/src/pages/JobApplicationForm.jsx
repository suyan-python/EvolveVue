// src/pages/JobApplicationForm.jsx
import { useState } from "react";
import { Helmet } from "react-helmet";
import Logo from "../assets/logo/evolve.png"

export default function JobApplicationForm()
{
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });
  const [resumeName, setResumeName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const jobDescription = {
    overview: [
      "Online data entry and analysis",
      "Preparation and review of scientific and medical documents",
    ],
    responsibilities: [
      "Write, edit, and review scientific and medical documents",
      "Ensure accuracy, consistency, and adherence to formatting standards",
      "Manage data according to defined processes and procedures",
      "Meet established timelines and productivity expectations",
      "Adapt to frequent updates in instructions and workflows",
      "Collaborate with team members to achieve shared goals",
    ],
    qualificaitons: [
      "Bachelor’s in Physiotherapy,",
      "Bachelor’s in Pharmacy",
      "Bachelor’s in Nursing",
      "Bachelor’s in Public Health",
      "BBA",
      "Bachelor’s in Computer Science",
    ],
    requirements: [
      "Strong written communication and language skills",
      "Knowledge of medical terminology",
      "High attention to detail and quality standards",
      "Ability to work efficiently under time constraints",
      "Comfortable working with US-based timelines and holidays",
    ],
    shift: ["6:30am - 3:00pm NST (8:15pm - 4:45am EST) Monday to Friday"]
  };


  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try
    {
      const emailCheckResponse = await fetch(
        `${API_URL}/api/applications/check-email?email=${formData.email}`
      );
      const emailCheckData = await emailCheckResponse.json();

      if (emailCheckData.exists)
      {
        setErrorMessage("⚠️ You have already applied with this email.");
        setLoading(false);
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("resume", formData.resume);
      formDataToSend.append("coverLetter", formData.coverLetter);

      const response = await fetch(`${API_URL}/api/applications/apply`, {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok)
      {
        setShowSuccess(true);
        setFormData({ name: "", email: "", resume: null, coverLetter: "" });
        setResumeName("");
      } else
      {
        setErrorMessage(data.error || "Submission failed.");
      }
    } catch (error)
    {
      console.error("Error submitting application:", error);
      setErrorMessage("❌ Submission failed. Try again later.");
    } finally
    {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 relative overflow-hidden">

      {/* --- Background Branding --- */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#9cee69]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Success Modal - Refined for Corporate Look */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-[100] px-4">
          <div className="bg-[#111] border border-white/10 p-8 rounded-3xl shadow-2xl text-center w-full max-w-md">
            <div className="w-16 h-16 bg-[#9cee69]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-[#9cee69] text-3xl">✓</span>
            </div>
            <h3 className="text-2xl font-bold text-white">Application Received</h3>
            <p className="mt-4 text-gray-400">
              Your details have been securely transmitted. Our recruitment team will review your profile shortly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-8 w-full bg-yellow-500 text-black font-bold py-3 rounded-xl hover:bg-yellow-600 transition-all"
            >
              Back to Careers
            </button>
          </div>
        </div>
      )}

      {/* Main Form Container */}
      <div className="relative z-10 w-full max-w-4xl grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl bg-[#111]">

        {/* Left Side: Branding & Info (Professional Sidebar) */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 md:p-12 flex flex-col justify-between border-r border-white/5">
          <div>
            <img src={Logo} alt="Logo" className="w-32 mb-10" />
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Join the <span className="text-yellow-500">Future</span> of Healthcare.
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Become part of a team that values precision, innovation, and global excellence in medical documentation.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => setShowModal(true)}>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                <span className="text-xl">i</span>
              </div>
              <span className="text-sm font-bold text-white tracking-widest uppercase underline decoration-yellow-500/50">View Job Details</span>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 p-8 md:p-12 bg-transparent">
          {errorMessage && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl mb-6 text-center text-sm">
              {errorMessage}
            </div>
          )}

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-2 ml-1">
                Full Name <span className="text-yellow-500">*</span>
              </label>
              <input
                type="text" required value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-2 ml-1">
                Email Address <span className="text-yellow-500">*</span>
              </label>
              <input
                type="email" required value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none transition-all"
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              />
            </div>

            {/* Resume Upload - Modern Styled */}
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-2 ml-1">
                Resume & Typing Test <span className="text-yellow-500">*</span>
              </label>
              <input type="file" accept=".pdf" required className="hidden" id="resume-upload"
                onChange={(e) =>
                {
                  const file = e.target.files[0];
                  if (file) { setFormData((prev) => ({ ...prev, resume: file })); setResumeName(file.name); }
                }}
              />
              <label htmlFor="resume-upload" className="flex items-center justify-between w-full p-4 border border-dashed border-white/20 rounded-xl bg-white/5 cursor-pointer hover:bg-white/10 hover:border-yellow-500/50 transition-all">
                <span className="text-gray-400 text-sm truncate">{resumeName ? resumeName : "Upload PDF Resume"}</span>
                <span className="text-yellow-500 text-xs font-bold uppercase">Browse</span>
              </label>
              <p className="mt-3 text-[10px] text-gray-500 leading-normal">
                Attach your CV and Typing Test result. <a href="https://www.typing.com/student/tests" target="_blank" className="text-[#9cee69] underline">Take test here.</a>
              </p>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-xs font-black text-gray-500 uppercase tracking-[0.2em] mb-2 ml-1">
                Cover Letter
              </label>
              <textarea
                rows="4" value={formData.coverLetter}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 outline-none resize-none transition-all"
                onChange={(e) => setFormData((prev) => ({ ...prev, coverLetter: e.target.value }))}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit" disabled={loading}
              className={`w-full bg-yellow-500 text-black py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all shadow-lg shadow-yellow-500/10 hover:bg-yellow-600 hover:scale-[1.02] active:scale-95 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {loading ? "Processing..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>

      {/* Modal - Adjusted for Dark Theme */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-[110] px-4" onClick={() => setShowModal(false)}>
          <div className="bg-[#111] border border-white/10 p-8 rounded-3xl max-w-lg w-full max-h-[80vh] overflow-y-auto relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-500 hover:text-yellow-500 text-2xl transition-colors">✕</button>
            <h3 className="text-2xl font-bold text-white mb-6">Position Details</h3>

            <div className="space-y-8 text-sm leading-relaxed">

              {/* Overview */}
              <section>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4">
                  Role Overview
                </h4>
                <ul className="space-y-2 text-gray-400">
                  {jobDescription.overview.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Responsibilities */}
              <section>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4">
                  Key Responsibilities
                </h4>
                <ul className="space-y-3 text-gray-400">
                  {jobDescription.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Qualifications */}
              <section>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4">
                  Required Academic Qualifications
                </h4>
                <ul className="space-y-3 text-gray-400">
                  {jobDescription.qualificaitons.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4">
                  Required General Qualifications
                </h4>
                <ul className="space-y-3 text-gray-400">
                  {jobDescription.requirements.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Time Shift */}
              <section>
                <h4 className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-4">
                  Our Working Shift Hours
                </h4>
                <ul className="space-y-3 text-gray-400">
                  {jobDescription.shift.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
