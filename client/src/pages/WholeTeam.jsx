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

  // 🔹 Card Component
  const Card = ({ member, delay }) =>
  {
    const [loaded, setLoaded] = useState(false);

    return (
      <motion.div
        className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl 
                 transition-all duration-500 w-full max-w-xs mx-auto h-80"
        onClick={() => member.link && navigate(member.link)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        {/* Full Image */}
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-contain border-t-8 border-yellow-500 bg-white transition-transform duration-700 group-hover:scale-110 
          ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        {!loaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}

        {/* Text Overlay */}
        <div
          className="absolute bottom-0 inset-x-0 p-4 
                   bg-black/40 backdrop-blur-md
                   text-center text-white transition-all duration-500"
        >
          <h3 className="text-lg font-semibold group-hover:text-yellow-400">
            {member.name}
          </h3>
          <p className="text-sm text-gray-200">{member.role}</p>
          {member.description && (
            <p className="text-xs text-gray-300 mt-2 leading-snug">
              {member.description}
            </p>
          )}
        </div>
      </motion.div>
    );
  };


  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-900 via-[#0f172a] to-black relative">
      {/* Subtle accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.2),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.15),transparent_70%)]"></div>

      <div className="relative header max-w-7xl mx-auto px-6 md:px-12">
        {/* Leader */}
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Team Leader
        </motion.h2>

        <div className="flex justify-center mb-20">
          <Card member={teamHierarchy.leader} delay={0} />
        </div>

        {/* Groups */}
        {teamHierarchy.groups.map((group, idx) => (
          <div key={idx} className="mb-20">
            <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
              {group.groupName}
            </h3>

            {/* SubLeads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {group.subLeads.map((subLead, sIdx) => (
                <Card key={sIdx} member={subLead} delay={sIdx * 0.15} />
              ))}
            </div>

            {/* Their Teams */}
            {group.subLeads.map(
              (subLead, sIdx) =>
                subLead.team.length > 0 && (
                  <div key={sIdx} className="mt-12">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                      {subLead.team.map((member, mIdx) => (
                        <Card key={mIdx} member={member} delay={mIdx * 0.05} />
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </section>
  );


}

export default WholeTeam;
