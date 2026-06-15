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

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#d6b25e]/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER */}
        <div className="max-w-3xl mb-12 md:mb-24">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
            className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tighter"
          >
            Precision-Driven <br />
            <span className="text-gray-500 font-medium">
              Healthcare Solutions.
            </span>
          </motion.h2>

          <p className="text-gray-400 text-xs md:text-lg leading-relaxed border-l border-[#d6b25e]/20 pl-8">
            Bridging clinical intelligence with structured documentation systems
            that power accuracy, compliance, and operational scale.
          </p>

        </div>

        {/* SERVICES GRID (Editorial Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {services.map((service, index) =>
          {

            const isFeatured = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`relative group overflow-hidden border border-white/5 bg-[#121212] rounded-3xl transition-all duration-500
              ${isFeatured ? "lg:col-span-6 p-12" : "lg:col-span-3 p-8"}
            `}
              >

                {/* Glow Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d6b25e]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Floating accent line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#d6b25e] group-hover:w-full transition-all duration-700" />

                {/* ICON */}
                <div className="relative z-10 mb-8">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 text-[#d6b25e] group-hover:bg-[#d6b25e] group-hover:text-black transition-all duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className={`relative z-10 text-white font-bold tracking-tight mb-4
              ${isFeatured ? "text-3xl" : "text-xl"}
            `}>
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className={`relative z-10 text-gray-500 leading-relaxed mb-10
              ${isFeatured ? "text-base" : "text-sm"}
            `}>
                  {service.description}
                </p>

                {/* CTA / MICRO INTERACTION */}
                <div className="relative z-10 flex items-center justify-between mt-auto">

                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#d6b25e] shadow-[0_0_10px_#d6b25e]" />
                    <span className="text-[9px] uppercase tracking-widest text-gray-500 group-hover:text-white transition">
                      Verified System
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* TRUST STRIP */}
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white
        ">

          <div className="flex items-center gap-4 opacity-40 hover:opacity-100 transition">
            <span className="text-xs border border-white/10 px-3 py-1">HIPAA</span>
            <span className="text-xs border border-white/10 px-3 py-1">GDPR</span>
            <span className="text-xs border border-white/10 px-3 py-1">ISO 27001</span>
          </div>

          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">
            Processing Clinical Intelligence at Scale
          </p>

        </div>

      </div>
    </section>
  );
};

export default Services;