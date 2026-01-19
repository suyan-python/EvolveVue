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
    { to: "/application", label: "Apply for Job", isButton: true },
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
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "py-3 bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-2xl"
          : "py-5 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo with subtle hover glow */}
          <Link to="/" className="hover:opacity-90 transition-opacity">
            <img src={Logo} alt="Evolve Vue" className="w-36 sm:w-44 lg:w-48" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={link.isButton ? "" : getActiveClass}
                end={!link.isButton}
              >
                {link.isButton ? (
                  <button className="
  px-6 py-2.5
  rounded-full
  border border-yellow-500/60
  text-yellow-400
  font-semibold
  tracking-wide
  hover:bg-yellow-500/10
  hover:border-yellow-400
  transition-all duration-300
">
                    {link.label}
                  </button>

                ) : (
                  link.label
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Toggle - Professional Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-yellow-500 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="w-8 space-y-2">
                <span className={`block h-0.5 w-8 bg-current transform transition duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition duration-500 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-8 bg-current transform transition duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          } md:hidden`}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              onClick={() => toggleMenu()}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 text-3xl font-bold"
                  : "text-gray-400 text-2xl hover:text-white transition"
              }
              end={!link.isButton}
            >
              {link.isButton ? (
                <button className="
  px-10 py-4
  rounded-full
  border border-yellow-500
  text-yellow-400
  font-semibold text-xl
  tracking-wide
  hover:bg-yellow-500/10
  transition-all
">
                  {link.label}
                </button>

              ) : (
                link.label
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
