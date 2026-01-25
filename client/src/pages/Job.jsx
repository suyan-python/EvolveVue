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
            <div className="w-full pt-24 px-6 md:px-12 ">
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

            <div className="bg-[#0b0e14] min-h-screen">
                {/* 1. JOB LISTINGS: Square & Structured */}
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 gap-4">
                        <h1 className="text-2xl md:text-4xl text-center md:text-start font-semibold" > Job Openings </h1>
                        {JOB_OPENINGS.map((job) => (
                            <div
                                key={job.id}
                                className="group relative flex flex-col md:flex-row md:items-center justify-between 
                         p-8 bg-[#121212] border border-white/5 
                         border-l-4 border-l-white/10 hover:border-l-[#d6b25e] 
                         transition-all duration-300 shadow-2xl"
                            >

                                {/* Subtle Linear Background for Authenticity */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#d6b25e]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-3">
                                        <span className="text-[#d6b25e] text-[10px] font-black uppercase tracking-[0.3em]">
                                            {job.tag}
                                        </span>
                                        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
                                        <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                                            ID: {job.id.slice(0, 8)} • {job.location}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                                        {job.title}
                                    </h3>
                                    <p className="mt-2 text-xs text-gray-500 uppercase tracking-widest font-medium">
                                        Financial Bracket: <span className="text-gray-300">{job.salary}</span>
                                    </p>
                                </div>

                                <div className="relative z-10 mt-8 md:mt-0">
                                    <Link
                                        to={`/application/apply/${job.id}`}
                                        className="inline-flex items-center justify-center px-10 py-4 
                             border border-[#d6b25e]/30 text-[#d6b25e] text-[11px] font-black uppercase tracking-[0.2em]
                             hover:bg-[#d6b25e] hover:text-black transition-all duration-500 w-full md:w-auto"
                                    >
                                        Apply Application
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. FOOTER: The "Institutional" Seal */}
                <footer className="w-full px-6 pb-20">
                    <div className="max-w-7xl mx-auto border-t border-white/10 pt-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                            {/* Left side: The Mission */}
                            <div className="lg:col-span-7">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-[2px] bg-[#d6b25e]"></div>
                                    <h4 className="text-xs font-black text-white uppercase tracking-[0.4em]">Commitment to Excellence</h4>
                                </div>
                                <p className="text-xl md:text-2xl text-gray-400 leading-snug max-w-2xl font-medium">
                                    Our recruitment process is <span className="text-white">rigorous</span> because our standards are high.
                                    We verify every professional to ensure absolute <span className="text-[#d6b25e]">medical accuracy</span>.
                                </p>
                            </div>

                            {/* Right side: Trust Metrics */}
                            <div className="lg:col-span-5 grid grid-cols-2 gap-8 border-l border-white/5 pl-0 lg:pl-12">
                                <div>
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2 text-center">Standard</p>
                                    <div className="h-20 flex items-center justify-center border border-white/5 bg-white/[0.02]">
                                        <span className="text-white font-black text-xs tracking-tighter">HIPAA COMPLIANT</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2 text-center">Integrity</p>
                                    <div className="h-20 flex items-center justify-center border border-white/5 bg-white/[0.02]">
                                        <span className="text-white font-black text-xs tracking-tighter">ISO CERTIFIED</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Final Copyright Bar */}
                        <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-bold text-gray-600 uppercase tracking-[0.3em]">
                            <p>© 2026 EVOLVE VUE PVT. LTD. ALL RIGHTS RESERVED.</p>
                            <div className="flex gap-8">
                                <a href="#" className="hover:text-[#d6b25e] transition-colors">Privacy Protocol</a>
                                <a href="#" className="hover:text-[#d6b25e] transition-colors">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </footer>
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

        </section>
    );
};

export default Job;