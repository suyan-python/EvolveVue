import React from 'react';
import { Link } from "react-router-dom";
import { FaArrowUp, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "../assets/logo/hori.png";

function Footer()
{
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0b0e14] text-white pt-24 pb-12 w-full relative overflow-hidden border-t border-white/10">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0h1v40H0zM0 0h40v1H0z' fill='%23ffffff'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">

          {/* Column 1: Institutional Identity (4 Cols) */}
          <div className="md:col-span-4 lg:col-span-5">
            <img src={Logo} alt="Evolve Vue" className="w-48 mb-8 opacity-90" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm font-medium">
              Evolve Vue Private Limited is a specialized BPO institution providing high-fidelity clinical documentation and global administrative support.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#d6b25e] hover:border-[#d6b25e] transition-all duration-500">
                <FaLinkedinIn size={14} />
              </a>
              <a href="mailto:evolvevue25@gmail.com" className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#d6b25e] hover:border-[#d6b25e] transition-all duration-500">
                <FaEnvelope size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation (2 Cols) */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d6b25e] mb-8">Sitemap</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Team', 'Careers'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-0 h-[1px] bg-[#d6b25e] group-hover:w-3 transition-all"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Global Support (3 Cols) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#d6b25e] mb-8">Contact Protocol</h4>
            <div className="space-y-6">
              <div className="group cursor-default">
                <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">Direct Line</p>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors">+977 9851174646</p>
              </div>
              <div className="group cursor-default">
                <p className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1">HQ Location</p>
                <p className="text-sm text-gray-400 group-hover:text-white transition-colors leading-snug">
                  Balkumari-Gwarko,<br />Lalitpur, Nepal
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Operational Status (3 Cols) */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="p-8 bg-[#121212] border border-white/5 border-l-2 border-l-[#d6b25e] rounded-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d6b25e] animate-pulse"></span>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-white">System Status</h4>
              </div>
              <p className="text-[11px] text-gray-500 mb-6 leading-relaxed">
                24/7 Clinical & Clerical operations are active. Global data pipelines are secure.
              </p>
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-3 text-[10px] font-black text-[#d6b25e] uppercase tracking-[0.2em] hover:text-white transition-colors"
              >
                Back to <span className="typcn typcn-lock-open-outline"></span> <FaArrowUp size={10} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* --- BOTTOM LEGAL BAR --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase">
              © {new Date().getFullYear()} EVOLVE VUE PVT. LTD.
            </p>
            <div className="hidden md:block w-[1px] h-3 bg-white/10"></div>
            <p className="text-gray-700 text-[9px] font-bold tracking-widest uppercase">
              Clinical Documentation & BPO Specialist
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black text-gray-600 tracking-[0.2em] uppercase">
            <span className="hover:text-[#d6b25e] cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-[#d6b25e] cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-[#d6b25e] cursor-pointer transition-colors">HIPAA Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;