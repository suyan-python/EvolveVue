import React from "react";
import EmployeeCard from "./EmployeeCard"; // Import the component above

// import Photo1 from "../assets/team/saraswati.jpg";
// import Photo2 from "../assets/team/manish.jpg";

import shaurav from "../../assets/month/shaurav.jpeg";
import suyog from "../../assets/month/suyog.jpeg";
import kritika from "../../assets/month/kritika.jpeg";



const EmployeeSpotlightSection = () =>
{
    const spotlights1 = [
        {
            name: "Mr. Suyog Rai",
            designation: "Medical Report Reviewer",
            department: "Clerical Team",
            month: "july",
            year: "2026",
            focus: "Enhancing document quality by identifying inconsistencies and ensuring compliance with internal review standards.",
            image: suyog,
        },
        {
            name: "Mr. Shaurav Acharya",
            designation: "Medical Report Reviewer",
            department: "Cohort Team",
            month: "july",
            year: "2026",
            focus: "Improving data accuracy and reducing reporting inconsistencies across clinical documentation workflows.",
            image: shaurav,
        },
    ];
    const spotlights2 = [
        {
            name: "Mr. Suyog Rai",
            designation: "Medical Report Reviewer",
            department: "Clerical Team",
            month: "june",
            year: "2026",
            focus: "Enhancing document quality by identifying inconsistencies and ensuring compliance with internal review standards.",
            image: suyog,
        },
        {
            name: "Ms. Kritika Acharya",
            designation: "Medical Report Reviewer",
            department: "Cohort Team",
            month: "june",
            year: "2026",
            focus: "Improving data accuracy and reducing reporting inconsistencies across clinical documentation workflows.",
            image: kritika,
        },
    ];

    return (
        <section className="w-full  bg-[#0b0e14]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-32">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 text-yellow-500 font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-4">
                            <span className="w-8 h-[1px] bg-yellow-500"></span> Institutional Spotlight
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Our Employees of the Month - <span className="text-yellow-500 italic font-serif">July, 2026</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm md:text-right max-w-xs border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6">
                        Recognizing the individuals maintaining our clinical data integrity standards.
                    </p>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {spotlights1.map((emp, index) => (
                        <EmployeeCard key={index} {...emp} />
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-32">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 text-yellow-500 font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-4">
                            <span className="w-8 h-[1px] bg-yellow-500"></span> Institutional Spotlight
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            Our Employees of the Month - <span className="text-yellow-500 italic font-serif">June, 2026</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-xs md:text-sm md:text-right max-w-xs border-l md:border-l-0 md:border-r border-white/10 pl-6 md:pl-0 md:pr-6">
                        Recognizing the individuals maintaining our clinical data integrity standards.
                    </p>
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