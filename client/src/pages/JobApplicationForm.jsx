import { useState } from "react";

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

  const jobDescription = `
Online data entry and analysis.
Write, edit, and review a variety of scientific and medical documents.
Follow standard procedures to manage data and present it accordingly.
Prepare documents within established timelines and follow well-defined processes.
Prepare documents of high quality in terms of scientific content, with attention to format, consistency, and accuracy.
Team player- communicate, rely on, and assist other team members as needed.
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
    setErrorMessage(""); // Reset error message

    // Check if email already exists
    try
    {
      const emailCheckResponse = await fetch(
        `http://localhost:5000/check-email?email=${formData.email}`
      );
      const emailCheckData = await emailCheckResponse.json();

      if (!emailCheckResponse.ok)
      {
        throw new Error(emailCheckData.error);
      }

      if (emailCheckData.exists)
      {
        setErrorMessage("You have already applied with this email.");
        return;
      }
    } catch (error)
    {
      console.error("Error checking email:", error);
      setErrorMessage("Something went wrong. Please try again later.");
      return;
    }

    // Proceed with application submission
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("coverLetter", formData.coverLetter);

    try
    {
      const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();
      if (response.ok)
      {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          resume: null,
          coverLetter: "",
        });
        setResumeName("");
      } else
      {
        setErrorMessage(data.error);
      }
    } catch (error)
    {
      console.error("Error submitting application:", error);
      setErrorMessage("Submission failed. Try again later.");
    }
  };

  return (
    <div className="relative">
      {showSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-green-200/40 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-2xl font-semibold text-green-600">Success!</h3>
            <p className="mt-2 text-gray-700">
              Your application has been submitted successfully. Thank you!
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-4 text-center">
          {errorMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-lg border border-gray-200 my-14"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Apply for a Position
        </h2>

        {/* Button for displaying job description modal */}
        <div className="text-center my-4">
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="bg-[#0d1b2a] text-white px-6 py-3 rounded-lg transition-all font-semibold cursor-pointer"
          >
            Job Description
          </button>
        </div>

        {/* Modal for Job Description */}
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full transform transition-all duration-500 scale-100 ">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 cursor-pointer">
                Job Description
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {jobDescription}
              </p>
              <p className="font-semibold my-5">
                Candidate must have good skills in Microsoft Office package
                (Word and Excel) and a typing speed of a minimum of 40 words per
                minute.
              </p>
              <p className="font-semibold mt-4">
                • Starting Salary (gross): Rs. 40,000 - Rs.50,000 per month
              </p>
              <p className="text-red-500 font-semibold text-center my-5">
                *We need a commitment of at least 18 months*
              </p>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.name}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Resume (PDF) / Typing Speed <span className="text-red-500">*</span>
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
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-pointer text-center text-gray-700 hover:bg-gray-200 transition-all"
          >
            {resumeName ? resumeName : "Choose File"}
          </label>
          {/* Preview for the resume */}
          {resumeName && (
            <div className="mt-2 text-sm text-gray-500">
              <p>
                <strong>Preview:</strong> {resumeName}
              </p>
              <span className="text-xs text-gray-400">PDF file selected</span>
            </div>
          )}
          <div className="my-7 text-center">
            <p className="text-xs text-red-500 font-semibold">
              **Please take typing test and submit the result along your CV**
            </p>
            <a
              href="https://www.typing.com/student/tests"
              target="blank"
              className="text-blue-500 italic underline cursor-pointer"
            >
              Click Typing Test
            </a>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Cover Letter
          </label>
          <textarea
            rows="5"
            value={formData.coverLetter}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, coverLetter: e.target.value }))
            }
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0d1b2a] text-white px-6 py-3 rounded-lg text-lg font-medium  transition-all"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
