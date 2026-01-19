import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";

function Contact()
{
  return (
    <section className="relative w-full px-6 lg:px-20 py-32 bg-[#0a0a0b] overflow-hidden">
      {/* --- Aesthetic Background Elements --- */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#9cee69]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Get In <span className="text-yellow-500">Touch</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-[#9cee69] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* Left: Professional Info Cards */}
          <motion.div
            className="w-full lg:w-5/12 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#111] border border-white/5 p-8 rounded-[2rem] hover:border-yellow-500/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-2">Evolve Vue Pvt. Ltd.</h3>
              <p className="text-[#9cee69] text-xs font-black uppercase tracking-[0.2em] mb-8">Headquarters</p>

              <div className="space-y-8">
                {/* Email Item */}
                <a href="mailto:evolvevue25@gmail.com" className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-widest">Email Support</span>
                    <span className="text-gray-200 font-medium">evolvevue25@gmail.com</span>
                  </div>
                </a>

                {/* Phone Item */}
                <a href="tel:+9779817576110" className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-widest">Direct Line</span>
                    <span className="text-gray-200 font-medium text-sm">+977 9817576110, 98288293162</span>
                  </div>
                </a>

                {/* Address Item */}
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 transition-all">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-widest">Location</span>
                    <span className="text-gray-200 font-medium">Balkumari-Gwarko, Lalitpur, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status Card */}
            <div className="bg-[#9cee69]/5 border border-[#9cee69]/20 p-6 rounded-2xl flex items-center gap-4">
              <div className="w-3 h-3 bg-[#9cee69] rounded-full animate-pulse shadow-[0_0_10px_#9cee69]"></div>
              <span className="text-[#9cee69] text-xs font-bold uppercase tracking-widest">Operational 24/7 for Global Clients</span>
            </div>
          </motion.div>

          {/* Right: The Interactive Map Area */}
          <motion.div
            className="w-full lg:w-7/12 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Map Overlay for Professional Touch */}
            <div className="absolute top-6 right-6 z-20 bg-[#0a0a0b]/80  px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
              <FaClock className="text-yellow-500 text-xs" />
              <span className="text-[10px] text-white font-bold uppercase tracking-widest">GMT +5:45 (Nepal Time)</span>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.84505588054168!2d85.33343193813188!3d27.670291154199543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9079a4adb%3A0xab20f3b73dc8adac!2sInaya%20Cafe!5e0!3m2!1sen!2snp!4v1742110639291!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
              className="w-full h-full min-h-[450px] grayscale-[0.8] invert-[0.9] hue-rotate-[180deg] opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;