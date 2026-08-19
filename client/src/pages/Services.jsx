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
            <span className="text-gray-500 font-light">
              Healthcare Solutions.
            </span>
          </motion.h2>

          <p className="text-gray-400 text-xs md:text-lg leading-relaxed border-l border-[#d6b25e]/20 pl-8">
            Bridging clinical intelligence with structured documentation systems
            that power accuracy, compliance, and operational scale.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10 border border-white/10">

          {services.map((service, index) =>
          {
            const isFeatured = index === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
          group relative overflow-hidden
          bg-[#101010]
          min-h-[360px]
          flex flex-col
          transition-all duration-700
          ${isFeatured
                    ? "lg:col-span-6 lg:min-h-[430px]"
                    : "lg:col-span-3"
                  }
        `}
              >

                {/* -------------------------------- */}
                {/* BACKGROUND INDEX */}
                {/* -------------------------------- */}

                <div
                  className="
            absolute
            -right-5
            -top-10
            text-[140px]
            md:text-[180px]
            font-black
            leading-none
            tracking-tighter
            text-white/[0.025]
            select-none
            pointer-events-none
            transition-transform
            duration-1000
            group-hover:translate-x-[-10px]
            group-hover:text-white/[0.04]
          "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* -------------------------------- */}
                {/* TOP ACCENT */}
                {/* -------------------------------- */}

                <div
                  className="
            absolute
            top-0
            left-0
            w-0
            h-[1px]
            bg-[#d6b25e]
            group-hover:w-full
            transition-all
            duration-700
          "
                />


                {/* -------------------------------- */}
                {/* CONTENT */}
                {/* -------------------------------- */}

                <div
                  className={`
            relative z-10
            flex flex-col
            h-full
            ${isFeatured
                      ? "p-8 md:p-12"
                      : "p-7 md:p-9"
                    }
          `}
                >

                  {/* HEADER */}
                  <div className="flex items-center justify-between mb-auto">

                    <span
                      className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#d6b25e]
              "
                    >
                      Service {String(index + 1).padStart(2, "0")}
                    </span>

                    <div
                      className="
                w-9 h-9
                rounded-full
                border border-white/10
                flex items-center justify-center
                text-gray-600
                transition-all
                duration-500
                group-hover:border-[#d6b25e]/50
                group-hover:text-[#d6b25e]
              "
                    >
                      <span className="text-xs">↗</span>
                    </div>

                  </div>


                  {/* ICON */}

                  <div className="mt-20 mb-7">

                    <div
                      className="
                w-11 h-11
                flex items-center justify-center
                border border-white/10
                bg-white/[0.025]
                text-[#d6b25e]
                transition-all
                duration-500
                group-hover:border-[#d6b25e]/40
                group-hover:bg-[#d6b25e]
                group-hover:text-black
              "
                    >
                      {service.icon}
                    </div>

                  </div>


                  {/* TITLE */}

                  <h3
                    className={`
              font-medium
              tracking-tight
              text-white
              leading-tight
              mb-4
              transition-transform
              duration-500
              group-hover:translate-x-1
              ${isFeatured
                        ? "text-2xl md:text-3xl"
                        : "text-xl"
                      }
            `}
                  >
                    {service.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p
                    className={`
              text-gray-500
              leading-relaxed
              max-w-xl
              ${isFeatured
                        ? "text-sm md:text-base"
                        : "text-sm"
                      }
            `}
                  >
                    {service.description}
                  </p>


                  {/* -------------------------------- */}
                  {/* FOOTER */}
                  {/* -------------------------------- */}

                  <div
                    className="
              mt-10
              pt-5
              border-t
              border-white/10
              flex
              items-center
              justify-between
            "
                  >

                    <div className="flex items-center gap-2">

                      <span
                        className="
                  w-1.5
                  h-1.5
                  rounded-full
                  bg-[#d6b25e]
                  transition-all
                  duration-500
                  group-hover:shadow-[0_0_12px_#d6b25e]
                "
                      />

                      <span
                        className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-gray-600
                  group-hover:text-gray-400
                  transition-colors
                "
                      >
                        Verified System
                      </span>

                    </div>

                    <span
                      className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-gray-700
                group-hover:text-[#d6b25e]
                transition-colors
              "
                    >
                      Evolve Vue
                    </span>

                  </div>

                </div>


                {/* -------------------------------- */}
                {/* HOVER EDGE */}
                {/* -------------------------------- */}

                <div
                  className="
            absolute
            bottom-0
            left-0
            w-0
            h-[2px]
            bg-[#d6b25e]
            group-hover:w-full
            transition-all
            duration-700
          "
                />

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