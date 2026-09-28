import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/logo/evolve.png";

function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-24 overflow-hidden bg-black">
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <img src={Logo} alt="Evolve Vue" className="w-44 md:w-56" />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="subheader mb-6 text-[10px] md:text-xs font-medium uppercase tracking-[0.3em] text-[#d6b25e]"
        >
          Healthcare Documentation
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="header max-w-4xl text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-0.04em] leading-[0.95] text-white"
        >
          Precision in every
          <span className="block text-gray-500">detail.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=" mt-10 max-w-xl text-sm md:text-base leading-7 text-gray-400"
        >
          We help healthcare organizations simplify clinical documentation
          through secure, accurate, and reliable administrative solutions.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex items-center gap-8"
        >
          <NavLink
            to="/services"
            className="px-8 py-4 rounded-full bg-[#d6b25e] text-black text-xs font-semibold tracking-[0.16em] uppercase transition-colors duration-300 hover:bg-white"
          >
            Explore Services
          </NavLink>

          <NavLink
            to="/team"
            className="text-xs font-medium uppercase tracking-[0.16em] text-gray-400 transition-colors duration-300 hover:text-white"
          >
            Meet the Team →
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
