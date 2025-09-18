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
      className={`relative flex justify-center items-center py-32 px-6 sm:px-12 bg-slate-800 text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {/* Left yellow Glow */}
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] bg-yellow-500/20 rounded-full blur-[190px]"></div>

      {/* Right Green Glow */}
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[190px]"></div>

      <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-auto space-y-10 ">
        {/* Logo */}
        <div className="relative">
          <img
            src={Logo}
            alt="Evolve Vue Pvt. Ltd. Logo"
            // className="w-52 sm:w-64 lg:w-72 drop-shadow-[0_0_25px_rgba(255,215,0,0.5)]"
            className="w-52 sm:w-64 lg:w-72"
          />
        </div>

        {/* Headline */}
        <h1 className="header text-2xl sm:text-3xl lg:text-5xl   bg-clip-text  drop-shadow-md">
          Empowering Healthcare Through Innovation
        </h1>

        {/* Description */}
        <p className="subheader text-base sm:text-lg lg:text-2xl text-slate-300 leading-relaxed max-w-4xl ">
          <span className="text-[#d4af37] font-semibold "> Evolve Vue Private </span>Limited is a trusted and emerging name in the
          Business Process Outsourcing (BPO) industry, established in February
          2025. We are dedicated to delivering accurate, timely, and high-quality
          medical documentation services to healthcare organizations across the
          globe.
        </p>

        {/* Buttons */}
        <div className="header flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <NavLink
            to="/about"
            className="flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-semibold text-black bg-[#9cee69] rounded-xl  transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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

          <NavLink
            to="/team"
            className="flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-semibold text-[#191919] bg-[#feefae] rounded-xl hover:from-yellow-500 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 "
          >
            Meet Our Team
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
