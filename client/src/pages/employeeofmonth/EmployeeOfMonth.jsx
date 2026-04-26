import React from "react";
import EmployeeCard from "./EmployeeCard"; // Import the component above

// import Photo1 from "../assets/team/saraswati.jpg";
// import Photo2 from "../assets/team/manish.jpg";

import ashmita from "../../assets/month/ashmita.jpeg";
import anusha from "../../assets/month/anusha.jpeg";

const EmployeeSpotlightSection = () =>
{
    const spotlights = [
        {
            name: "Ashmita Iteni",
            designation: "Medical Data Analyst",
            department: "Clinical Team",
            month: "march",
            year: "2026",
            focus: "Improving data accuracy and reducing reporting inconsistencies across clinical documentation workflows.",
            image: ashmita,
        },
        {
            name: "Anusha Bastola",
            designation: "Medical Report Reviewer",
            department: "Clerical Team",
            month: "march",
            year: "2026",
            focus: "Enhancing document quality by identifying inconsistencies and ensuring compliance with internal review standards.",
            image: anusha,
        },
    ];

    return (
        <section className="w-full py-32 bg-[#0b0e14]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 text-yellow-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4">
                            <span className="w-8 h-[1px] bg-yellow-500"></span> Institutional Spotlight
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            Our Employees of the Month - <span className="text-yellow-500 italic font-serif">March, 2026</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm md:text-right max-w-xs border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6">
                        Recognizing the individuals maintaining our clinical data integrity standards.
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {spotlights.map((emp, index) => (
                        <EmployeeCard key={index} {...emp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmployeeSpotlightSection;