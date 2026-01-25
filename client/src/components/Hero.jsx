import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/logo/evolve.png";

function Hero()
{
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() =>
  {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () =>
    {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center ] px-6 py-20 overflow-hidden"
    >
      {/* --- BACKGROUND ARCHITECTURE --- */}

      {/* 1. Main Brand Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(214,178,94,0.08)_0%,_transparent_70%)] pointer-events-none"></div>

      {/* 2. Professional Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0h1v40H0zM0 0h40v1H0z' fill='%23ffffff'/%3E%3C/svg%3E")` }}
      ></div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Trusted Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-3 px-5 py-2 rounded-full border border-white/5 bg-white/[0.02] "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#d6b25e] shadow-[0_0_10px_#d6b25e]"></span>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400">
            Global Medical Standards <span className="text-[#d6b25e] mx-2">|</span> ISO & HIPAA Certified
          </span>
        </motion.div>

        {/* Logo - Elegant & Grounded */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <img
            src={Logo}
            alt="Evolve Vue Logo"
            className="w-56 md:w-72 drop-shadow-[0_20px_50px_rgba(214,178,94,0.15)]"
          />
        </motion.div>

        {/* Headline - Bold & Authoritative */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.95] text-white"
        >
          Precision <span className="text-[#d6b25e]">Data.</span> <br />
          Absolute <span className="text-gray-500">Integrity.</span>
        </motion.h1>

        {/* Description - Refined Body Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-medium"
        >
          Evolve Vue optimizes healthcare ecosystems through <span className="text-white">secure clinical documentation</span> and
          unmatched administrative accuracy.
        </motion.p>

        {/* Call to Actions - High Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-5 mt-16 w-full sm:w-auto"
        >
          <NavLink
            to="/services"
            className="px-14 py-5 bg-[#d6b25e] text-black font-black text-xs tracking-[0.2em] rounded-full 
                       hover:bg-white transition-all duration-500 shadow-[0_15px_30px_rgba(214,178,94,0.2)]"
          >
            VIEW SOLUTIONS
          </NavLink>

          <NavLink
            to="/team"
            className="px-14 py-5 bg-transparent border border-white/10 text-white font-black text-xs tracking-[0.2em] rounded-full 
                       hover:bg-white hover:text-black transition-all duration-500"
          >
            OUR EXPERTISE
          </NavLink>
        </motion.div>

        {/* Trust Bar - Styled like a footer of a contract */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 pt-12 border-t border-white/5 w-full flex flex-wrap justify-center gap-12 md:gap-24"
        >
          <div className="group flex flex-col items-center gap-2">
            <span className="text-[10px] font-black text-[#d6b25e] tracking-widest uppercase">99.9%</span>
            <span className="text-[9px] font-bold text-gray-500 tracking-[0.2em]">Accuracy Rate</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <span className="text-[10px] font-black text-[#d6b25e] tracking-widest uppercase">Secure</span>
            <span className="text-[9px] font-bold text-gray-500 tracking-[0.2em]">End-to-End Encryption</span>
          </div>
          <div className="group flex flex-col items-center gap-2">
            <span className="text-[10px] font-black text-[#d6b25e] tracking-widest uppercase">Global</span>
            <span className="text-[9px] font-bold text-gray-500 tracking-[0.2em]">Compliance Standards</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
