import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo/hori.png";

function Navbar()
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const getActiveClass = ({ isActive }) =>
    isActive
      ? "text-[#d4af37] font-extrabold tracking-wide"
      : "text-white hover:text-[#d4af37]";

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-500">
        <div
          className={`mx-auto w-full max-w-full py-3 font-medium transition-all duration-500 ${isScrolled
              ? "px-6 bg-black/60 backdrop-blur-xl border-b border-[#9cee69]/40 shadow-lg"
              : "px-6"
            }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/">
              <img src={Logo} alt="evolve vue" className="w-40" />
            </Link>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-[#d4af37] transition"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className={getActiveClass}
                  end={!link.isButton}
                >
                  {link.isButton ? (
                    <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#9cee69] to-[#d4af37] text-black font-semibold shadow-md hover:scale-105 transition">
                      {link.label}
                    </button>
                  ) : (
                    link.label
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black text-white 
        transform transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col items-center justify-center z-40`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-gray-300 hover:text-[#d4af37] text-3xl"
        >
          ✖
        </button>

        {/* Links */}
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#d4af37] text-xl font-bold"
                  : "text-gray-300 text-xl hover:text-[#d4af37] transition"
              }
              end={!link.isButton}
            >
              {link.isButton ? (
                <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9cee69] to-[#d4af37] text-black font-semibold shadow-lg hover:scale-105 transition">
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
