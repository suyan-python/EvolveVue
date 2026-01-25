import React from "react";
import { Link } from "react-router-dom";

const Job = () =>
{
    const JOB_OPENINGS = [
        {
            id: "medical-documentation-specialist",
            title: "Medical Documentation Specialist",
            tag: "Clinical",
            location: "Remote / Full-time",
            salary: "Competitive",
        },
        {
            id: "data-entry-analyst",
            title: "Data Entry Analyst",
            tag: "Clerical",
            location: "Remote / Contract",
            salary: "Fixed Rate",
        },
        {
            id: "quality-assurance-reviewer",
            title: "Quality Assurance Reviewer",
            tag: "Clinical",
            location: "US Shift / Hybrid",
            salary: "Competitive",
        },
    ];

    return (
        <section className="w-full min-h-screen bg-[#0b0e14] text-white">
            {/* 1. HERO SECTION: Aesthetic & Professional */}
            <div className="w-full py-24 px-6 md:px-12 bg-gradient-to-b from-[#0B0E14] to-[#121212] border-b border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col gap-4">
                        <span className="flex items-center gap-2 text-[#d6b25e] uppercase tracking-[0.4em] text-[10px] font-bold">
                            <span className="w-2 h-2 rounded-full bg-[#d6b25e] animate-pulse"></span>
                            Now Hiring Professionals
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Shape the Future of <br />
                            <span className="text-gray-500">Medical Documentation.</span>
                        </h1>
                        <p className="mt-6 text-gray-400 max-w-2xl text-lg leading-relaxed">
                            We are looking for detail-oriented experts to support global healthcare providers
                            with accurate and compliant clinical records.
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. TRUST BAR: Small icons or text that build credibility */}
            <div className="bg-white/[0.02] py-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 justify-between text-[11px] uppercase tracking-widest text-gray-500 font-semibold">
                    <span>✓ HIPAA Compliant Standards</span>
                    <span>✓ Secure Data Handling</span>
                    <span>✓ Professional Growth Tracks</span>
                    <span>✓ Equal Opportunity Employer</span>
                </div>
            </div>

            {/* 3. JOB LISTINGS: Full-Width Experience */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 gap-6">
                    {JOB_OPENINGS.map((job) => (
                        <div
                            key={job.id}
                            className="group relative flex flex-col md:flex-row md:items-center justify-between p-8 rounded-2xl bg-[#121212] border border-white hover:border-[#d6b25e]/30 transition-all duration-300 shadow-xl"
                        >
                            {/* Background Glow Effect on Hover */}
                            <div className="absolute inset-0 rounded-2xl bg-[#d6b25e]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="px-3 py-1 rounded-md bg-[#d6b25e]/10 text-[#d6b25e] text-[10px] font-bold uppercase tracking-wider">
                                        {job.tag}
                                    </span>
                                    <span className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
                                        {job.location}
                                    </span>
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-[#d6b25e] transition-colors">
                                    {job.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">Starting at {job.salary} • Immediate Start Available</p>
                            </div>

                            <div className="relative z-10 mt-6 md:mt-0">
                                <Link
                                    to={`/application/apply/${job.id}`}
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold uppercase tracking-widest group-hover:bg-[#d6b25e] group-hover:text-black transition-all duration-300 w-full md:w-auto"
                                >
                                    View & Apply
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. FOOTER TRUST NOTE */}
            <footer className="max-w-7xl mx-auto px-6 pb-20">
                <div className="p-10 rounded-[2.5rem] bg-gradient-to-r from-[#d6b25e]/10 to-transparent border border-[#d6b25e]/20">
                    <div className="max-w-2xl">
                        <h4 className="text-lg font-semibold mb-3">Commitment to Excellence</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Our recruitment process is rigorous because our standards are high.
                            We review every application thoroughly to ensure we build a team of
                            true professionals dedicated to medical accuracy.
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Job;