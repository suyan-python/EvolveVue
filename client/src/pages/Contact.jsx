import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact()
{
  return (
    <section className="relative w-full px-6 lg:px-20 py-24 my-24 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto bg-white/30  rounded-3xl shadow-xl p-10 lg:p-16 flex flex-col lg:flex-row gap-16 items-center">

        {/* Left: Contact Info */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col space-y-8 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <h1 className="header text-4xl lg:text-5xl font-semibold text-gray-200 leading-snug">
            Let’s <span className="text-yellow-300">Connect</span>
          </h1>
          <p className="header text-3xl  text-gray-200 font-medium">
            Evolve Vue Pvt. Ltd.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col space-y-6">
            {/* Email */}
            <motion.a
              href="mailto:vudeviservices@gmail.com"
              className="flex items-center gap-4 text-lg text-gray-200 hover:text-yellow-600 transition-colors duration-300 group"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope className="text-2xl text-yellow-500 group-hover:text-yellow-600" />
              vudeviservices@gmail.com
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+9779817576110"
              className="flex items-center gap-4 text-lg text-gray-200 hover:text-yellow-600 transition-colors duration-300 group"
              whileHover={{ x: 5 }}
            >
              <FaPhoneAlt className="text-2xl text-yellow-500 group-hover:text-yellow-600" />
              +977 9817576110, 98288293162, 9841208219
            </motion.a>

            {/* Address */}
            <motion.p
              className="flex items-center gap-4 text-lg text-gray-200"
              whileHover={{ scale: 1.02 }}
            >
              <FaMapMarkerAlt className="text-2xl text-yellow-500 group-hover:text-yellow-600" />
              Evolve Vue, Balkumari, Lalitpur
            </motion.p>
          </div>
        </motion.div>

        {/* Right: Map */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.84505588054168!2d85.33343193813188!3d27.670291154199543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9079a4adb%3A0xab20f3b73dc8adac!2sInaya%20Cafe!5e0!3m2!1sen!2snp!4v1742110639291!5m2!1sen!2snp"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
