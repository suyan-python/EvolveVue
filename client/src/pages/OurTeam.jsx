import React from "react";

import geyata from "../assets/leads/geyata.webp";
import birat from "../assets/leads/birat.webp";
import swormin from "../assets/leads/2.webp";
import prakriti from "../assets/leads/4.webp";
import dilasha from "../assets/leads/dilasha.webp";
import nita from "../assets/leads/nita.webp";

const teamLead = {
  name: "Pt. Geyata Shrestha",
  role: "Chief Team Lead",
  image: geyata,
};

const clinicalLeads = [
  { name: "Dr. Birat", role: "Clinical Lead", image: birat },
  { name: "Dr. Shashank", role: "Clinical Lead", image: "/images/james.jpg" },
  { name: "Dr. Prakriti Shah", role: "Clinical Lead", image: prakriti },
];

const clericalLeads = [
  { name: "Ms. Dilasha", role: "Clerical Lead", image: dilasha },
  { name: "Mr. Swormin Raj Bhandari", role: "Clerical Lead", image: swormin },
  { name: "Ms. Nita", role: "Clerical Lead", image: nita },
];

const ProfileCard = ({ person, isChief }) => (
  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col items-center">
    {/* Image Section */}
    <div className="w-full h-48 md:h-56 overflow-hidden">
      <img
        src={person.image}
        alt={person.name}
        className={`w-full h-full object-contain transition-transform duration-500 hover:scale-105 ${isChief ? "border-b-4 border-yellow-500" : ""
          }`}
      />
    </div>

    {/* Text Section */}
    <div className="subheader p-6 text-center">
      <h3 className="header font-semibold text-xl text-gray-800">{person.name}</h3>
      <p className="text-gray-500 text-sm mt-2">{person.role}</p>
    </div>
  </div>
);


export default function TeamHierarchy()
{
  return (
    <section className="px-6 py-8 bg-gradient-to-b from-green-900 via-black to-slate-900 ">

      {/* Whole Team */}
      <div className="subheader text-center max-w-2xl mx-auto py-12">
        <h2 className="header text-5xl font-semibold text-slate-200 mb-4">Our Team</h2>
        <p className="text-gray-400 leading-relaxed">
          Our dedicated members work together to ensure excellence in both
          clinical and clerical operations, delivering quality and precision at
          every step.
        </p>
      </div>
      {/* Chief Lead */}
      <div className="flex justify-center mb-16">
        <ProfileCard person={teamLead} isChief={true} />
      </div>

      {/* Leads */}
      <div className="header flex flex-col lg:flex-row justify-center gap-12 mb-16">
        {/* Clinical Section */}
        <div className="flex-1 rounded-2xl p-8 shadow-inner  border border-yellow-200">
          <h2 className="text-center font-semibold  text-yellow-500 text-2xl mb-8 tracking-wide">
            Clinical Section
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicalLeads.map((lead, index) => (
              <ProfileCard key={index} person={lead} />
            ))}
          </div>

        </div>

        {/* Clerical Section */}
        <div className="flex-1 rounded-2xl p-8 shadow-inner  border border-green-200">
          <h2 className="text-center font-semibold  text-[#9cee69] text-2xl mb-8 tracking-wide">
            Clerical Section
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {clericalLeads.map((lead, index) => (
              <ProfileCard key={index} person={lead} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
