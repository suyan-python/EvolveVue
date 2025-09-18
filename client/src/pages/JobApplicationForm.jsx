// src/pages/JobApplicationForm.jsx
import { useState } from "react";
import { Helmet } from "react-helmet";

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

  const jobDescription = `
Online data entry and analysis.
Write, edit, and review a variety of scientific and medical documents.
Follow standard procedures to manage data and present it accordingly.
Prepare documents within established timelines and follow well-defined processes.
Prepare documents of high quality in terms of scientific content, with attention to format, consistency, and accuracy.
Team player - communicate, rely on, and assist other team members as needed.
Able to navigate through frequent changes to instructions.
Able to show initiative.
Able to work quickly yet efficiently to achieve productivity goals.
Able to work according to US-based timelines and holiday coverage.
Able to check email and notifications throughout the day.
Excellent communication/language skills.
Knowledge of medical terminologies.
`;

  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try
    {
      const emailCheckResponse = await fetch(
        `${API_URL}/check-email?email=${formData.email}`
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

      const response = await fetch(`${API_URL}/apply`, {
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
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen flex items-center justify-center px-4">

      {/* <Helmet>
        <title>Apply Online – Job Application</title>
        <meta
          name="description"
          content="Submit your online job application for data entry, analysis, and scientific documentation."
        />
      </Helmet> */}

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-[90%] max-w-md">
            <h3 className="text-2xl font-bold text-green-600">✅ Application Sent</h3>
            <p className="mt-3 text-gray-700">
              Thank you for applying! We will review your application and get back
              to you shortly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 bg-[#0d1b2a] text-white px-6 py-3 rounded-lg hover:bg-[#1b263b] transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl border border-gray-200"
      >
        <h1 className="text-3xl font-bold text-center text-[#0d1b2a] mb-6">
          Job Application
        </h1>

        {errorMessage && (
          <div className="bg-red-50 border border-red-400 text-red-600 px-4 py-3 rounded-lg mb-6 text-center">
            {errorMessage}
          </div>
        )}

        {/* Job Description */}
        <div className="text-center mb-6">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all"
          >
            View Job Description
          </button>
        </div>

        {/* Job Description Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-[90%] max-h-[80vh] overflow-y-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Job Description
              </h3>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {jobDescription}
              </p>
              <div className="mt-6 text-right">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Name */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1b2a] focus:outline-none"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1b2a] focus:outline-none"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        {/* Resume */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Resume (PDF) <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept=".pdf"
            required
            className="hidden"
            id="resume-upload"
            onChange={(e) =>
            {
              const file = e.target.files[0];
              if (file)
              {
                setFormData((prev) => ({ ...prev, resume: file }));
                setResumeName(file.name);
              }
            }}
          />
          <label
            htmlFor="resume-upload"
            className="block w-full p-3 border border-gray-300 rounded-lg bg-gray-50 cursor-pointer text-center text-gray-600 hover:bg-gray-100 transition-all"
          >
            {resumeName ? resumeName : "Upload your Resume"}
          </label>
          {resumeName && (
            <p className="mt-2 text-sm text-gray-500">📄 {resumeName}</p>
          )}

          {/* Typing Test Link */}
          <div className="mt-5 text-center">
            <p className="text-xs text-gray-500">
              Please take a typing test and attach the result with your resume.
            </p>
            <a
              href="https://www.typing.com/student/tests"
              target="_blank"
              className="text-indigo-600 font-medium underline mt-1 inline-block"
            >
              Take Typing Test
            </a>
          </div>
        </div>

        {/* Cover Letter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cover Letter
          </label>
          <textarea
            rows="5"
            value={formData.coverLetter}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1b2a] focus:outline-none resize-none"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, coverLetter: e.target.value }))
            }
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-[#0d1b2a] text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all shadow-md hover:shadow-lg hover:bg-[#1b263b] ${loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
}
