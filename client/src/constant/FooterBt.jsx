import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "../assets/logo/hori.png";

const FooterBT = () =>
{
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      const currentScrollY = window.scrollY;
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100)
      {
        setIsVisible(false);
      } else
      {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <footer
      className={`
        fixed bottom-0 left-0 w-full z-50 hidden md:block
        bg-[#0b0e14]/90 backdrop-blur-xl border-t border-white/10
        transform transition-all duration-700 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >
      {/* Top Accent Line (Brand Identity) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d6b25e]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* --- BRAND SECTION --- */}
        <div className="flex items-center gap-6">
          <Link to="/" className="group">
            <img
              src={Logo}
              alt="Evolve Vue"
              className="w-32 brightness-90 group-hover:brightness-110 transition-all"
            />
          </Link>
          <div className="h-6 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#d6b25e] animate-pulse"></div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
              Operational
            </span>
          </div>
        </div>

        {/* --- DATA CHANNELS (Contact) --- */}
        <div className="flex items-center gap-10">

          {/* Location Ledger */}
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-[8px] font-black uppercase tracking-widest">Region</span>
              <MapPin size={10} className="text-[#d6b25e]" />
            </div>
            <span className="text-[11px] font-bold text-white tracking-tight">Lalitpur, NP</span>
          </div>

          {/* Contact Protocol */}
          <a href="tel:+9779851174646" className="flex flex-col items-end group">
            <div className="flex items-center gap-2 text-gray-500 group-hover:text-[#d6b25e] transition-colors">
              <span className="text-[8px] font-black uppercase tracking-widest">Secure Line</span>
              <Phone size={10} />
            </div>
            <span className="text-[11px] font-bold text-white tracking-tight">+977 9851174646</span>
          </a>

          {/* Email Channel */}
          <a href="mailto:evolvevue25@gmail.com" className="flex flex-col items-end group">
            <div className="flex items-center gap-2 text-gray-500 group-hover:text-[#d6b25e] transition-colors">
              <span className="text-[8px] font-black uppercase tracking-widest">Mail</span>
              <Mail size={10} />
            </div>
            <span className="text-[11px] font-bold text-white tracking-tight">evolvevue25@gmail.com</span>
          </a>

          {/* Institutional Badge */}
          <div className="ml-6 px-4 py-2 bg-white/5 border border-white/10 rounded-sm">
            <p className="text-[#d6b25e] text-[9px] font-black uppercase tracking-[0.2em]">
              Global 24/7 Deployment
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterBT;