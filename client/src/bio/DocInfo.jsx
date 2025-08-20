import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import bandana from "../assets/leads/bandana.JPG";

const doctorData = {
  nikita: {
    name: "Dr. Nikita Shakya",
    designation: "Medical Report Writer Lead",
    joiningDate: "December, 2020",
    image: "/images/nikita.jpg",
    bio: "Dr. Nikita Shakya is an expert in crafting precise and compliant medical reports, ensuring adherence to global standards. With over 6 years of experience in the medical field, she has contributed to numerous healthcare projects.",
    mail: "nikita@reportprep.com",
    teamMembers: [
      "Dr. Abhishek Chaurasiya",
      "Dr. Akriti Shrestha",
      "Dr. Anup Subedi",
      "Dr. Apekshya Subedi",
      "Dr. Apurva Bhandari",
      "Dr. Birendra Yadav",
      "Dr. Khush-Boo Gurung",
      "Dr. Manoj Kumar Shrestha",
      "Dr. Prakash Acharya",
      "Dr. Rajendra Kumar Singh",
      "Dr. Shikha Pradhan",
      "Dr. Shristi Manandhar",
      "Dr. Sujan Gautam",
      "Dr. Dipesh Ghimire",
      "Dr. Chitij Karki",
      "Dr. Suvechhya Sigdel",
      "Dr. Sangita K.C.",
      "Dr. Rushmi Maharjan",
      "Dr. Niguma Rayamajhi",
      "Dr. Shushil Sah",
    ],
  },
  rajikya: {
    name: "Pt. Rajiya Shakya",
    designation: "Physiotherapy report writer Lead",
    joiningDate: "March, 2018",
    image: "/images/rajikya.jpg",
    bio: "Rajikya specializes in handling large-scale healthcare data, ensuring efficiency in medical data processing and analytics. His leadership has streamlined data operations in multiple hospitals.",
    mail: "rajiya@reportprep.com",
    teamMembers: [
      "Aayushma Pokharel",
      "Anamika Shahi",
      "Anish Phuyal",
      "Anjila Ghimire",
      "Diggaj Shrestha",
      "Raghuveer Bohara",
      "Sajana Poudel",
      "Sarita Ale",
      "Sheema Koirala",
      "Sushma Kc",
      "Tripti Halwai",
      "Umesh Kunwar",
      "Subekshya Satta",
    ],
  },
  bandana: {
    name: "Bandana Manandhar",
    designation: "Backend Operations Lead",
    joiningDate: "April, 2018",
    image: bandana,
    bio: "Bandana is responsible for backend operations, ensuring seamless healthcare support systems. She has played a key role in integrating new technologies into medical report listing systems.",
    mail: "bandana@reportprep.com",
    teamMembers: [
      "Arju Khadka",
      "Bandu Manandhar",
      "Krija Shrestha",
      "Namita Sangroula",
      "Priyanka Chaudary",
      "Priyasha Mahara",
      "Sakshi Dhungel",
      "Sameera Shrestha",
      "Shruti Gautam",
      "Soney Khadka",
      "Sushmita Khadka",
      "Er. Suyan Man Amatya",
      "Swastika Neupane",
      "Nilima Mulmi",
      "Simran Thapa",
    ],
  },
  ravi: {
    name: "Ravi Sunder Shrestha",
    designation: "Downloader",
    joiningDate: "February, 2014",
    image: '/image',
    bio: "Ravi is responsible for backend operations, ensuring seamless healthcare support systems. She has played a key role in integrating new technologies into medical report listing systems.",
    mail: "ravi@reportprep.com",
    teamMembers: [
      "Dipendra Thapa",
      "Karna Bahadur Bam",
      "Rojin Shakya",
      "Sammyek Ratna Bajracharya",
      "Rajjak Miyan",
      "Deepak Maharjan",
      "Mahesh Shahi",
      "Suman Dahal ",
    ],
  },
};

function DocInfo()
{
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctorData[doctorId];

  if (!doctor)
  {
    return (
      <div className="text-center text-red-500 text-2xl">Doctor Not Found</div>
    );
  }

  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Back Button */}
        <button
          className="mb-6 text-red-600 hover:underline cursor-pointer"
          onClick={() => navigate(-1)}
        >
          ← Back to Team
        </button>

        {/* Doctor Bio Card */}
        <motion.div
          className="bg-white p-8 rounded-3xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-xl duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg mb-6"
          />
          <h2 className="text-3xl font-bold text-red-600">{doctor.name}</h2>

          {doctor.mail && (
            <a
              href={`mailto:${doctor.mail}`}
              className="text-red-500 hover:text-red-700 hover:underline block mt-2"
            >
              {doctor.mail}
            </a>
          )}

          <p className="text-lg text-gray-700 font-semibold">
            {doctor.designation}
          </p>
          <p className="text-md text-gray-500 italic">
            Joined: {doctor.joiningDate}
          </p>

          <p className="mt-4 text-gray-700 text-lg">{doctor.bio}</p>
        </motion.div>

        {/* Team Members Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-red-600">
            Team Members
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {doctor.teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center transition transform hover:scale-105 hover:shadow-xl duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  {member}
                </h4>
                <p className="text-gray-600 text-sm">Medical Staff</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DocInfo;
