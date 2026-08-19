import React from "react";
import { motion } from "framer-motion";
import MeetFounder from "./MeetFounder";
import CompanyNetwork from "../components/CompanyNetwork";

function AboutUs()
{
  return (
    <section className="relative w-full py-32  overflow-hidden text-white">

      <CompanyNetwork currentCompany="evolve-vue" />



      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#d6b25e]"></div>
            <span className="text-[10px] font-bold text-[#d6b25e] uppercase tracking-[0.5em]">
              The Evolve Vue Standard
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl  tracking-tighter leading-tight"
          >
            Precise Execution. <br />
            <span className="text-gray-500 font-light">Institutional Trust.</span>
          </motion.h2>
        </div>

        {/* --- WHO WE ARE (Institutional Framework) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 md:mb-32">
          <div className="lg:col-span-4">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#d6b25e]">Institutional Overview</h3>
          </div>
          <div className="lg:col-span-8 p-12 bg-[#121212] border border-white/5 border-l-4 border-l-[#d6b25e] rounded-md">
            <p className="text-xs md:text-2xl text-gray-300 leading-relaxed font-medium">
              Evolve Vue is a specialized medical BPO delivering <span className="text-white">high-fidelity documentation</span> and clinical support services.
              We bridge the gap between complex patient encounters and <span className="text-white font-bold">accurate clinical records</span> through
              rigorous compliance and technical excellence.
            </p>
          </div>
        </div>

        {/* this is my who we are section in my website.get the design concept and vibe of my website. i want to insert a section above this section where all of my 5 different companies are displayed. and below that the above content will be displayed as we are now taking about Vu devi Services.
those 5 companies are:
Vu devi - vudevi.com.np
Evolve Vue - current
JHP - jewelhimalayanproducts.com
JHCB - jewelhimalayanproducts.com/nepal-coffee-beans
Inaya - jewelhimalayanproducts.com/inaya-cafe

all these buttons should also be clicable. and also remember these all 5 company display section ill will be using across all of my webiste as common section or general section. so keep it professional and resuable. */}

        {/* --- VISION & MISSION (Sharp Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-16 md:mb-32 rounded-md overflow-hidden">
          <div className="p-12 bg-[#0b0e14] group hover:bg-[#121212] transition-colors">
            <span className="text-[10px] font-black text-[#d6b25e] uppercase tracking-[0.3em] mb-6 block">Future Objective</span>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-400 text-xs md:text-lg leading-relaxed">
              To define the global benchmark for medical documentation, ensuring
              unmatched <span className="text-white">efficiency, compliance, and innovation</span> in the healthcare BPO industry.
            </p>
          </div>
          <div className="p-12 bg-[#0b0e14] group hover:bg-[#121212] transition-colors">
            <span className="text-[10px] font-black text-[#d6b25e] uppercase tracking-[0.3em] mb-6 block">Operational Core</span>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-400 text-xs md:text-lg leading-relaxed">
              To deliver clinical support services with <span className="text-white">absolute precision</span>, maintaining
              stringent ethical standards and technological advancement to support provider excellence.
            </p>
          </div>
        </div>

        {/* --- CORE VALUES (The Pillars) --- */}
        <div className="mb-32">

          {/* Section Header */}
          <div className="flex items-center gap-6 mb-14">
            <h4 className="text-[10px] md:text-xs font-black text-white uppercase tracking-[0.35em] flex-shrink-0">
              Operational Pillars
            </h4>
            <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">

            {[
              {
                title: "Integrity",
                desc: "Absolute honesty and transparency across every clinical record and workflow.",
              },
              {
                title: "Excellence",
                desc: "Consistent delivery of high-precision documentation and quality assurance.",
              },
              {
                title: "Innovation",
                desc: "Smart systems and structured processes enhancing medical data workflows.",
              },
              {
                title: "Client-Centric",
                desc: "Every process is designed around client reliability and operational trust.",
              },
              {
                title: "Ethics",
                desc: "Strict adherence to global healthcare compliance and data governance standards.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="group relative p-6 md:p-7 rounded-xl border border-white/5 bg-[#121212] overflow-hidden transition-all duration-300 hover:border-[#d6b25e]/40 hover:-translate-y-1"
              >
                {/* Subtle Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d6b25e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Accent Line */}
                <div className="w-6 h-[2px] bg-[#d6b25e] mb-5 group-hover:w-10 transition-all duration-500"></div>

                {/* Title */}
                <h4 className="text-base md:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#d6b25e] transition-colors">
                  {value.title}
                </h4>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {value.desc}
                </p>

                {/* Corner Indicator */}
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#d6b25e] transition-all"></div>
              </div>
            ))}
          </div>

        </div>

        {/* --- WHY CHOOSE US (Technical Metrics) --- */}
        <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#121212] via-[#0f1117] to-[#0b0e14] p-8 md:p-16">

          {/* Background Accent */}
          <div className="absolute -top-10 -right-10 text-[80px] md:text-[120px] font-black text-white/5 select-none">
            TRUSTED
          </div>

          {/* Header */}
          <div className="max-w-2xl mb-12 md:mb-16">
            <h3 className="text-2xl md:text-4xl font-light text-white tracking-tight leading-snug">
              Why Healthcare Leaders Choose{" "}
              <span className="text-[#d6b25e]">Evolve Vue</span>
            </h3>

            <div className="w-16 h-[2px] bg-[#d6b25e] mt-6 mb-6"></div>

            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Built for precision, compliance, and scale — our systems are designed to support
              modern clinical workflows with reliability and speed.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 relative z-10">

            {/* Card */}
            <div className="group p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-black text-[#d6b25e] block mb-2 group-hover:scale-105 transition-transform">
                10+ Years
              </span>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                Industry Expertise
              </p>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                Proven clinical support experience across diverse healthcare systems.
              </p>
            </div>

            <div className="group p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-black text-[#d6b25e] block mb-2">
                100% Verified
              </span>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                HIPAA Compliance
              </p>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                Structured workflows with strict data security and validation layers.
              </p>
            </div>

            <div className="group p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-black text-[#d6b25e] block mb-2">
                AI-Driven
              </span>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                Modern Technology
              </p>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                Intelligent tools optimized for accuracy and faster turnaround times.
              </p>
            </div>

            <div className="group p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-black text-[#d6b25e] block mb-2">
                24/7 Global
              </span>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                Operational Support
              </p>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                Continuous coverage ensuring uninterrupted clinical operations worldwide.
              </p>
            </div>

          </div>

          {/* Bottom Glow Line */}
          <div className="mt-14 flex items-center justify-center">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d6b25e] to-transparent opacity-40"></div>
          </div>
        </div>

      </div>


      <MeetFounder />

    </section>
  );
}

export default AboutUs;