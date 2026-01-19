// src/pages/TeamHierarchy.jsx
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Optimized webp assets (make sure they’re under ~200kb each)
import geyata from "../assets/leads/geyata2.png";
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


// ✅ Optimized Profile Card
const ProfileCard = React.memo(({ person }) => (
  <div
    className="relative rounded-3xl shadow-md overflow-hidden
               w-72 md:w-80 h-[400px] flex flex-col items-center
               border border-gray-700 hover:border-indigo-400/40 
               transition duration-300"
  >
    <img
      src={person.image}
      alt={person.name}
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover bg-white"
    />

    {/* Overlay */}
    <div className="absolute bottom-0 inset-x-0 bg-black/50 p-3 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white text-center truncate">
        {person.name}
      </h3>
      <p className="text-sm text-gray-300 text-center italic">
        {person.role}
      </p>
    </div>
  </div>
));


// ✅ Smooth Slider (only animates 3 cards at a time)
const StackedSlider = ({ title, people, color }) =>
{
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % people.length);
  const prevCard = () =>
    setCurrentIndex((prev) => (prev - 1 + people.length) % people.length);

  const cards = useMemo(() =>
  {
    return people.map((person, index) =>
    {
      const isActive = index === currentIndex;
      const isNext = index === (currentIndex + 1) % people.length;
      const isPrev = index === (currentIndex - 1 + people.length) % people.length;

      let x = 0;
      let scale = 0.9;
      let opacity = 0.5;
      let zIndex = 0;

      if (isActive)
      {
        x = 0;
        scale = 1;
        opacity = 1;
        zIndex = 3;
      } else if (isNext)
      {
        x = 80;
        scale = 0.9;
        opacity = 0.7;
        zIndex = 2;
      } else if (isPrev)
      {
        x = -80;
        scale = 0.9;
        opacity = 0.7;
        zIndex = 2;
      }

      return (
        <motion.div
          key={person.name}
          className="absolute w-full h-full flex items-center justify-center will-change-transform"
          animate={{ x, scale, opacity, zIndex }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <ProfileCard person={person} />
        </motion.div>
      );
    });
  }, [currentIndex, people]);

  return (
    <div className="relative flex flex-col items-center bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-gray-700">
      <h2 className={`text-xl font-bold mb-4 ${color}`}>{title}</h2>

      {/* Card Stack */}
      <div className="relative w-[280px] h-[400px] md:w-[320px] md:h-[420px]">
        {cards}
      </div>

      {/* Controls */}
      <div className="flex gap-6 mt-6">
        <button
          onClick={prevCard}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronLeft className="text-white w-5 h-5" />
        </button>
        <button
          onClick={nextCard}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
        >
          <ChevronRight className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
};


// ✅ Main Team Hierarchy
export default function TeamHierarchy()
{
  return (
    <section className="relative px-6 py-20 bg-gradient-to-br from-slate-900 via-black to-gray-900 overflow-hidden">
      {/* Glow Effects (lighter blur for perf) */}
      <div className="absolute -top-20 -left-20 w-[220px] h-[220px] bg-purple-600/20 rounded-full blur-[60px]"></div>
      <div className="absolute bottom-0 right-0 w-[220px] h-[220px] bg-green-500/15 rounded-full blur-[60px]"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto my-8">
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-4">
            Our Team
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Dedicated professionals working together to ensure excellence in both clinical and clerical operations.
          </p>
        </div>

        {/* Chief Lead */}
        <div className="flex justify-center mb-16">
          <ProfileCard person={teamLead} />
        </div>

        {/* Sliders */}
        <div className="flex flex-col lg:flex-row gap-10 justify-center">
          <StackedSlider title="Clinical Section" people={clinicalLeads} color="text-indigo-400" />
          <StackedSlider title="Clerical Section" people={clericalLeads} color="text-green-400" />
        </div>
      </div>
    </section>
  );
}
