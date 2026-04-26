import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import geyata from "../assets/person/all/Geyata Shrestha.webp"

import birat from "../assets/leads/birat.webp";
import shashank from "../assets/leads/shashank.webp";

import swormin from "../assets/leads/2.webp";
import prakriti from "../assets/leads/4.webp";
import dilasha from "../assets/leads/dilasha.webp";
import nita from "../assets/leads/nita.webp";
import CompactCard from "../components/CompactCard";


function WholeTeam()
{

  // 🔹 Team Hierarchy Data
  const teamHierarchy = {
    leader: {
      name: "Dr. Geyata Shrestha [PT]",
      role: "Chief Team Lead – Physiotherapist",
      description:
        "Leading the entire team ensuring quality and compliance across all operations.",
      image: geyata,
    },

    divisions: [
      {
        divisionName: "Clinical Team",
        members: [
          { name: "Dr. Prakriti Shah", role: "POD Lead (Medical Data Analyst, QA)", image: prakriti },

          { name: "Dr. Aabha Shakya", role: "Medical Data Analyst" },
          { name: "Nurse Ashmita Iteni", role: "Medical Data Analyst" },
          { name: "Dr. Ashwin KC", role: "Medical Data Analyst" },
          { name: "Dr. Dhirendra Yadav", role: "Medical Data Analyst" },
          { name: "Dr. Erika Rani Thapa", role: "Medical Data Analyst" },
          { name: "Dr. Jemini Shrestha", role: "Medical Data Analyst" },
          { name: "Dr. Nitesh Kumar Jha", role: "Medical Data Analyst" },
          { name: "Dr. Nitisha Ghimire", role: "Medical Data Analyst" },
          { name: "Dr. Samundra Gurung", role: "Medical Data Analyst" },
          { name: "Dr. Sanjeev Yadav", role: "Medical Data Analyst" },
          { name: "Dr. Saurav Paudel", role: "Medical Data Analyst" },
          { name: "Dr. Sareesha Shrestha", role: "Medical Data Analyst" },
          { name: "Nurse Priya Malla", role: "Medical Data Analyst" },
        ],
      },

      {
        divisionName: "Clerical Team",
        members: [
          { name: "Dr. Dilasha Bhandari [PT]", role: "POD Lead (Medical Report Reviewer, QA)", image: dilasha },
          { name: "Mr. Swornim Rajbhandari", role: "POD Lead (Medical Report Reviewer, QA)", image: swormin },
          { name: "Dr. Nita Bohara [PT]", role: "POD Lead (Medical Report Reviewer, QA)", image: nita },

          { name: "Anusha Bastola", role: "Medical Report Reviewer" },
          { name: "Archana Sunam Pariyar", role: "Medical Report Reviewer" },
          { name: "Heena Shrestha", role: "Medical Report Reviewer" },
          { name: "Kiran Tiwari", role: "Medical Report Reviewer" },
          { name: "Luna Maharjan", role: "Medical Report Reviewer" },
          { name: "Mamita Gurung", role: "Medical Report Reviewer" },
          { name: "Sajjal KC", role: "Medical Report Reviewer" },
          { name: "Sanjana Maharjan", role: "Medical Report Reviewer" },
          { name: "Shreya Karki", role: "Medical Report Reviewer" },
          { name: "Sulav Gautam", role: "Medical Report Reviewer" },
          { name: "Suyog Rai", role: "Medical Report Reviewer" },
          { name: "Reeja Bajracharya", role: "Medical Report Reviewer" },
          { name: "Jigyasa Poudel", role: "Medical Report Reviewer" },
        ],
      },
    ],
  };


  return (
    <section className="relative w-full py-32 bg-[#0b0e14] overflow-hidden">
      {/* Background Utility Pattern */}
      <div className="bg-grid-pattern opacity-[0.03]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* --- 01. SECTION HEADER --- */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#d6b25e]"></div>
            <span className="text-[10px] font-black text-[#d6b25e] uppercase tracking-[0.4em]">Organizational Chart</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Leadership <span className="text-gray-500 italic font-serif">&</span> Structure.
          </h2>
        </div>

        {/* --- 02. EXECUTIVE SPOTLIGHT (Fixes the "Huge Card" Issue) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative bg-[#121212] border border-white/5 rounded-md overflow-hidden mb-32"
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Image (Fixed Aspect Ratio) */}
            <div className="md:w-1/4 aspect-[4/5] md:aspect-auto overflow-hidden">
              <img
                src={teamHierarchy.leader.image}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Content */}
            <div className="md:w-2/3 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-[10px] font-black text-[#d6b25e] uppercase tracking-[0.5em] mb-4">Executive Leadership</span>
              <h3 className="text-4xl font-bold text-white mb-2">{teamHierarchy.leader.name}</h3>
              <p className="text-gray-500 font-medium mb-8 uppercase text-xs tracking-widest">{teamHierarchy.leader.role}</p>

              <div className="w-12 h-[1px] bg-[#d6b25e] mb-8"></div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                {teamHierarchy.leader.description || "Leading the strategic vision of Evolve Vue with a focus on clinical integrity and operational scalability."}
              </p>

              <div className="mt-12 flex items-center gap-4 opacity-50">
                <div className="w-2 h-2 rounded-full bg-[#d6b25e]"></div>
                <span className="text-[9px] font-black text-white uppercase tracking-[0.3em]">Institutional Head Authorized</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- 03. DEPARTMENTAL GROUPS --- */}
        <div className="space-y-24">
          {teamHierarchy.divisions.map((division, idx) => (
            <div key={idx} className="space-y-10">

              {/* Division Header */}
              <div>
                <h3 className="text-xs font-black text-gray-600 uppercase tracking-[0.6em]">
                  Dept // {division.divisionName}
                </h3>
                <div className="mt-2 w-16 h-[1px] bg-[#d6b25e]"></div>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {division.members.map((member, mIdx) => (
                  <CompactCard
                    key={mIdx}
                    member={member}
                    delay={mIdx * 0.02}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WholeTeam;
