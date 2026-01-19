import React from "react";
import { motion } from "framer-motion";
import
  {
    FaFileMedical, FaClipboardList, FaKeyboard, FaDatabase,
    FaChartBar, FaClipboardCheck, FaShieldAlt, FaUserMd
  } from "react-icons/fa";

function Services()
{
  const services = [
    {
      title: "Medical Report Writing",
      description: "Comprehensive and accurate medical reports tailored for clinical, insurance, and legal requirements.",
      icon: <FaFileMedical />,
    },
    {
      title: "Medical Listing",
      description: "Systematic categorization of medical services and procedures as per global healthcare standards.",
      icon: <FaClipboardList />,
    },
    {
      title: "Medical Data Entry",
      description: "Secure entry of patient records and clinical data into advanced healthcare systems.",
      icon: <FaKeyboard />,
    },
    {
      title: "Medical Documentation",
      description: "Structured documentation of clinical encounters and treatment plans for patient care.",
      icon: <FaFileMedical />,
    },
    {
      title: "Data Processing",
      description: "Streamlined management and cleansing of healthcare data for better decision-making.",
      icon: <FaDatabase />,
    },
    {
      title: "Healthcare Analytics",
      description: "Advanced visualization to derive actionable insights and optimize healthcare outcomes.",
      icon: <FaChartBar />,
    },
    {
      title: "Compliance Audits",
      description: "Audits ensuring healthcare operations meet regulatory standards and minimize risk.",
      icon: <FaClipboardCheck />,
    },
    {
      title: "Data Security & Privacy",
      description: "Protection of sensitive health data through secure, privacy-compliant processes.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Clinical Support",
      description: "Assisting healthcare professionals with administrative efficiency and record updates.",
      icon: <FaUserMd />,
    },
  ];

  return (
    <section className="relative w-full py-32 bg-[#0a0a0a] overflow-hidden">
      {/* --- Background Branding Elements --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#9cee69]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-yellow-500">Expertise</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#9cee69] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Delivering high-precision BPO solutions designed to optimize healthcare workflows and ensure data integrity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#111] border border-white/5 p-8 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-yellow-500/50"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent group-hover:via-yellow-500 transition-all duration-500"></div>

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 flex items-center justify-center text-[#9cee69] text-3xl mb-6 group-hover:scale-110 group-hover:text-yellow-500 transition-all duration-500 shadow-xl">
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-6">
                {service.description}
              </p>

              {/* Bottom "Professional" Cue */}
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-[#9cee69] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-4 h-[1px] bg-[#9cee69]"></div>
                Verified Service
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;