import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Database, Users } from "lucide-react";

// Assuming assets are imported as in your previous code
import geyata from "../assets/leads/geyata.webp";
import swormin from "../assets/leads/2.webp";
import prakriti from "../assets/leads/4.webp";
import dilasha from "../assets/leads/dilasha.webp";
import nita from "../assets/leads/nita.webp";
import ProfileCard from "../components/ProfileCard";
import SystemTicker from "../components/SystemStick";

const teamData = {
  executive: { name: "Dr. Geyata Shrestha [PT]", role: "Chief Team Lead", image: geyata },
  clinical: [
    { name: "Dr. Prakriti Shah", role: "Clinical Lead", image: prakriti },
  ],
  clerical: [
    { name: "Dr. Dilasha Bhandari [PT]", role: "Clerical Lead", image: dilasha },
    { name: "Mr. Swornim Rajbhandari", role: "Clerical Lead", image: swormin },
    { name: "PT Nita Bohara", role: "Clerical Lead", image: nita },
  ],
};

export default function TeamHierarchy()
{
  return (
    <section
      className="relative px-6 pt-10 md:pt-24 bg-[#0b0e14] overflow-hidden border-t-2 border-[#d6b25e]"
      style={{ contentVisibility: "auto", containIntrinsicSize: "1000px" }}
    >

      <div className="relative z-10 max-w-7xl mx-auto ">

        {/* --- HEADER: System Identification --- */}
        <div className="flex flex-col items-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-white/5 bg-white/5"
          >
            <ShieldCheck size={12} className="text-[#d6b25e]" />
            <span className="text-[8px] md:text-[10px] font-black text-[#d6b25e] uppercase tracking-[0.4em]">Verified Personnel Directive</span>
          </motion.div>

          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter text-center ">
            Organizational <br />
            <span className="text-gray-600 italic font-serif">Leadership.</span>
          </h2>
        </div>

        {/* --- EXECUTIVE TIER: Central Authority --- */}
        <div className="flex flex-col items-center mb-48 relative">
          {/* Visual connection line */}
          <div className="absolute bottom-[-100px] left-1/2 w-[1px] h-[100px] bg-gradient-to-b from-[#d6b25e]/50 to-transparent  lg:block"></div>

          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-[1px] bg-[#d6b25e]/30"></div>
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Chief Executive Administration</h4>
            <div className="w-8 h-[1px] bg-[#d6b25e]/30"></div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#d6b25e]/5 blur-2xl rounded-full scale-150"></div>
            <ProfileCard person={teamData.executive} isLarge={true} />
          </div>
        </div>

        {/* --- DIVISIONAL GRID SYSTEM --- */}
        <div className="space-y-24">

          {/* CLINICAL DIVISION */}
          <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
              <div>
                <div className="flex items-center gap-3 text-[#9cee69] mb-2">
                  <Activity size={18} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Division 01</span>
                </div>
                <h4 className="text-3xl font-bold text-white">Clinical Operations</h4>
              </div>
              <p className="text-gray-500 text-xs md:text-right max-w-xs font-medium">
                Overseeing medical accuracy, HIPAA compliance, and diagnostic documentation integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamData.clinical.map((person, idx) => (
                <ProfileCard key={idx} person={person} />
              ))}
            </div>
          </section>

          {/* CLERICAL & LOGISTICS */}
          <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
              <div>
                <div className="flex items-center gap-3 text-yellow-500 mb-2">
                  <Database size={18} />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Division 02</span>
                </div>
                <h4 className="text-3xl font-bold text-white">Clerical Operations</h4>
              </div>
              <p className="text-gray-500 text-xs md:text-right max-w-xs font-medium">
                Managing technical infrastructure, data workflows, and 24/7 administrative synchronization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamData.clerical.map((person, idx) => (
                <ProfileCard key={idx} person={person} />
              ))}
            </div>
          </section>

        </div>

        {/* --- INSTITUTIONAL SEAL: Trust Footer --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 md:mt-48 relative"
        >
          <div className="absolute inset-0 bg-[#d6b25e]/5 skew-y-1 rounded-[2rem]"></div>
          <div className="relative p-10 md:p-16 border border-white/10 rounded-[2rem] flex flex-col md:flex-row items-center gap-10">
            <div className="w-20 h-20 rounded-full border-2 border-[#d6b25e]/20 flex items-center justify-center flex-shrink-0">
              <Users className="text-[#d6b25e]" size={32} />
            </div>
            <div className="space-y-4">
              <h5 className="text-white font-bold text-base md:text-xl uppercase tracking-tight">Personnel Standards & Quality Assurance</h5>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-4xl">
                Every lead at <span className="text-[#d6b25e] font-bold">Evolve Vue</span> is a vetted professional with deep roots in healthcare systems.
                Our leadership hierarchy is structured to ensure multiple checkpoints for data integrity,
                maintaining a <span className="text-[#9cee69] font-mono">99.9% accuracy rate</span> across all clinical documentation pipelines.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <SystemTicker />
    </section>
  );
}