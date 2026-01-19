import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaArrowUp } from "react-icons/fa";
import Logo from "../assets/logo/hori.png"

function Footer()
{
  // Scroll to top function for better UX
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#0a0a0b] text-white pt-24 pb-32 w-full relative overflow-hidden border-t border-white/5">
      {/* Subtle Branding Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Column 1: Brand & Vision */}
          <div className="lg:col-span-1">
            <img src={Logo} alt="Evolve Vue" className="w-40 mb-8" />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Precision-driven medical documentation and BPO solutions.
              Bridging the gap between clinical excellence and operational efficiency since 2025.
            </p>
            <div className="flex gap-4">
              {[FaFacebookF, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '')}`}
                    className="text-gray-400 hover:text-[#9cee69] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-[#9cee69] group-hover:w-4 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-500 mb-8">Global Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex flex-col">
                <span className="text-[10px] uppercase text-gray-600 font-bold tracking-tighter">Email</span>
                <a href="mailto:evolvevue25@gmail.com" className="hover:text-white transition-colors">evolvevue25@gmail.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] uppercase text-gray-600 font-bold tracking-tighter">Contact</span>
                <a href="tel:+9779851174646" className="hover:text-white transition-colors">+977 9851174646</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] uppercase text-gray-600 font-bold tracking-tighter">Headquarters</span>
                <span>Balkumari-Gwarko, Lalitpur, Nepal</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Trust */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#9cee69] mb-4">Operations Status</h4>
            <p className="text-[11px] text-gray-500 mb-4 leading-normal">
              Our clinical and clerical divisions operate 24/7 to ensure zero-lag documentation delivery.
            </p>
            <button
              onClick={scrollToTop}
              className="w-full py-3 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-xl text-xs font-bold hover:bg-yellow-500 hover:text-black transition-all flex items-center justify-center gap-2"
            >
              Back to Top <FaArrowUp size={10} />
            </button>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[11px] font-medium tracking-wide">
            &copy; {new Date().getFullYear()} EVOLVE VUE PRIVATE LIMITED. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[11px] font-bold text-gray-600 tracking-widest uppercase">
            <span className="hover:text-[#9cee69] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#9cee69] cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-[#9cee69] cursor-pointer transition-colors">HIPAA Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;