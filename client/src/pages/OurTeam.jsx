// src/pages/TeamHierarchy.jsx
import React, { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
    className="relative group rounded-2xl overflow-hidden
               w-72 md:w-80 h-[420px] flex flex-col items-center
               bg-[#111] border border-white/10 hover:border-yellow-500/50 
               transition-all duration-500 shadow-2xl"
  >
    {/* Image with subtle zoom on hover */}
    <img
      src={person.image}
      alt={person.name}
      loading="lazy"
      decoding="async"
      width="320"
      height="420"
      className="w-full h-full object-cover
             grayscale-[30%]
             group-hover:grayscale-0
             group-hover:scale-105
             transition-all duration-700"
    />


    {/* Elegant Content Overlay */}
    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
      <div className="w-12 h-1 bg-yellow-500 mb-3 rounded-full"></div> {/* Accent Line */}
      <h3 className="text-xl font-bold text-white tracking-wide">
        {person.name}
      </h3>
      <p className="text-[#9cee69] text-sm font-semibold uppercase tracking-widest mt-1">
        {person.role}
      </p>

      {/* Optional: Add a small bio or LinkedIn icon for authenticity */}
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-gray-400 text-xs italic">Verified Medical Expert</span>
      </div>
    </div>
  </div>
));


// ✅ Smooth Slider (only animates 3 cards at a time)
const StackedSlider = ({ title, people }) =>
{

  const [currentIndex, setCurrentIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % people.length);
  const prevCard = () => setCurrentIndex((prev) => (prev - 1 + people.length) % people.length);

  const cards = useMemo(() =>
  {
    return people.map((person, index) =>
    {
      const isActive = index === currentIndex;
      const isNext = index === (currentIndex + 1) % people.length;
      const isPrev = index === (currentIndex - 1 + people.length) % people.length;

      // Professional focus-based positioning
      let x = 0;
      let scale = 0.8;
      let opacity = 0;
      let zIndex = 0;
      let rotate = 0;

      if (isActive)
      {
        x = 0; scale = 1; opacity = 1; zIndex = 10;
      } else if (isNext)
      {
        x = 160; scale = 0.85; opacity = 0.4; zIndex = 5; rotate = 5;
      } else if (isPrev)
      {
        x = -160; scale = 0.85; opacity = 0.4; zIndex = 5; rotate = -5;
      }

      return (
        <motion.div
          key={person.name}
          className="absolute w-full h-full flex items-center justify-center"
          initial={false}
          animate={{ x, scale, opacity, zIndex, rotate }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: [0.23, 1, 0.32, 1],
          }}

        >

          <ProfileCard person={person} />
        </motion.div>
      );
    });
  }, [currentIndex, people]);

  return (
    <div className="relative flex flex-col items-center py-12 px-4">
      {/* Card Stack Area */}
      <div className="relative w-full max-w-[320px] h-[450px] md:max-w-[400px]">
        {cards}
      </div>

      {/* Modern Navigation Controls */}
      <div className="flex items-center gap-10 mt-12">
        <button
          onClick={prevCard}
          className="group p-4 rounded-full border border-yellow-500/30 hover:border-yellow-500 transition-all"
        >
          <ChevronLeft className="text-yellow-500 group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          {people.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-[#9cee69]" : "w-2 bg-gray-700"}`}
            />
          ))}
        </div>

        <button
          onClick={nextCard}
          className="group p-4 rounded-full border border-yellow-500/30 hover:border-yellow-500 transition-all"
        >
          <ChevronRight className="text-yellow-500 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};


// ✅ Main Team Hierarchy
export default function TeamHierarchy()
{
  return (
    <section className="relative px-6 py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Data Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0H0V30' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* --- Section Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Leadership <span className="text-yellow-500">&</span> Expertise
          </h2>
          <div className="w-24 h-1.5 bg-[#9cee69] mx-auto mb-8 rounded-full"></div> {/* Secondary color accent */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            At Evolve Vue, our strength lies in our structured approach. We combine
            clinical precision with clerical efficiency to deliver world-class BPO solutions.
          </p>
        </div>

        {/* --- Top Level: Chief Lead --- */}
        <div className="flex flex-col items-center mb-32">
          <span className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-sm mb-8">
            Executive Leadership
          </span>
          <div className="p-2 border-2 border-yellow-500/20 rounded-[2.5rem] hover:border-yellow-500/50 transition-colors duration-500">
            <ProfileCard person={teamLead} />
          </div>
        </div>

        {/* --- Department Sliders: Large Gaps for Clarity --- */}
        {/* Title with Brand Accent */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our <span className="text-yellow-500">Experts</span>
          </h2>
          <p className="text-gray-400 mt-2">The pillars of Evolve Vue excellence</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-32 items-start">
          {/* Clinical Section - Yellow Focus */}
          <div className="flex flex-col items-center">
            <div className="mb-4 px-6 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
              <span className="text-yellow-500 font-bold text-sm tracking-widest uppercase">Clinical Division</span>
            </div>
            <StackedSlider
              title="Medical Records Experts"
              people={clinicalLeads}
              color="text-white"
            />
          </div>

          {/* Clerical Section - Lime Focus */}
          <div className="flex flex-col items-center">
            <div className="mb-4 px-6 py-2 bg-[#9cee69]/10 border border-[#9cee69]/20 rounded-full">
              <span className="text-[#9cee69] font-bold text-sm tracking-widest uppercase">Clerical Operations</span>
            </div>
            <StackedSlider
              title="Operational Managers"
              people={clericalLeads}
              color="text-white"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
