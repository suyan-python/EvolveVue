import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


function WholeTeam()
{
  const navigate = useNavigate();

  const teamHierarchy = {
    leader: {
      name: "Pt. Geyata Shrestha",
      role: "Downloader",
      description: "Accurate and compliant medical reports tailored to global standards.",
      image: "/images/nikita.jpg",
      link: "/team/ravi",
    },
    groups: [
      {
        groupName: "Clinical Team",
        subLeads: [
          {
            name: "Birat",
            role: "Medical Report Writer Lead",
            description: "Accurate and compliant medical reports tailored to global standards.",
            image: "/images/nikita.jpg",
            link: "/team/nikita",
            team: [
              { name: "Ashish", role: "Medical Report Writer", image: "/images/nikita.jpg" },
              { name: "Anup", role: "Data Analyst", image: "/images/rajikya.jpg" },
            ],
          },
          {
            name: "Shasank",
            role: "Data Analytics & Healthcare Operations",
            description: "Efficient data handling and analytics for healthcare institutions.",
            image: "/images/rajikya.jpg",
            link: "/team/rajikya",
            team: [
              { name: "Prakash", role: "Operations Staff", image: "/images/bandana.jpg" },
            ],
          },
          {
            name: "Bandana Manandhar",
            role: "Medical Report Writer/Lister Lead",
            description: "End-to-end backend support ensuring seamless healthcare operations.",
            image: 'images',
            link: "/team/bandana",
            team: [],
          },
        ],
      },
      {
        groupName: "Clerical Team",
        subLeads: [
          {
            name: "Dilasha",
            role: "Medical Report Writer Lead",
            description: "Accurate and compliant medical reports tailored to global standards.",
            image: "/images/nikita.jpg",
            link: "/team/nikita",
            team: [
              { name: "Ashish", role: "Medical Report Writer", image: "/images/nikita.jpg" },
              { name: "Anup", role: "Data Analyst", image: "/images/rajikya.jpg" },
            ],
          },
          {
            name: "Shasank",
            role: "Data Analytics & Healthcare Operations",
            description: "Efficient data handling and analytics for healthcare institutions.",
            image: "/images/rajikya.jpg",
            link: "/team/rajikya",
            team: [
              { name: "Prakash", role: "Operations Staff", image: "/images/bandana.jpg" },
            ],
          },
          {
            name: "Bandana Manandhar",
            role: "Medical Report Writer/Lister Lead",
            description: "End-to-end backend support ensuring seamless healthcare operations.",
            image: 'images',
            link: "/team/bandana",
            team: [],
          },
        ],
      },
    ],
  };

  const Card = ({ member, delay, large }) => (
    <motion.div
      className={`relative group cursor-pointer overflow-hidden rounded-3xl shadow-lg transition transform hover:scale-105 hover:shadow-xl duration-300 ${large ? "w-80 mx-auto" : ""}`}
      onClick={() => member.link && navigate(member.link)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
      />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#E6B800] via-[#5f4c00a1] to-transparent text-white text-center px-4 flex items-center justify-center text-lg font-semibold">
        {member.name}
      </div>
      <div className="absolute inset-0 backdrop-blur-sm flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-xl sm:text-2xl font-semibold text-center">{member.name}</h3>
        <p className="text-sm sm:text-lg italic text-center">{member.role}</p>
        {member.description && <p className="mt-2 text-center px-6">{member.description}</p>}
        {member.link && (
          <button
            className="my-4 px-3 py-1 rounded-md bg-yellow-500 hover:bg-yellow-700 text-white transition-all duration-500 cursor-pointer"
            onClick={() => navigate(member.link)}
          >
            View Team
          </button>
        )}
      </div>
    </motion.div>
  );

  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Leader */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Leader
        </motion.h2>
        <Card member={teamHierarchy.leader} delay={0} large />

        {/* Groups */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamHierarchy.groups.map((group, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">{group.groupName}</h3>
              {/* Sub-Leads */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {group.subLeads.map((subLead, sIdx) => (
                  <Card key={sIdx} member={subLead} delay={sIdx * 0.2} />
                ))}
              </div>
              {/* Sub-Leads Teams */}
              {group.subLeads.map((subLead, sIdx) => (
                subLead.team.length > 0 && (
                  <div key={sIdx} className="mt-8">
                    <h4 className="text-lg font-bold text-yellow-500 mb-3">{subLead.name}'s Team</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {subLead.team.map((member, mIdx) => (
                        <Card key={mIdx} member={member} delay={mIdx * 0.1} />
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WholeTeam;
