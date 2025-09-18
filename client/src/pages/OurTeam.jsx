import React from "react";

import geyata from "../assets/leads/geyata.webp";
import birat from "../assets/leads/birat.webp";
import swormin from "../assets/leads/2.webp";
import prakriti from "../assets/leads/4.webp";
import dilasha from "../assets/leads/dilasha.webp";
import nita from "../assets/leads/nita.webp";

const teamLead = {
  name: "PT Geyata Shrestha",
  role: "Chief Team Lead",
  image: geyata,
};

const clinicalLeads = [
  { name: "Dr. Birat Khanal", role: "Clinical Lead", image: birat },
  { name: "Dr. Shashank Singh Shahi", role: "Clinical Lead", image: "/images/james.jpg" },
  { name: "Dr. Prakriti Shah", role: "Clinical Lead", image: prakriti },
];

const clericalLeads = [
  { name: "PT Dilasha Bhandari", role: "Clerical Lead", image: dilasha },
  { name: "Mr. Swornim Rajbhandari", role: "Clerical Lead", image: swormin },
  { name: "PT Nita Bohara", role: "Clerical Lead", image: nita },
];

const ProfileCard = ({ person, isChief }) => (
  <div className="flex justify-center">
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col items-center w-64 md:w-72 mx-auto backdrop-blur-sm h-full">

      {/* Image Section */}
      <div className="w-full aspect-[4/3] overflow-hidden">
        <img
          src={person.image}
          alt={person.name}
          loading="lazy"
          className={`w-full h-full object-contain transition-transform duration-500 hover:scale-105 ${isChief ? "border-b-4 border-yellow-500" : ""
            }`}
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between flex-1 p-6 text-center">
        <h3 className="header font-semibold text-xl text-gray-800 min-h-[2.5rem] flex items-center justify-center">
          {person.name}
        </h3>
        <p className="subheader text-gray-500 text-sm mt-2 min-h-[1.5rem]">
          {person.role}
        </p>
      </div>
    </div>
  </div>

);

export default function TeamHierarchy()
{
  return (
    <section className="relative px-6 py-20 overflow-hidden">
      {/* Background Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-slate-900 to-green-400/10"></div>

      {/* Left Yellow Glow */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-yellow-500/30 rounded-full blur-[180px]"></div>

      {/* Right Green Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-400/30 rounded-full blur-[180px]"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto my-8">
          <h2 className="header text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400 mb-4">
            Our Team
          </h2>
          <p className="subheader text-gray-300 leading-relaxed">
            Dedicated professionals working together to ensure excellence in
            both clinical and clerical operations.
          </p>
        </div>

        {/* Chief Lead */}
        <div className="flex justify-center mb-16">
          <ProfileCard person={teamLead} isChief={true} />
        </div>

        {/* Sections */}
        <div className="flex flex-col lg:flex-row justify-center gap-12">
          {/* Clinical Section */}
          <div className="flex-1 rounded-2xl p-8 border-b-4 border-amber-400 bg-black/50 backdrop-blur-md">
            <h2 className="header text-center font-semibold text-yellow-400 text-2xl mb-8">
              Clinical Section
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {clinicalLeads.map((lead, index) => (
                <ProfileCard key={index} person={lead} />
              ))}
            </div>
          </div>

          {/* Clerical Section */}
          <div className="flex-1 rounded-2xl p-8 border-b-4 border-[#9cee69] bg-black/50 backdrop-blur-md">
            <h2 className="header text-center font-semibold text-[#9cee69] text-2xl mb-8">
              Clerical Section
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {clericalLeads.map((lead, index) => (
                <ProfileCard key={index} person={lead} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
