// src/pages/TeamHierarchy.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Assets (already optimized to webp — keep sizes under ~200kb if possible)
import geyata from "../assets/leads/geyata.webp";
import birat from "../assets/leads/birat.webp";
import shashank from "../assets/leads/shashank.webp";
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
const ProfileCard = React.memo(({ person }) => (
  <div
    className="relative rounded-3xl shadow-xl overflow-hidden 
               w-72 md:w-80 h-[420px] flex flex-col items-center 
               border border-gray-800 hover:border-indigo-400/50 transition"
  >
    {/* Image */}
    <img
      src={person.image}
      alt={person.name}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute bottom-0 inset-x-0 bg-black/40 backdrop-blur-md p-4">
      <h3 className="text-xl font-bold text-white text-center">{person.name}</h3>
      <p className="text-sm text-gray-300 text-center italic">{person.role}</p>
    </div>
  </div>
));


// ✅ Smooth Stacked Slider
const StackedSlider = ({ title, people, color }) =>
{
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % people.length);
  const prevCard = () =>
    setCurrentIndex((prev) => (prev === 0 ? people.length - 1 : prev - 1));

  // Memoize cards so React doesn’t recalc on every state change
  const cards = useMemo(
    () =>
      people.map((person, index) =>
      {
        return (
          <motion.div
            key={person.name}
            className="absolute w-full h-full flex items-center justify-center"
            animate={{
              x:
                index === currentIndex
                  ? 0
                  : index === (currentIndex + 1) % people.length
                    ? 80
                    : index ===
                      (currentIndex - 1 + people.length) % people.length
                      ? -80
                      : 0,
              scale: index === currentIndex ? 1 : 0.9,
              opacity: index === currentIndex ? 1 : 0.6,
              zIndex: index === currentIndex ? 2 : 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProfileCard person={person} />
          </motion.div>
        );
      }),
    [currentIndex, people]
  );

  return (
    <div className="relative flex flex-col items-center bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-gray-700">
      <h2 className={`text-2xl font-bold mb-6 ${color}`}>{title}</h2>

      {/* Card Stack */}
      <div className="relative w-[280px] h-[420px] md:w-[320px] md:h-[440px]">
        {cards}
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


// ✅ Main Team Hierarchy Section
export default function TeamHierarchy()
{
  return (
    <section className="relative px-6 py-20 bg-gradient-to-br from-slate-900 via-black to-gray-900 overflow-hidden">
      {/* Glow Effects (lighter blur for performance) */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-500/15 rounded-full blur-[120px]"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto my-8">
          <h2 className="text-5xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-4">
            Our Team
          </h2>
          <p className="text-gray-300 leading-relaxed">
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
