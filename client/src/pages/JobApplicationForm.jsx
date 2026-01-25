// src/pages/JobApplicationForm.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Logo from "../assets/logo/evolve.png"
import { CheckCircle2, Clock, Info, MapPin, X } from "lucide-react";
import { useParams, Navigate } from "react-router-dom";


export default function JobApplicationForm()
{
  const API_URL = import.meta.env.VITE_API_URL;
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

  const { jobId } = useParams();

  const JOB_OPENINGS = [
    {
      id: "medical-documentation-specialist",
      title: "Medical Documentation Specialist",
      tag: "Clinical",
      location: "Remote",
    },
    {
      id: "data-entry-analyst",
      title: "Data Entry Analyst",
      tag: "Clerical",
      location: "Remote",
    },
    {
      id: "quality-assurance-reviewer",
      title: "Quality Assurance Reviewer",
      tag: "Clinical",
      location: "US Shift",
    },
  ];

  const selectedJob = JOB_OPENINGS.find(
    (job) => job.id === jobId
  );
  if (!selectedJob)
  {
    return <Navigate to="/careers" replace />;
  }



  const jobDescription = {
    title: "Medical Report Reviewer (Office-Based)",
    location: "Balkumari, Lalitpur",
    contract: "18-Month Minimum Service Commitment",
    training: "1-Month Paid Mandatory Training (100% Attendance)",
    overview: [
      "Analyze and review medical records for quality and compliance.",
      "Identify key clinical findings and ensure documentation standards.",
      "Support the medical documentation and quality review team.",
    ],
    responsibilities: [
      "Identify, review, and classify medical and legal documents accurately.",
      "Extract key findings and flag missing, unclear, or inconsistent information.",
      "Enter and annotate data in structured templates following internal guidelines.",
      "Verify accuracy and consistency through rigorous quality assurance checks.",
      "Coordinate with QA teams and escalate issues to internal departments.",
      "Contribute to workflow efficiency by providing process improvement feedback.",
    ],
    qualifications: [
      "Bachelor's in Physiotherapy (BPT)",
      "Bachelor's in Nursing or Pharmacy",
      "Bachelor's in Public Health (BPH)",
      "BBA or Bachelor's in Computer Science",
      "Medical or health science background highly preferred.",
    ],
    requirements: [
      "Excellent written and spoken English communication skills.",
      "Proficiency in MS Word and MS Excel.",
      "Minimum typing speed of 40 WPM (verified by test).",
      "Ability to work independently with high attention to detail.",
      "Strong time management and adaptability skills.",
    ],
    benefits: [
      "Competitive salary package.",
      "Paid training and structured onboarding.",
      "Career growth pathways (QA & Leadership).",
      "Supportive, team-oriented work culture.",
    ],
    shift: ["6:30 AM – 3:00 PM NST", "Monday to Friday (Saturday & Sunday Off)"]
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
      <div className="min-h-screen w-full bg-[#0B0E14] text-white flex flex-col lg:flex-row overflow-x-hidden">

        {/* LEFT SIDE: Branding & Trust (40% Width) */}
        <div className="w-full lg:w-[40%] bg-gradient-to-b from-[#0B0E14] to-[#050505] p-10 md:p-20 flex flex-col justify-between border-r border-white/5">
          <div>
            <img src={Logo} alt="Logo" className="w-40 mb-12" />

            <div className="space-y-6">
              <span className="text-[#d6b25e] uppercase tracking-[0.3em] text-xs font-bold">Official Application Portal</span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Join Our Clinical <br />
                <span className="text-gray-400">Documentation Team</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                We maintain the highest standards of medical documentation. Your expertise helps physicians deliver better patient care.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="mt-8 group flex items-center gap-2 text-sm text-gray-400 hover:text-[#d6b25e] transition-all cursor-pointer"
              >

                <Info size={16} />
                <span className="underline font-bold">  Read Job Requirements</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>

          <div className="mt-20">
            <div className="p-6 rounded-md bg-white/5 border border-white/10 ">
              <h4 className="text-[#d6b25e] font-semibold mb-2">Security & Privacy</h4>
              <p className="text-xs text-gray-500 leading-normal">
                Your data is encrypted and handled according to healthcare compliance standards. We never share your personal information.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE: The Form (60% Width) */}
        <div className="w-full lg:w-[60%] bg-[#121212] p-10 md:p-20 flex flex-col justify-center">
          <div className="max-w-2xl">
            {/* Header Info */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold text-white">Applying for <span className="yellowText">{selectedJob.title} </span> </h2>
              <div className="flex gap-4 mt-3">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-gray-400">
                  {selectedJob.tag}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-gray-400">
                  {selectedJob.location}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm animate-pulse">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Full Name</label>
                  <input
                    type="text" required value={formData.name}
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#d6b25e] outline-none transition-all"
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Email Address</label>
                  <input
                    type="email" required value={formData.email}
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-[#d6b25e] outline-none transition-all"
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>

              {/* Resume Upload Section */}
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Resume & Credentials</label>
                <input type="file" accept=".pdf" required className="hidden" id="resume-upload"
                  onChange={(e) =>
                  {
                    const file = e.target.files[0];
                    if (file) { setFormData((prev) => ({ ...prev, resume: file })); setResumeName(file.name); }
                  }}
                />
                <label htmlFor="resume-upload" className="flex items-center justify-between w-full p-6 border-2 border-dashed border-white/10 rounded-md bg-white/5 cursor-pointer hover:border-[#d6b25e]/40 hover:bg-white/10 transition-all group">
                  <div className="flex flex-col">
                    <span className="text-gray-300 font-medium">{resumeName ? resumeName : "Click to upload PDF"}</span>
                    <span className="text-xs text-gray-500 mt-1">Maximum file size: 5MB</span>
                  </div>
                  <span className="bg-[#d6b25e] text-black text-[10px] font-bold px-4 py-2 rounded-lg">BROWSE</span>
                </label>
                <p className="text-[11px] text-gray-500">
                  Please include your CV and Typing Test results. <a href="https://www.typing.com/student/tests" target="_blank" className="text-[#d6b25e] hover:underline">Verify your speed here.</a>
                </p>
              </div>

              {/* Cover Letter */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Cover Letter (Optional)</label>
                <textarea
                  rows="4" value={formData.coverLetter}
                  placeholder="Tell us why you're a great fit..."
                  className="w-full bg-white/5 border border-white/10 rounded-md p-4 text-white focus:border-[#d6b25e] outline-none resize-none transition-all"
                  onChange={(e) => setFormData((prev) => ({ ...prev, coverLetter: e.target.value }))}
                ></textarea>
              </div>

              {/* Final Action */}
              <button
                type="submit" disabled={loading}
                className={`w-full py-5 rounded-md text-sm font-bold uppercase tracking-[0.2em] transition-all
                ${loading
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-[#d6b25e] text-black hover:bg-[#c9a84f] shadow-[0_10px_30px_rgba(214,178,94,0.2)] hover:shadow-none hover:translate-y-[2px]"
                  }`}
              >
                {loading ? "Verifying Details..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>


      {/* Job Description Modal with Enhanced Animations */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            // Animation: Smooth fade and scale-up
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[150] bg-[#0b0e14] flex flex-col overflow-hidden"
          >
            {/* --- TOP NAVIGATION BAR --- */}
            <div className="w-full h-16 md:h-20 border-b border-white/5 flex items-center justify-between px-6 md:px-12 bg-[#0b0e14]/80  sticky top-0 z-[160]">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#9cee69] rounded-full animate-pulse shadow-[0_0_8px_#9cee69]"></div>
                <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">
                  Career Portal Active
                </span>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="flex items-center gap-2 group text-gray-400 hover:text-yellow-500 transition-all"
              >
                <span className="hidden md:inline text-[10px] font-bold uppercase tracking-widest">Exit Portal</span>
                <div className="p-2 border border-white/10 rounded-full group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10">
                  <X size={18} />
                </div>
              </button>
            </div>

            {/* --- MAIN CONTENT: Responsive Layout --- */}
            <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">

              {/* LEFT SIDEBAR: Vital Statistics */}
              <aside className="w-full lg:w-[380px] bg-[#0e121a] border-r border-white/5 p-8 md:p-12 lg:overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{jobDescription.title}</h2>
                  <div className="w-12 h-1 bg-yellow-500 mb-10"></div>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <MapPin className="text-yellow-500 mt-1" size={18} />
                      <div>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Location</p>
                        <p className="text-gray-200 text-sm font-medium">{jobDescription.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="text-yellow-500 mt-1" size={18} />
                      <div>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Shift Schedule</p>
                        {jobDescription.shift.map((s, i) => (
                          <p key={i} className="text-gray-200 text-sm font-medium">{s}</p>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#12171f] p-5 rounded-2xl border border-white/5 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <p className="text-[10px] font-black text-white uppercase tracking-widest">Commitment</p>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed font-medium">{jobDescription.contract}</p>
                    </div>
                  </div>
                </motion.div>
              </aside>

              {/* RIGHT CONTENT: Detailed Sections */}
              <main className="flex-1 bg-[#0b0e14] p-6 md:p-12 lg:p-20 lg:overflow-y-auto">
                <div className="max-w-4xl mx-auto space-y-16">

                  {/* 01. Overview */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-white/30 font-black text-4xl">01</span>
                      <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px]">Role Overview</h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {jobDescription.overview.map((item, i) => (
                        <div key={i} className="p-5 bg-[#12171f] border border-white/5 rounded-2xl text-gray-400 text-sm leading-relaxed hover:border-yellow-500/20 transition-colors">
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* 02. Qualifications */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-white/30 font-black text-4xl">02</span>
                      <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px]">Academic Prerequisites</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {jobDescription.qualifications.map((item, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[11px] text-gray-300 font-bold uppercase tracking-wide">
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* 03. Responsibilities */}
                  <section>
                    <div className="flex items-center gap-4 mb-8">
                      <span className="text-white/30 font-black text-4xl">03</span>
                      <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px]">Primary Responsibilities</h4>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                      {jobDescription.responsibilities.map((item, i) => (
                        <li key={i} className="flex gap-4 text-sm text-gray-400 leading-relaxed group">
                          <CheckCircle2 className="text-white/40 group-hover:text-white transition-colors flex-shrink-0" size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Benefits Section */}
                  <section className="bg-gradient-to-br from-[#12171f] to-[#0b0e14] p-8 md:p-12 rounded-[2.5rem] border border-white/5">
                    <h4 className="text-[#9cee69] font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-center">Institutional Benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                      {jobDescription.benefits.map((item, i) => (
                        <div key={i} className="text-center">
                          <p className="text-white text-xs font-bold uppercase tracking-tighter leading-tight">{item}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Final Call to Action */}
                  <div className="pt-20 pb-10 border-t border-white/5 flex flex-col items-center">
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] mb-8 font-black text-center">Inquiry & Application Portal</p>
                    <button

                      onClick={() => setShowModal(false)}
                      className="bg-yellow-500 text-black px-12 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-yellow-600 transition-all shadow-xl shadow-yellow-500/20"
                    >
                      Start Application Process
                    </button>
                  </div>

                </div>
              </main>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
