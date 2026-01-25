import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import geyata from "../assets/person/all/Geyata Shrestha.png"

import birat from "../assets/leads/birat.webp";
import shashank from "../assets/leads/shashank.webp";

import swormin from "../assets/leads/2.webp";
import prakriti from "../assets/leads/4.webp";
import dilasha from "../assets/leads/dilasha.webp";
import nita from "../assets/leads/nita.webp";


import aabha from "../assets/person/all/Aabha Shakya.png"
import aditi from "../assets/person/all/Aditi Ghimire.png"
import anusha from "../assets/person/all/Anusha Bastola.png"
import archana from "../assets/person/all/Archana Sunam Pariyar.png"
import ashmita from "../assets/person/all/Ashmita Iteni.png"
import ashwin from "../assets/person/all/Ashwin KC.png"
import dhirendra from "../assets/person/all/Dhirendra Yadav.png"
import heena from "../assets/person/all/Heena Shrestha.png"
import jemini from "../assets/person/all/Jemini Shrestha .png"
import kiran from "../assets/person/all/Kiran Tiwari.png"
import luna from "../assets/person/all/Luna Maharjan.png"
import mamita from "../assets/person/all/Mamita Gurung.png"
import nitesh from "../assets/person/all/Nitesh Kumar Jha.png"
import nitisha from "../assets/person/all/Nitisha Ghimire.png"
import priya from "../assets/person/all/Priya malla.png"
import reeja from "../assets/person/all/Reeja Bajracharya.png"
import sajjal from "../assets/person/all/Sajjal Fina.png"
import samundra from "../assets/person/all/Samundra Gurung.png"
import sanjana from "../assets/person/all/Sanjana Maharjan.png"
import sanjeev from "../assets/person/all/Sanjeev Yadav.png"
import sareesha from "../assets/person/all/Sareesha Shrestha.png"
import saurav from "../assets/person/all/Saurav Paudel.png"
import sheharan from "../assets/person/all/Sheharan Shrestha.png"
import shreya from "../assets/person/all/Shreya Karki.png"
import sulav from "../assets/person/all/Sulav Gautam_.png"
import suyog from "../assets/person/all/Suyog Rai.png"


