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
      className={`relative flex items-center justify-center min-h-screen px-6 py-32 overflow-hidden
 text-white transition-all duration-1000 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* --- Strategic Color Accents --- */}
      {/* Primary Brand Glow (Yellow) */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Secondary Success Glow (Lime Green) */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#9cee69]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Subtle Data-Grid (The "BPO" Texture) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48L54 60L52 60L52 48L40 48L40 46L52 46L52 34L54 34L54 46L66 46L66 48L54 48Z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- Main Content Layout --- */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">
        {/* Animated Badge: Established 2025 */}
        {/* <div className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9cee69] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9cee69]"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
            Trusted Medical BPO <span className="text-yellow-500 text-sm ml-1">•</span> Est. 2025
          </span>
        </div> */}

        {/* Logo Section */}
        <div className="mb-10 transition-transform duration-700 hover:scale-105">
          <img
            src={Logo}
            alt="Evolve Vue Pvt. Ltd. Logo"
            className="w-48 sm:w-60 lg:w-72 drop-shadow-[0_0_25px_rgba(234,179,8,0.25)]"
          />
        </div>

        {/* Professional Dual-Color Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter leading-[1.1]">
          Precise <span className="text-yellow-500">Documentation.</span><br />
          Seamless <span className="text-[#9cee69]">Outsourcing.</span>
        </h1>

        {/* Professional Sub-description */}
        <p className="mt-8 text-gray-400 text-lg sm:text-2xl max-w-3xl leading-relaxed">
          <span className="text-white font-medium">Evolve Vue</span> simplifies healthcare operations with
          high-fidelity medical records management and
          <span className="text-[#9cee69] font-semibold"> global compliance standards</span>.
        </p>

        {/* Professional Call-to-Action (CTA) */}
        <div className="flex flex-col sm:flex-row gap-6 mt-12 w-full sm:w-auto">
          {/* Primary: The Big Action (Yellow) */}
          <NavLink
            to="/about"
            className="px-12 py-5 bg-yellow-500 hover:bg-yellow-600 text-black font-black rounded-xl 
                       transition-all duration-300 shadow-xl shadow-yellow-500/10 flex items-center justify-center gap-3 group"
          >
            OUR SERVICES
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </NavLink>

          {/* Secondary: Team/Expertise (Lime Border) */}
          <NavLink
            to="/team"
            className="px-12 py-5 bg-transparent border-2 border-[#9cee69]/40 hover:border-[#9cee69] text-[#9cee69] 
                       hover:bg-[#9cee69]/5 font-black rounded-xl transition-all duration-300 flex items-center justify-center"
          >
            MEET THE EXPERTS
          </NavLink>
        </div>

        {/* Bottom Trust Indicators (Optional but highly professional) */}
        <div className="mt-20 pt-10 border-t border-white/5 w-full flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> <span className="font-bold tracking-widest text-sm">ACCURACY</span></div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#9cee69]"></div> <span className="font-bold tracking-widest text-sm">HIPAA COMPLIANT</span></div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> <span className="font-bold tracking-widest text-sm">24/7 SUPPORT</span></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
