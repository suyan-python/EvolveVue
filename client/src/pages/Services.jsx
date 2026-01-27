import React from "react";
import { motion } from "framer-motion";
import
{
  FaFileMedical, FaClipboardList, FaKeyboard, FaDatabase,
  FaChartBar, FaClipboardCheck, FaShieldAlt, FaUserMd
} from "react-icons/fa";

const Services = () =>
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
    <section className="relative w-full py-32 bg-[#0b0e14] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-[1px] bg-[#d6b25e]"></div>
            <span className="text-[10px] font-bold text-[#d6b25e] uppercase tracking-[0.5em]">
              Our Professional Suite
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-tight"
          >
            Precision-Driven <br />
            <span className="text-gray-500  font-medium ">Healthcare Solutions.</span>
          </motion.h2>

          <p className="text-gray-400 text-lg leading-relaxed border-l border-white/10 pl-8">
            Bridging the gap between clinical care and administrative precision. We provide
            physicians with the data integrity required for modern medical excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-[#121212] border border-white/5 p-10 rounded-3xl transition-all duration-500 hover:border-[#d6b25e]/30 flex flex-col items-start overflow-hidden"
            >
              {/* Internal Spotlight Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d6b25e]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Section */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d6b25e] text-2xl mb-8 group-hover:scale-110 group-hover:bg-[#d6b25e] group-hover:text-black transition-all duration-500 shadow-2xl">
                {service.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm font-medium mb-10 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Trust Badge at bottom of card */}
              <div className="mt-auto relative z-10 flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#d6b25e] rounded-full shadow-[0_0_8px_#d6b25e]"></div>
                <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                  Quality Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
            {/* These would be small icons for HIPAA, ISO, etc */}
            <span className="text-xs font-bold text-white tracking-widest border border-white px-3 py-1">HIPAA</span>
            <span className="text-xs font-bold text-white tracking-widest border border-white px-3 py-1">GDPR</span>
            <span className="text-xs font-bold text-white tracking-widest border border-white px-3 py-1">ISO 27001</span>
          </div>
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">
            Securely Processing 1M+ Clinical Records Annually
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;