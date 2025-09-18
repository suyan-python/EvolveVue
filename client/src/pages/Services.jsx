import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import
{
  FaFileMedical,
  FaClipboardList,
  FaKeyboard,
  FaDatabase,
  FaChartBar,
  FaClipboardCheck,
  FaShieldAlt,
  FaUserMd
} from "react-icons/fa";

function Services()
{
  const services = [
    {
      title: "Medical Report Writing",
      description:
        "Comprehensive and accurate medical reports tailored for clinical, insurance, and legal requirements.",
      icon: <FaFileMedical className=" text-5xl mx-auto mb-4" />,
    },
    {
      title: "Medical Listing",
      description:
        "Systematic listing and categorization of medical services, products, and procedures as per global healthcare standards.",
      icon: <FaClipboardList className=" text-5xl mx-auto mb-4" />,
    },
    {
      title: "Medical Data Entry",
      description:
        "Secure and accurate entry of patient records, clinical data, and medical histories into healthcare systems.",
      icon: <FaKeyboard className=" text-5xl mx-auto mb-4" />,
    },
    {
      title: "Medical Documentation",
      description:
        "Detailed and structured documentation of clinical encounters, diagnoses, and treatment plans for improved patient care.",
      icon: <FaFileMedical className=" text-5xl mx-auto mb-4" />,
    },
    {
      title: "Data Processing",
      description:
        "Streamlined management, cleansing, and transformation of healthcare data for better decision-making.",
      icon: <FaDatabase className=" text-5xl mx-auto mb-4" />,
    },
    {
      title: "Healthcare Analytics",
      description:
        "Advanced analytics and data visualization to derive actionable insights and optimize healthcare outcomes.",
      icon: <FaChartBar className=" text-5xl mx-auto mb-4" />,
    },
    {
      title: "Compliance Audits",
      description:
        "Thorough audits to ensure healthcare operations meet regulatory standards, improve quality, and minimize risk.",
      icon: <FaClipboardCheck className=" text-5xl mx-auto mb-4" />,
    },
    {
      title: "Data Security & Privacy",
      description:
        "Robust protection of sensitive health data through secure systems and privacy-compliant processes.",
      icon: <FaShieldAlt className=" text-5xl mx-auto mb-4" />,
    },
    {
      title: "Clinical Support Services",
      description:
        "Assisting healthcare professionals with accurate documentation, record updates, and administrative efficiency.",
      icon: <FaUserMd className=" text-5xl mx-auto mb-4" />,
    },
  ];

  return (
    <section className="w-full py-32 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title with Animation */}
        <motion.h2
          className="header text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-12 text-[#9cee69]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-b from-green-500/20 via-slate-700/40 to-transparent border-[#9cee69] border-t-2 text-white p-8 rounded-3xl shadow-lg text-center transition transform hover:scale-105 hover:shadow-xl duration-300 flex flex-col justify-between min-h-[270px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {service.icon}
              <h3 className="text-xl sm:text-2xl font-semibold  mb-3">
                {service.title}
              </h3>
              <p className=" text-base sm:text-lg">
                {service.description}
              </p>
              {/* <NavLink to={"/services"}>
                <button className="bg-red-600 px-6 py-3 mt-6 rounded-full text-white font-medium hover:bg-red-700 transition duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </NavLink> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