function WholeTeam()
{
  const navigate = useNavigate();

  // 🔹 Team Hierarchy Data
  const teamHierarchy = {
    leader: {
      name: "Dr. Geyata Shrestha [PT]",
      role: "Chief Team Lead – Physiotherapist",
      description:
        "Leading the entire team ensuring quality and compliance across all operations.",
      image: geyata,
    },
    groups: [
      {
        groupName: "Clinical Team",
        subLeads: [
          {
            name: "Dr. Birat Khanal",
            role: "POD Lead (Medical Data Analyst, QA)",
            description:
              "Ensures accuracy and compliance of medical data and reports.",
            image: birat,
            team: [
              { name: "Dr. Aabha Shakya", role: "Medical Data Analyst", image: aabha },
              { name: "Nurse Ashmita Iteni", role: "Medical Data Analyst", image: ashmita },
              { name: "Dr. Ashwin KC", role: "Medical Data Analyst", image: ashwin },
              { name: "Dr. Dhirendra Yadav", role: "Medical Data Analyst", image: dhirendra },
              { name: "Dr. Erika Rani Thapa", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Jemini Shrestha", role: "Medical Data Analyst", image: jemini },
              { name: "Dr. Nitesh Kumar Jha", role: "Medical Data Analyst", image: nitesh },
              { name: "Dr. Nitisha Ghimire", role: "Medical Data Analyst", image: nitisha },
              { name: "Dr. Samundra Gurung", role: "Medical Data Analyst", image: samundra },
              { name: "Dr. Sanjeev Yadav", role: "Medical Data Analyst", image: sanjeev },
              { name: "Dr. Saurav Paudel", role: "Medical Data Analyst", image: saurav },
              { name: "Dr. Sareesha Shrestha", role: "Medical Data Analyst", image: sareesha },
              { name: "Nurse Priya Malla", role: "Medical Data Analyst", image: priya },
            ],
          },
          {
            name: "Dr. Shashank Singh Shahi",
            role: "POD Lead (Medical Data Analyst, QA)",
            description: "Managing clinical workflows and medical data analytics.",
            image: shashank,
            team: [],
          },
          {
            name: "Dr. Prakriti Shah",
            role: "POD Lead (Medical Data Analyst, QA)",
            description: "Focused on clinical excellence and medical data accuracy.",
            image: prakriti,
            team: [],
          },
        ],
      },
      {
        groupName: "Clerical Team",
        subLeads: [
          {
            name: "Dr. Dilasha Bhandari [PT]",
            role: "POD Lead (Medical Report Reviewer, QA)",
            description: "Ensures quality and compliance of clerical operations.",
            image: dilasha,
            team: [
              { name: "Anusha Bastola", role: "Medical Report Reviewer", image: anusha },
              { name: "Archana Sunam Pariyar", role: "Medical Report Reviewer", image: archana },
              { name: "Heena Shrestha", role: "Medical Report Reviewer", image: heena },
              { name: "Kiran Tiwari", role: "Medical Report Reviewer", image: kiran },
              { name: "Luna Maharjan", role: "Medical Report Reviewer", image: luna },
              { name: "Mamita Gurung", role: "Medical Report Reviewer", image: mamita },
              { name: "Sajjal KC", role: "Medical Report Reviewer", image: sajjal },
              { name: "Sanjana Maharjan", role: "Medical Report Reviewer", image: sanjana },
              { name: "Shreya Karki", role: "Medical Report Reviewer", image: shreya },
              { name: "Sulav Gautam", role: "Medical Report Reviewer", image: sulav },
              { name: "Suyog Rai", role: "Medical Report Reviewer", image: suyog },
              { name: "Reeja Bajracharya", role: "Medical Report Reviewer", image: reeja },
              { name: "Jigyasa Poudel", role: "Medical Report Reviewer", image: "/images/member.jpg" },
            ],
          },
          {
            name: "Mr. Swornim Rajbhandari",
            role: "POD Lead (Medical Report Reviewer, QA)",
            description: "Specialist in healthcare management and clerical QA.",
            image: swormin,
            team: [],
          },
          {
            name: "Dr. Nita Bohara [PT]",
            role: "POD Lead (Medical Report Reviewer, QA)",
            description:
              "Bringing physiotherapy expertise into clerical QA operations.",
            image: nita,
            team: [],
          },
        ],
      },
    ],
  };

  const CompactCard = ({ member, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group bg-[#121212] border border-white/5 p-4 rounded-sm hover:border-[#d6b25e]/40 transition-all duration-500"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 overflow-hidden rounded-full bg-[#0b0e14] border border-white/10">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
        </div>
        <div>
          <h4 className="text-white text-sm font-bold tracking-tight">{member.name}</h4>
          <p className="text-[#d6b25e] text-[9px] font-black uppercase tracking-widest">{member.role}</p>
        </div>
      </div>
    </motion.div>
  );


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
            <div className="md:w-1/3 aspect-[4/5] md:aspect-auto overflow-hidden">
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
        <div className="space-y-32">
          {teamHierarchy.groups.map((group, idx) => (
            <div key={idx} className="relative">
              {/* Department Label Overlay */}
              <div className="absolute -top-10 left-0">
                <h3 className="text-xs font-black text-gray-700 uppercase tracking-[0.6em]">Dept // {group.groupName}</h3>
              </div>

              {/* Sub-Leads Grid (Larger Cards) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {group.subLeads.map((subLead, sIdx) => (
                  <div key={sIdx} className="space-y-8">
                    {/* The Lead Card */}
                    <div className="bg-[#121212] border-l-2 border-l-[#d6b25e] p-8 rounded-sm hover:bg-[#161616] transition-all">
                      <CompactCard key={sIdx} member={subLead} delay={sIdx * 0.05} />
                      <p className="text-gray-500 text-xs leading-relaxed">{subLead.description}</p>
                    </div>

                    {/* Compact Team Member List (Fixes the "Infinite Grid" Clutter) */}
                    <div className="space-y-3">
                      <p className="text-[8px] font-black text-gray-700 uppercase tracking-[0.4em] ml-2">Team Personnel</p>
                      {subLead.team.map((member, mIdx) => (
                        <CompactCard key={mIdx} member={member} delay={mIdx * 0.05} />
                      ))}
                    </div>
                  </div>
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
