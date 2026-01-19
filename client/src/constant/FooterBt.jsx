import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, Activity } from "lucide-react"; // Professional icons
import Logo from "../assets/logo/hori.png"

const FooterBT = () =>
{
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      const currentScrollY = window.scrollY;
      // Professional behavior: Hide on scroll down, show on scroll up
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

  // Unified Background Logic for Corporate Consistency
  const getFooterStyles = () =>
  {
    return "bg-[#0a0a0b]/90 backdrop-blur-md border-t border-white/10";
  };

  return (
    <footer
      className={`
        ${getFooterStyles()} hidden md:block text-white py-3 w-full fixed bottom-0 left-0 z-50
        transform transition-all duration-500 ease-in-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">

        {/* Brand Side */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-black tracking-[0.2em] uppercase hover:text-yellow-500 transition-colors duration-300"
          >
            <img src={Logo} alt="Evolve Vue" className="inline-block w-32 " />
          </Link>

          <div className="h-4 w-[1px] bg-white/20"></div> {/* Separator */}


        </div>

        {/* Professional Contact Grid */}
        <div className="flex items-center gap-8">

          {/* Location */}
          <div className="flex items-center gap-3 group">
            <MapPin size={16} className="text-yellow-500 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">Office</span>
              <span className="text-[11px] font-medium text-gray-200">Lalitpur, Nepal</span>
            </div>
          </div>

          {/* Phone */}
          <a href="tel:+9779851174646" className="flex items-center gap-3 group">
            <Phone size={16} className="text-yellow-500 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">Direct</span>
              <span className="text-[11px] font-medium text-gray-200">+977 9851174646</span>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:evolvevue25@gmail.com" className="flex items-center gap-3 group">
            <Mail size={16} className="text-yellow-500 group-hover:scale-110 transition-transform" />
            <div className="flex flex-col">
              <span className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter">Support</span>
              <span className="text-[11px] font-medium text-gray-200">evolvevue25@gmail.com</span>
            </div>
          </a>

          {/* Secondary Action: Timezone / Availability */}
          <div className="ml-4 px-4 py-1.5 bg-[#9cee69]/10 border border-[#9cee69]/20 rounded-lg">
            <span className="text-[#9cee69] text-[10px] font-black uppercase tracking-widest">
              24/7 Global Support
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterBT;