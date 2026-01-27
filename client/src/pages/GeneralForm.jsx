import React, { useState } from "react";
import { User, Mail, FileText, Upload, ShieldCheck, Briefcase } from "lucide-react";

export default function GeneralForm()
{
    const API_URL = import.meta.env.VITE_API_URL;

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        coverLetter: "",
        resume: null,
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) =>
    {
        const { name, value, files } = e.target;
        if (name === "resume")
        {
            setFormData({ ...formData, resume: files[0] });
        } else
        {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        try
        {
            const sendData = new FormData();
            sendData.append("name", formData.name);
            sendData.append("email", formData.email);
            sendData.append("coverLetter", formData.coverLetter);
            sendData.append("resume", formData.resume);

            // 🔵 Force as general enquiry
            sendData.append("jobTitle", "General Enquiry");
            sendData.append("jobTag", "N/A");
            sendData.append("jobLocation", "N/A");
            sendData.append("sourceWebsite", window.location.hostname);

            //   await axios.post(API_URL, sendData);

            /* ---------------- SUBMIT APPLICATION ---------------- */
            const response = await fetch(`${API_URL}/api/applications/apply`, {
                method: "POST",
                body: sendData, // DO NOT set headers manually
            });

            const data = await response.json();

            if (!response.ok)
            {
                throw new Error(data.error || "Submission failed");
            }
            setMessage("Your enquiry has been submitted successfully!");
            setFormData({ name: "", email: "", coverLetter: "", resume: null });
        } catch (err)
        {
            setMessage("Submission failed. Try again.", err);
        } finally
        {
            setLoading(false);
        }
    };

    return (
        <section className="w-full py-20 ">
            <div className="max-w-4xl mx-auto px-6">

                {/* --- Card Container --- */}
                <div className=" border border-white/25 rounded-md p-8 md:p-16 relative overflow-hidden">

                    {/* Subtle Background Glow *
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/5 rounded-full blur-[80px]"></div>

                    {/* Section Header */}
                    <div className="relative z-10 mb-12  flex flex-col justify-center items-center text-center">
                        <div className="flex items-center justify- gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center yellowText">
                                <Briefcase size={20} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                                General Talent <span className="yellowText">Inquiry</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                            Don't see a specific opening? Submit your credentials to our
                            <span className="text-[#9cee69]/70 font-bold"> Talent Database</span>.
                            Our recruitment team monitors this portal for future roles.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">

                        {/* Input Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                                    <User size={12} className="yellowText" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full bg-[#0b0e14] border border-white/10 rounded-xl px-5 py-3.5 text-gray-200 focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 outline-none transition-all placeholder:text-gray-700 text-sm"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                                    <Mail size={12} className="yellowText" /> Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="name@example.com"
                                    className="w-full bg-[#0b0e14] border border-white/10 rounded-xl px-5 py-3.5 text-gray-200 focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 outline-none transition-all placeholder:text-gray-700 text-sm"
                                />
                            </div>
                        </div>

                        {/* Cover Letter */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                                <FileText size={12} className="yellowText" /> Summary
                            </label>
                            <textarea
                                name="coverLetter"
                                rows="4"
                                value={formData.coverLetter}
                                onChange={handleChange}
                                placeholder="Tell us about your medical background or professional expertise..."
                                className="w-full bg-[#0b0e14] border border-white/10 rounded-xl px-5 py-3.5 text-gray-200 focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 outline-none transition-all placeholder:text-gray-700 text-sm resize-none"
                            />
                        </div>

                        {/* Resume Upload - "Dropzone" Style */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                                <Upload size={12} className="yellowText" /> Curriculum Vitae (PDF)
                            </label>
                            <div className="relative group">
                                <input
                                    type="file"
                                    name="resume"
                                    accept=".pdf"
                                    onChange={handleChange}
                                    required
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                                />
                                <div className="w-full border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 group-hover:border-yellow-500/30 group-hover:bg-yellow-500/5 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-yellow-500 transition-colors">
                                        <Upload size={20} />
                                    </div>
                                    <p className="text-xs font-bold text-gray-500 group-hover:text-gray-300">
                                        {formData.resume ? formData.resume.name : "Click or drag to upload your CV"}
                                    </p>
                                    <p className="text-[9px] text-gray-600 uppercase tracking-tighter">Maximum file size: 5MB (PDF only)</p>
                                </div>
                            </div>
                        </div>

                        {/* Security Notice & Submit */}
                        <div className="pt-6 flex flex-col items-center gap-6">


                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full md:w-auto px-16 py-4 yellow text-black rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#9cee69]/70 transition-all duration-500 active:scale-95"
                            >
                                {loading ? "Transmitting..." : "Initialize Submission"}
                            </button>

                            {message && (
                                <p className={`text-center text-xs font-bold tracking-wide mt-2 ${message.includes('success') ? 'text-gray-300/70' : 'text-red-400'}`}>
                                    {message}
                                </p>
                            )}

                            <div className="flex items-center gap-2 ">
                                <ShieldCheck size={14} className="text-[#9cee69]/70" />
                                <span className="text-[7px] font-black text-[#9cee69]/70 uppercase tracking-widest">
                                    Encrypted HIPAA-Compliant Submission
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
