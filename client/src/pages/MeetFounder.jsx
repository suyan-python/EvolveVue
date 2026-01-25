import React from "react";
import { motion } from "framer-motion";
import Binayak from "../assets/person/binayak2.jpeg";

const MeetFounder = () =>
{
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#0b0e14] py-32 px-6 overflow-hidden">
            {/* 1. Structural Background Pattern (Consistency across sections) */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0h1v40H0zM0 0h40v1H0z' fill='%23ffffff'/%3E%3C/svg%3E")` }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* --- SECTION HEADER --- */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-12 h-[1px] bg-[#d6b25e]"></div>
                        <span className="text-[10px] font-bold text-[#d6b25e] uppercase tracking-[0.5em]">Executive Leadership</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                        The Vision Behind <span className="text-gray-500 ">Evolve Vue.</span>
                    </h2>
                </div>

                {/* --- MAIN CONTENT GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Column: The Identity (Pillar) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <div className="relative group">
                            {/* Image with Sharp Edges */}
                            <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-white/10 shadow-2xl">
                                <img
                                    src={Binayak}
                                    alt="Binayak Malla - Founder"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Identity Card */}
                            <div className="absolute -bottom-6 -right-6 bg-[#121212] border border-white/10 p-8 rounded-md shadow-2xl max-w-xs">
                                <h3 className="text-2xl font-bold text-white tracking-tight">Binayak Malla</h3>
                                <p className="text-[#d6b25e] text-[10px] font-black uppercase tracking-[0.3em] mt-2">Founder & Managing Director</p>
                                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#d6b25e] shadow-[0_0_8px_#d6b25e]"></div>
                                    <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">Verified Credentials</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: The Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-7 flex flex-col pt-12 lg:pt-0"
                    >
                        <h4 className="text-xs font-black text-gray-500 uppercase tracking-[0.4em] mb-8">Founder's Statement</h4>

                        <div className="space-y-8">
                            <p className="text-2xl md:text-4xl font-medium text-white leading-tight tracking-tight">
                                "We don't just build businesses—we build
                                <span className="text-[#d6b25e]"> impactful solutions </span>
                                that bridge the gap between healthcare and technology."
                            </p>

                            <div className="w-20 h-[2px] bg-[#d6b25e]"></div>

                            <div className="text-gray-400 text-lg leading-relaxed space-y-6 max-w-2xl font-medium">
                                <p>
                                    As an entrepreneur and problem-solver, my journey with Evolve Vue began with a singular focus:
                                    to provide healthcare providers with the <strong>uncompromising accuracy</strong> they require to focus on patient care.
                                </p>
                                <p>
                                    With over a decade of industry transformation, I believe that success in medical BPO
                                    is a product of three pillars: <span className="text-white italic">Innovation, Strategy, and People.</span>
                                </p>
                            </div>

                            {/* Digital Signature Placeholder */}
                            <div className="mt-12">
                                <div className="text-gray-600 font-serif text-3xl italic select-none opacity-50">
                                    Binayak Malla
                                </div>
                                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mt-2">
                                    Authenticated Leadership
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- TRUST BAR --- */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
                    {[
                        { label: "EXPERIENCE", val: "10+ YEARS" },
                        { label: "STRATEGY", val: "DATA-DRIVEN" },
                        { label: "FOCUS", val: "HEALTHCARE" },
                        { label: "GOAL", val: "ACCURACY" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-[#d6b25e] text-xs font-black tracking-widest uppercase mb-1">{stat.val}</p>
                            <p className="text-gray-600 text-[9px] font-bold tracking-[0.2em] uppercase">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MeetFounder;