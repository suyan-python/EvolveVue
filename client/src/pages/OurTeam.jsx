// src/pages/TeamHierarchy.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import geyata from "../assets/leads/geyata.webp";
import birat from "../assets/leads/birat.webp";
import shashank from "../assets/leads/shashank.webp"
import swormin from "../assets/leads/2.webp";
import prakriti from "../assets/leads/4.webp";
import dilasha from "../assets/leads/dilasha.webp";
import nita from "../assets/leads/nita.webp";

const teamLead = {
  name: "Dr. Geyata Shrestha [PT]",
  role: "Chief Team Lead",
  image: geyata,
};

const clinicalLeads = [
  { name: "Dr. Birat Khanal", role: "Clinical Lead", image: birat },
  { name: "Dr. Shashank Singh Shahi", role: "Clinical Lead", image: shashank },
  { name: "Dr. Prakriti Shah", role: "Clinical Lead", image: prakriti },
];

const clericalLeads = [
  { name: "Dr. Dilasha Bhandari [PT]", role: "Clerical Lead", image: dilasha },
  { name: "Mr. Swornim Rajbhandari", role: "Clerical Lead", image: swormin },
  { name: "PT Nita Bohara", role: "Clerical Lead", image: nita },
];


// ✅ Premium Profile Card
const ProfileCard = ({ person }) => (
  <div
    className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black 
                p-4 rounded-3xl shadow-2xl 
                w-80 md:w-96 h-[500px] flex flex-col items-center 
                border border-gray-800 hover:border-indigo-400/50 transition overflow-hidden"
  >
    {/* Profile Image */}
    <div className="relative w-full h-full">
      <img
        src={person.image}
        alt={person.name}
        className="w-full h-full object-cover rounded-2xl"
      />

      {/* Text Overlay */}
      <div
        className="absolute bottom-0 left-0 w-full 
                   bg-black/40 backdrop-blur-sm 
                   rounded-b-2xl p-4 flex flex-col items-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
          {person.name}
        </h3>
        <p className="text-lg text-gray-300 mt-1 text-center italic tracking-wide">
          {person.role}
        </p>
      </div>
    </div>
  </div>
);



// ✅ 3D Stacked Slider
const StackedSlider = ({ title, people, color }) =>
{
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % people.length);
  const prevCard = () => setCurrentIndex((prev) => (prev === 0 ? people.length - 1 : prev - 1));

  return (
    <div className="relative flex flex-col items-center bg-black/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700">
      <h2 className={`text-2xl font-bold mb-6 ${color}`}>{title}</h2>

      {/* Card Stack */}
      <div
        className="relative w-[320px] h-[500px] md:w-[380px] md:h-[520px]"
        style={{ perspective: "1400px" }}
      >
        {people.map((person, index) =>
        {
          let offset = (index - currentIndex + people.length) % people.length;
          let isActive = offset === 0;

          return (
            <motion.div
              key={person.name}
              className="absolute w-full h-full flex items-center justify-center"
              style={{
                transformStyle: "preserve-3d",
                zIndex: people.length - offset,
              }}
              initial={false}
              animate={{
                scale: isActive ? 1 : 0.9,
                rotateY: offset === 1 ? -20 : offset === people.length - 1 ? 20 : 0,
                x:
                  offset === 0
                    ? 0
                    : offset === 1
                      ? 60
                      : offset === people.length - 1
                        ? -60
                        : 0,
                opacity: offset > 2 ? 0 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <ProfileCard person={person} />
            </motion.div>
          );
        })}
      </div>


      {/* Controls */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={prevCard}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronLeft className="text-white w-6 h-6" />
        </button>
        <button
          onClick={nextCard}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronRight className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default function TeamHierarchy()
{
  return (
    <section className="relative px-6 py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-black to-gray-900">
      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[200px]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[200px]"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto my-8">
          <h2 className="header text-5xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-4">
            Our Team
          </h2>
          <p className="subheader text-gray-200 leading-relaxed">
            Dedicated professionals working together to ensure excellence in both clinical and clerical operations.
          </p>
        </div>

        {/* Chief Lead */}
        <div className="flex justify-center mb-20">
          <ProfileCard person={teamLead} />
        </div>

        {/* Stacked Sliders */}
        <div className="flex flex-col lg:flex-row gap-12 justify-center">
          <StackedSlider title="Clinical Section" people={clinicalLeads} color="text-indigo-400" />
          <StackedSlider title="Clerical Section" people={clericalLeads} color="text-green-400" />
        </div>
      </div>
    </section>
  );
}
