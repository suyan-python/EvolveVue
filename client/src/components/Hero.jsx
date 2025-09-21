import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
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
      className={`relative flex justify-center items-center py-32 px-6 sm:px-12 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-950 text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {/* Premium Glow Effects */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-yellow-500/30 rounded-full blur-[200px] animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-green-500/30 rounded-full blur-[200px] animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto space-y-12">
        {/* Logo */}
        <div className="relative">
          <img
            src={Logo}
            alt="Evolve Vue Pvt. Ltd. Logo"
            className="w-56 sm:w-64 lg:w-72 drop-shadow-[0_0_25px_rgba(255,215,0,0.6)] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Headline */}
        <h1 className="header text-3xl sm:text-4xl lg:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-indigo-400 to-green-400 drop-shadow-lg">
          Empowering Healthcare Through Innovation
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl">
          <span className="text-[#d4af37] font-semibold">Evolve Vue Private</span> Limited
          is a trusted and emerging name in the Business Process Outsourcing (BPO) industry,
          established in February 2025. We deliver <span className="text-indigo-400 font-medium">accurate</span>,
          <span className="text-green-400 font-medium"> timely</span>, and
          <span className="text-yellow-400 font-medium"> high-quality</span> medical documentation services
          to healthcare organizations across the globe.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center text-white">
          {/* Explore More */}
          <NavLink
            to="/about"
            className="relative flex items-center justify-center gap-2 px-10 py-4 text-lg font-semibold  rounded-xl
               border-2 border-transparent shadow-lg transition-transform duration-300 hover:scale-105"
            style={{
              borderImageSlice: 1,
              borderWidth: "2px",
              borderImageSource: "linear-gradient(to right, #facc15, #22c55e)",
              backgroundColor: "transparent",
            }}
          >
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>

          {/* Meet Our Team */}
          <NavLink
            to="/team"
            className="relative flex items-center justify-center gap-2 px-10 py-4 text-lg font-semibold  rounded-xl
               border-2 border-transparent shadow-lg transition-transform duration-300 hover:scale-105"
            style={{
              borderImageSlice: 1,
              borderWidth: "2px",
              borderImageSource: "linear-gradient(to right, #facc15, #3b82f6)",
              backgroundColor: "transparent",
            }}
          >
            Meet Our Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </NavLink>
        </div>

      </div>
    </section>
  );
}

export default Hero;
