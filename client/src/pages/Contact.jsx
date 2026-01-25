import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaGlobe } from "react-icons/fa";

function Contact()
{
  return (
    <section className="relative w-full px-6 lg:px-20 py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* --- HEADER --- */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-[#d6b25e]"></div>
            <span className="text-[10px] font-bold text-[#d6b25e] uppercase tracking-[0.5em]">Head Office</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Global <span className="text-gray-500">Connectivity.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-1 border border-white/10 bg-white/10 rounded-md overflow-hidden">

          {/* Left: Communication Protocol (Information) */}
          <motion.div
            className="w-full lg:w-5/12 bg-[#121212] p-10 md:p-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Evolve Vue Pvt. Ltd.</h3>
              <p className="text-[#d6b25e] text-[10px] font-black uppercase tracking-[0.3em]">Central Operations Hub</p>
            </div>

            <div className="space-y-10">
              {[
                {
                  label: "Data Submission / Inquiries",
                  val: "evolvevue25@gmail.com",
                  icon: FaEnvelope,
                  href: "mailto:evolvevue25@gmail.com",
                },
                {
                  label: "Operational Hotlines",
                  val: "+977 9817576110, 98288293162",
                  icon: FaPhoneAlt,
                  href: "tel:+9779817576110",
                },
                {
                  label: "Physical Jurisdiction",
                  val: "Balkumari-Gwarko, Lalitpur, Nepal",
                  icon: FaMapMarkerAlt,
                  href: "https://maps.app.goo.gl/aQDHTMVHuGifpD6v7",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 group cursor-pointer focus:outline-none"
                >
                  {/* Icon */}
                  <div
                    className="
          w-12 h-12
          border border-white/5
          bg-white/[0.02]
          flex items-center justify-center
          text-[#d6b25e]
          rounded-sm
          transition-all duration-300
          group-hover:bg-[#d6b25e]
          group-hover:text-black
          group-focus-visible:ring-2
          group-focus-visible:ring-[#d6b25e]/60
        "
                  >
                    <item.icon size={18} />
                  </div>

                  {/* Text */}
                  <div className="leading-tight">
                    <span className="block text-[9px] text-gray-600 font-black uppercase tracking-widest mb-1">
                      {item.label}
                    </span>

                    <span
                      className="
            text-gray-300 font-medium tracking-tight
            group-hover:text-white
            underline-offset-4
            group-hover:underline
            transition-colors
          "
                    >
                      {item.val}
                    </span>
                  </div>
                </a>
              ))}
            </div>


            {/* Availability Matrix */}
            <div className="mt-16 pt-10 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-[#d6b25e] rounded-full animate-ping absolute opacity-40"></div>
                  <div className="w-3 h-3 bg-[#d6b25e] rounded-full relative"></div>
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-widest">Active Status: 24/7</p>
                  <p className="text-gray-600 text-[10px] font-medium mt-1 uppercase tracking-tighter">Support available across all global timezones</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Technical Geospatial Data (Map) */}
          <motion.div
            className="w-full lg:w-7/12 bg-[#0b0e14] relative flex flex-col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Metadata Overlay */}
            <div className="absolute top-0 inset-x-0 z-20 bg-gradient-to-b from-[#0b0e14] to-transparent p-8 flex justify-between items-start pointer-events-none">
              <div className="flex items-center gap-3 bg-[#121212]/90 border border-white/10 px-4 py-2 rounded-sm backdrop-blur-sm">
                <FaClock className="text-[#d6b25e] text-xs" />
                <span className="text-[10px] text-white font-black uppercase tracking-widest">GMT +5:45 (NEPAL)</span>
              </div>
              <div className="flex items-center gap-3 bg-[#121212]/90 border border-white/10 px-4 py-2 rounded-sm backdrop-blur-sm">
                <FaGlobe className="text-[#d6b25e] text-xs" />
                <span className="text-[10px] text-white font-black uppercase tracking-widest">Lat: 27.6672° N</span>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.84505588054168!2d85.33343193813188!3d27.670291154199543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9079a4adb%3A0xab20f3b73dc8adac!2sInaya%20Cafe!5e0!3m2!1sen!2snp!4v1742110639291!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
              className="w-full h-full min-h-[550px] grayscale invert-[0.9] opacity-40 contrast-125 hover:opacity-90 hover:grayscale-0 hover:invert-0 transition-all duration-1000"
            ></iframe>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 inset-x-0 h-1 bg-[#d6b25e] opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;