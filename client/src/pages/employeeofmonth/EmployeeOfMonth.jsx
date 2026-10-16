import React from "react";
import EmployeeCard from "./EmployeeCard"; // Import the component above

// import Photo1 from "../assets/team/saraswati.jpg";
// import Photo2 from "../assets/team/manish.jpg";

import suyog from "../../assets/month/suyog.jpeg";
import kritika from "../../assets/month/kritika.jpeg";
import sabina from "../../assets/month/sabina.jpeg";

import lumanti from "../../assets/month/lumanti.jpeg";
import jemini from "../../assets/month/jemini.jpeg";

const EmployeeSpotlightSection = () => {
  const spotlights2 = [
    {
      name: "Mr. Suyog Rai",
      designation: "Medical Report Reviewer",
      department: "Clerical Team-AH",
      month: "august",
      year: "2026",
      focus:
        "Enhancing document quality by identifying inconsistencies and ensuring compliance with internal review standards.",
      image: suyog,
    },
    {
      name: "Ms. Kritika Acharya",
      designation: "Medical Report Reviewer",
      department: "Clerical Team-Cohort",
      month: "august",
      year: "2026",
      focus:
        "Improving data accuracy and reducing reporting inconsistencies across clinical documentation workflows.",
      image: kritika,
    },
    {
      name: "Ms. Sabina Deoja",
      designation: "Medical Data Analyst",
      department: "Clinical Team",
      month: "august",
      year: "2026",
      focus:
        "Improving data accuracy and reducing reporting inconsistencies across clinical documentation workflows.",
      image: sabina,
    },
  ];
  const spotlights1 = [
    {
      name: "Mr. Suyog Rai",
      designation: "Medical Report Reviewer",
      department: "Clerical Team-AH",
      month: "september",
      year: "2026",
      focus:
        "Enhancing document quality by identifying inconsistencies and ensuring compliance with internal review standards.",
      image: suyog,
    },
    {
      name: "Ms. Lumanti Shakya",
      designation: "Medical Report Reviewer",
      department: "Clerical Team-Cohort",
      month: "september",
      year: "2026",
      focus:
        "Improving data accuracy and reducing reporting inconsistencies across clinical documentation workflows.",
      image: lumanti,
    },
    {
      name: "Ms. Jemini Shrestha",
      designation: "Medical Data Analyst",
      department: "Clinical Team",
      month: "september",
      year: "2026",
      focus:
        "Improving data accuracy and reducing reporting inconsistencies across clinical documentation workflows.",
      image: jemini,
    },
  ];

  return (
    <section className="w-full  bg-[#0b0e14]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-32">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="ma">
            <div className="flex items-center gap-3 text-[#d6b25e] font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-4">
              Institutional Spotlight
            </div>
            <h2 className="header text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Our Employees of the Month -{" "}
              <span className="text-[#d6b25e]">September, 2026</span>
            </h2>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {spotlights1.map((emp, index) => (
            <EmployeeCard key={index} {...emp} />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="">
            <div className="flex items-center gap-3 text-[#d6b25e] font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-4">
              Institutional Spotlight
            </div>
            <h2 className="header text-3xl md:text-5xl font-semibold text-white tracking-tight">
              Our Employees of the Month -{" "}
              <span className="text-[#d6b25e] ">August, 2026</span>
            </h2>
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {spotlights2.map((emp, index) => (
            <EmployeeCard key={index} {...emp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeSpotlightSection;
