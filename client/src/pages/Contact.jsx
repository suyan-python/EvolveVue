import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact()
{
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 px-6 lg:px-20 py-20 shadow-xl rounded-3xl my-24">
      {/* Left: Contact Details */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h1 className="font-heading text-4xl lg:text-5xl font-extrabold text-gray-800 leading-snug">
          Let’s Connect
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 font-medium tracking-wide">
          Evolve Vue Pvt. Ltd.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col space-y-5">
          {/* Email */}
          <motion.a
            href="mailto:vudeviservices@gmail.com"
            className="flex items-center gap-4 text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 group w-fit"

          >
            <FaEnvelope className="text-2xl text-red-500 group-hover:text-red-600" />
            vudeviservices@gmail.com
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+9779817576110"
            className="flex items-center gap-4 text-lg text-gray-700 hover:text-red-500 transition-colors duration-300 group"

          >
            <FaPhoneAlt className="text-2xl text-red-500 group-hover:text-red-600" />
            +977 9817576110, 98288293162, 9841208219
          </motion.a>

          {/* Address */}
          <motion.p
            className="flex items-center gap-4 text-lg text-gray-700 group"
            whileHover={{ scale: 1.02 }}
          >
            <FaMapMarkerAlt className="text-2xl text-red-500 group-hover:text-red-600" />
            Evolve Vue, Balkumari, Lalitpur
          </motion.p>
        </div>
      </motion.div>

      {/* Right: Map */}
      <motion.div
        className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center p-4 lg:p-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full max-w-3xl bg-white p-3 rounded-2xl shadow-2xl border border-gray-200 hover:shadow-red-100 transition-shadow duration-300">
          <div className="w-full h-96 overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.84505588054168!2d85.33343193813188!3d27.670291154199543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9079a4adb%3A0xab20f3b73dc8adac!2sInaya%20Cafe!5e0!3m2!1sen!2snp!4v1742110639291!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
