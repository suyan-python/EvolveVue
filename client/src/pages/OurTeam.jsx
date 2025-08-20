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
  { name: "Dr. Birat", role: "Clinical Lead 1", image: birat },
  { name: "Dr. Shashank", role: "Clinical Lead 2", image: "/images/james.jpg" },
  { name: "Dr. Prakriti Shah", role: "Clinical Lead 3", image: prakriti },
];

const clericalLeads = [
  { name: "Ms. Dilasha", role: "Clerical Lead 1", image: dilasha },
  { name: "Mr. Swormin Raj Bhandari", role: "Clerical Lead 3", image: swormin },
  { name: "Ms. Nita", role: "Clerical Lead 2", image: nita },
];

const ProfileCard = ({ person, isChief }) => (
  <div className="flex flex-col items-center text-center bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
    <img
      src={person.image}
      alt={person.name}
      className={`object-cover rounded-full border-4 ${isChief ? "w-32 h-32 border-yellow-500" : "w-24 h-24 border-gray-300"
        }`}
    />
    <h3 className="mt-4 font-semibold text-lg text-gray-800">{person.name}</h3>
    <p className="text-gray-500 text-sm">{person.role}</p>
  </div>
);

export default function TeamHierarchy()
{
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
      {/* Chief Lead */}
      <div className="flex justify-center mb-16">
        <ProfileCard person={teamLead} isChief={true} />
      </div>

      {/* Leads */}
      <div className="flex flex-col lg:flex-row justify-center gap-12 mb-16">
        {/* Clinical Section */}
        <div className="flex-1 rounded-2xl p-8 shadow-inner bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
          <h2 className="text-center font-bold text-blue-800 text-2xl mb-8 tracking-wide">
            Clinical Section
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {clinicalLeads.map((lead, index) => (
              <ProfileCard key={index} person={lead} />
            ))}
          </div>
        </div>

        {/* Clerical Section */}
        <div className="flex-1 rounded-2xl p-8 shadow-inner bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
          <h2 className="text-center font-bold text-green-800 text-2xl mb-8 tracking-wide">
            Clerical Section
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {clericalLeads.map((lead, index) => (
              <ProfileCard key={index} person={lead} />
            ))}
          </div>
        </div>
      </div>

      {/* Whole Team */}
      <div className="mt-16 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
        <p className="text-gray-600 leading-relaxed">
          Our dedicated members work together to ensure excellence in both
          clinical and clerical operations, delivering quality and precision at
          every step.
        </p>
      </div>
    </section>
  );
}
