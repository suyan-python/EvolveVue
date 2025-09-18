import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import geyata from "../assets/leads/geyata.webp";
import birat from "../assets/leads/birat.webp";
import swormin from "../assets/leads/2.webp";
import prakriti from "../assets/leads/4.webp";
import dilasha from "../assets/leads/dilasha.webp";
import nita from "../assets/leads/nita.webp";

function WholeTeam()
{
  const navigate = useNavigate();

  // 🔹 Team Hierarchy Data
  const teamHierarchy = {
    leader: {
      name: "PT Geyata Shrestha",
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
              { name: "Dr. Aabha Shakya", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Nurse Ashmita Iteni", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Ashwin KC", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Dhirendra Yadav", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Erika Rani Thapa", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Jemini Shrestha", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Nitesh Kumar Jha", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Nitisha Ghimire", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Samundra Gurung", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Sanjeev Yadav", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Saurav Paudel", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Dr. Sareesha Shrestha", role: "Medical Data Analyst", image: "/images/member.jpg" },
              { name: "Nurse Priya Malla", role: "Medical Data Analyst", image: "/images/member.jpg" },
            ],
          },
          {
            name: "Dr. Shashank Singh Shahi",
            role: "POD Lead (Medical Data Analyst, QA)",
            description: "Managing clinical workflows and medical data analytics.",
            image: "/images/shashank.jpg",
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
            name: "PT Dilasha Bhandari",
            role: "POD Lead (Medical Report Reviewer, QA)",
            description: "Ensures quality and compliance of clerical operations.",
            image: dilasha,
            team: [
              { name: "Anusha Bastola", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Archana Sunam Pariyar", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Heena Shrestha", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Kiran Tiwari", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Luna Maharjan", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Mamita Gurung", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Sajjal KC", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Sanjana Maharjan", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Shreya Karki", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Sulav Gautam", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Suyog Rai", role: "Medical Report Reviewer", image: "/images/member.jpg" },
              { name: "Reeja Bajracharya", role: "Medical Report Reviewer", image: "/images/member.jpg" },
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
            name: "PT Nita Bohara",
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
  const Card = ({ member, delay }) => (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white/90 w-full max-w-xs mx-auto flex flex-col h-full"
      onClick={() => member.link && navigate(member.link)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="w-full h-52 overflow-hidden flex items-center justify-center ">
        <img
          src={member.image}
          alt={member.name}
          className="max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-4 text-center flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.role}</p>
        {member.description && (
          <p className="text-xs text-gray-400 mt-2 flex-1">{member.description}</p>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="w-full py-24 bg-gradient-to-b from-yellow-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Leader */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Leader
        </motion.h2>

        <div className="flex justify-center mb-20">
          <Card member={teamHierarchy.leader} delay={0} />
        </div>

        {/* Groups */}
        {teamHierarchy.groups.map((group, idx) => (
          <div key={idx} className="mb-20">
            <h3 className="text-2xl font-bold text-green-700 mb-8 text-center">
              {group.groupName}
            </h3>

            {/* SubLeads */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
