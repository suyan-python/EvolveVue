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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14 sm:mb-16 md:mb-20"
        >
          <img
            src={Logo}
            alt="Evolve Vue"
            className="mx-auto w-36 sm:w-40 md:w-48 lg:w-52 h-auto object-contain"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="header mx-auto max-w-5xl text-[2.75rem] leading-[1.08] tracking-[-0.045em] font-semibold text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Precision in every
          <span className="mt-1 block text-white/45">detail.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="body mx-auto mt-7 max-w-lg px-2 text-sm leading-7 text-gray-400 sm:mt-8 sm:px-0 sm:text-base sm:leading-8 md:max-w-xl"
        >
          We help healthcare organizations simplify clinical documentation
          through secure, accurate, and reliable administrative solutions.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 md:mt-14 flex w-full max-w-md flex-col items-stretch justify-center gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:gap-6"
        >
          <NavLink
            to="/services"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#d6b25e] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6b25e] focus-visible:ring-offset-4 focus-visible:ring-offset-black sm:min-h-14 sm:px-9"
          >
            Explore Services
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </NavLink>

          <NavLink
            to="/team"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.14em] text-gray-300 transition-all duration-300 hover:border-white/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:min-h-14 sm:border-transparent sm:px-4"
          >
            Meet the Team
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
