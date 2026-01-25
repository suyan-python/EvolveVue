import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo/hori.png";

import { useLocation } from "react-router-dom";



function Navbar()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() =>
  {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () =>
  {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Evolve" },
    { to: "/team", label: "Our Team" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
    { to: "/application", label: "Careers", isButton: true },
  ];

  // const getActiveClass = ({ isActive }) =>
  //   isActive
  //     ? "text-[#d4af37] font-extrabold tracking-wide"
  //     : "text-white hover:text-[#d4af37]";

  const getActiveClass = ({ isActive }) =>
    isActive
      ? "text-yellow-500 font-bold border-b-2 border-yellow-500 pb-1 transition-all"
      : "text-gray-300 hover:text-yellow-500 transition-all duration-300 font-medium";

  return (
    <>
      {/* Navbar Container */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled
          ? "py-3 bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          : "py-6 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo Area - Enhanced with subtle glow */}
          <Link to="/" className="relative group transition-transform duration-500 hover:scale-105">
            <img src={Logo} alt="Evolve Vue" className="w-36 sm:w-44 lg:w-48 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={link.isButton ? "" : ({ isActive }) =>
                  `text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-300 relative group
              ${isActive ? "text-yellow-500" : "text-gray-400 hover:text-white"}`
                }
                end={!link.isButton}
              >
                {link.isButton ? (
                  <button className="
                px-8 py-2.5
                rounded-lg
                yellow
                text-black
                text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                hover:bg-[#9cee69]
                hover:shadow-[0_0_20px_rgba(156,238,105,0.3)]
                transition-all duration-500
                active:scale-95
                cursor-pointer
              ">
                    {link.label}
                  </button>
                ) : (
                  <>
                    {link.label}
                    {/* Underline Indicator */}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle - Professional Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-yellow-500 focus:outline-none bg-white/5 rounded-lg border border-white/10"
              aria-label="Toggle Menu"
            >
              <div className="w-6 space-y-1.5">
                <span className={`block h-0.5 bg-current transform transition-all duration-500 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'w-4 ml-auto'}`}></span>
                <span className={`block h-0.5 bg-current transform transition-all duration-500 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Full Screen Dark Tech Vibe */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0b] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          } md:hidden`}
      >
        {/* Background Glows for Mobile Menu */}
        <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-[#9cee69]/5 rounded-full blur-[80px]"></div>

        <div className="flex flex-col items-center gap-12 relative z-10">
          <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.5em] mb-4">Directory</p>

          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              onClick={() => toggleMenu()}
              className={({ isActive }) =>
                `transition-all duration-300 ${isActive
                  ? "text-yellow-500 text-4xl font-black tracking-tighter"
                  : "text-gray-400 text-3xl font-bold hover:text-white"
                }`
              }
              end={!link.isButton}
            >
              {link.isButton ? (
                <button className="
              px-12 py-5
              rounded-2xl
              bg-yellow-500
              text-black
              font-black text-lg
              uppercase
              tracking-widest
              shadow-xl shadow-yellow-500/20
              active:scale-95
            ">
                  {link.label}
                </button>
              ) : (
                link.label
              )}
            </NavLink>
          ))}
        </div>

        {/* Footer Detail for Mobile Menu */}
        <div className="absolute bottom-12 flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#9cee69] rounded-full animate-pulse"></div>
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Secure HIPAA Access</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
