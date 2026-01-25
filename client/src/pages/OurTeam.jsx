import React from "react";

// Assuming assets are imported as in your previous code
import geyata from "../assets/leads/geyata2.png";
import birat from "../assets/leads/birat.webp";
import shashank from "../assets/leads/shashank.webp";
import swormin from "../assets/leads/2.webp";
import prakriti from "../assets/leads/4.webp";
import dilasha from "../assets/leads/dilasha.webp";
import nita from "../assets/leads/nita.webp";

const teamData = {
  executive: { name: "Dr. Geyata Shrestha [PT]", role: "Chief Team Lead", image: geyata },
  clinical: [
    { name: "Dr. Birat Khanal", role: "Clinical Lead", image: birat },
    { name: "Dr. Shashank Singh Shahi", role: "Clinical Lead", image: shashank },
    { name: "Dr. Prakriti Shah", role: "Clinical Lead", image: prakriti },
  ],
  clerical: [
    { name: "Dr. Dilasha Bhandari [PT]", role: "Clerical Lead", image: dilasha },
    { name: "Mr. Swornim Rajbhandari", role: "Clerical Lead", image: swormin },
    { name: "PT Nita Bohara", role: "Clerical Lead", image: nita },
  ],
};

const ProfileCard = ({ person, isLarge = false }) => (
  <div className={`group relative bg-[#121212] border border-white/5 rounded-md overflow-hidden transition-all duration-500 hover:border-[#d6b25e]/40 ${isLarge ? 'max-w-md w-full' : 'w-full'}`}>
    {/* Image Container */}
    <div className={`relative overflow-hidden ${isLarge ? 'aspect-[4/5]' : 'aspect-square'}`}>
      <img
        src={person.image}
        alt={person.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      {/* Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent opacity-80"></div>
    </div>

    {/* Content */}
    <div className="p-6 border-t border-white/5 relative bg-[#121212]">
      <div className="w-8 h-[2px] bg-[#d6b25e] mb-3 group-hover:w-full transition-all duration-500"></div>
      <h3 className={`${isLarge ? 'text-2xl' : 'text-lg'} font-bold text-white tracking-tight`}>
        {person.name}
      </h3>
      <p className="text-[#d6b25e] text-[10px] font-black uppercase tracking-[0.2em] mt-1">
        {person.role}
      </p>
      <p className="text-gray-600 text-[9px] uppercase tracking-widest mt-4 group-hover:text-gray-400 transition-colors">
        Credential Verified • Evolve Vue Lead
      </p>
    </div>
  </div>
);

export default function TeamHierarchy()
{
  return (
    <section className="relative px-6 py-32 bg-[#0b0e14] overflow-hidden">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0h1v40H0zM0 0h40v1H0z' fill='%23ffffff'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="text-center mb-32">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#d6b25e]"></div>
            <span className="text-[10px] font-bold text-[#d6b25e] uppercase tracking-[0.5em]">Human Capital</span>
            <div className="w-12 h-[1px] bg-[#d6b25e]"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Organizational <span className="text-gray-500 ">Leadership.</span>
          </h2>
        </div>

        {/* --- ROW 1: EXECUTIVE --- */}
        <div className="flex flex-col items-center mb-40">
          <div className="text-center mb-10">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Executive Administration</h4>
          </div>
          <ProfileCard person={teamData.executive} isLarge={true} />
        </div>

        {/* --- ROW 2: CLINICAL --- */}
        <div className="mb-40">
          <div className="flex items-center gap-6 mb-12">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest flex-shrink-0">Clinical Division</h4>
            <div className="w-full h-[1px] bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.clinical.map((person, idx) => (
              <ProfileCard key={idx} person={person} />
            ))}
          </div>
        </div>

        {/* --- ROW 3: CLERICAL --- */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <h4 className="text-sm font-bold text-white uppercase tracking-widest flex-shrink-0">Clerical Operations</h4>
            <div className="w-full h-[1px] bg-white/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.clerical.map((person, idx) => (
              <ProfileCard key={idx} person={person} />
            ))}
          </div>
        </div>

        {/* --- INSTITUTIONAL FOOTNOTE --- */}
        <div className="mt-40 p-12 bg-[#121212] border border-white/5 border-l-4 border-l-[#d6b25e]">
          <p className="text-gray-500 text-xs leading-relaxed max-w-4xl">
            <span className="text-white font-bold uppercase tracking-widest mr-2">Personnel Standard:</span>
            Evolve Vue leads are vetted healthcare professionals and operational experts. Our team structure is designed to provide
            multi-layered quality assurance across clinical documentation and data processing workflows.
          </p>
        </div>
      </div>
    </section>
  );
}