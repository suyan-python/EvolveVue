import React from "react";
import { motion } from "framer-motion";
import MeetFounder from "./MeetFounder";

function AboutUs()
{
  return (
    <section className="relative w-full py-32  overflow-hidden text-white">


      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* --- HEADER --- */}
        <div className="max-w-3xl mb-24">
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
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
          >
            Precise Execution. <br />
            <span className="text-gray-500 ">Institutional Trust.</span>
          </motion.h2>
        </div>

        {/* --- WHO WE ARE (Institutional Framework) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          <div className="lg:col-span-4">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#d6b25e]">Institutional Overview</h3>
          </div>
          <div className="lg:col-span-8 p-12 bg-[#121212] border border-white/5 border-l-4 border-l-[#d6b25e] rounded-md">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium">
              Evolve Vue is a specialized medical BPO delivering <span className="text-white">high-fidelity documentation</span> and clinical support services.
              We bridge the gap between complex patient encounters and <span className="text-white font-bold">accurate clinical records</span> through
              rigorous compliance and technical excellence.
            </p>
          </div>
        </div>

        {/* --- VISION & MISSION (Sharp Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-32 rounded-md overflow-hidden">
          <div className="p-12 bg-[#0b0e14] group hover:bg-[#121212] transition-colors">
            <span className="text-[10px] font-black text-[#d6b25e] uppercase tracking-[0.3em] mb-6 block">Future Objective</span>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To define the global benchmark for medical documentation, ensuring
              unmatched <span className="text-white">efficiency, compliance, and innovation</span> in the healthcare BPO industry.
            </p>
          </div>
          <div className="p-12 bg-[#0b0e14] group hover:bg-[#121212] transition-colors">
            <span className="text-[10px] font-black text-[#d6b25e] uppercase tracking-[0.3em] mb-6 block">Operational Core</span>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              To deliver clinical support services with <span className="text-white">absolute precision</span>, maintaining
              stringent ethical standards and technological advancement to support provider excellence.
            </p>
          </div>
        </div>

        {/* --- CORE VALUES (The Pillars) --- */}
        <div className="mb-32">
          <div className="flex items-center gap-6 mb-12">
            <h4 className="text-xs font-black text-white uppercase tracking-widest flex-shrink-0">Operational Pillars</h4>
            <div className="w-full h-[px] bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Integrity", desc: "Honesty and total transparency in every record." },
              { title: "Excellence", desc: "Setting the standard for top-tier clinical quality." },
              { title: "Innovation", desc: "Leveraging proprietary tech for smarter workflows." },
              { title: "Client-Centric", desc: "Your clinical success is our singular priority." },
              { title: "Ethics", desc: "Full compliance with global healthcare regulations." }
            ].map((value, idx) => (
              <div key={idx} className="p-8 bg-[#121212] border border-white/5 rounded-md hover:border-[#d6b25e]/30 transition-all group">
                <div className="w-6 h-[2px] bg-[#d6b25e] mb-6 group-hover:w-full transition-all duration-500"></div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- WHY CHOOSE US (Technical Metrics) --- */}
        <div className="p-16 bg-gradient-to-br from-[#121212] to-[#0b0e14] border border-white/5 rounded-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <span className="text-[40px] font-black text-white/5 uppercase select-none">TRUSTED</span>
          </div>

          <h3 className="text-3xl font-bold text-white mb-12">Why Healthcare Leaders Choose Evolve Vue?</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <span className="text-3xl font-black text-[#d6b25e] block mb-2">10+ Years</span>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Industry Expertise</p>
              <p className="text-sm text-gray-400 mt-2">Proven clinical support experience.</p>
            </div>
            <div>
              <span className="text-3xl font-black text-[#d6b25e] block mb-2">100% Verified</span>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">HIPAA Compliance</p>
              <p className="text-sm text-gray-400 mt-2">Rigorous data security protocols.</p>
            </div>
            <div>
              <span className="text-3xl font-black text-[#d6b25e] block mb-2">AI-Driven</span>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Modern Technology</p>
              <p className="text-sm text-gray-400 mt-2">Smart tools for faster turnaround.</p>
            </div>
            <div>
              <span className="text-3xl font-black text-[#d6b25e] block mb-2">24/7 Global</span>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Operational Support</p>
              <p className="text-sm text-gray-400 mt-2">Worldwide coverage across all shifts.</p>
            </div>
          </div>
        </div>
      </div>

      <MeetFounder />

    </section>
  );
}

export default AboutUs;