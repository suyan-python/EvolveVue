import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo/hori.png";

import { useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toggleMenu(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Who We Are" },
    { to: "/services", label: "Services" },
    { to: "/team", label: "Our Team" },
    { to: "/events", label: "Our Events" },
    { to: "/contact", label: "Contact" },
    { to: "/application", label: "Careers", isButton: true },
  ];

  // const getActiveClass = ({ isActive }) =>
  //   isActive
  //     ? "text-[#d4af37] font-extrabold tracking-wide"
  //     : "text-white hover:text-[#d4af37]";

  const getActiveClass = ({ isActive }) =>
    isActive
      ? "yellowText font-bold border-b-2 border-yellow-500 pb-1 transition-all"
      : "text-gray-300 hover:text-yellow-500 transition-all duration-300  ";

  return (
    <>
      {/* Navbar Container */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "py-3 bg-[#0a0a0b]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Area - Enhanced with subtle glow */}
          <Link
            to="/"
            className="relative group transition-transform duration-500 hover:scale-105"
          >
            <img
              src={Logo}
              alt="Evolve Vue"
              className="w-36 sm:w-44 lg:w-48 drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={
                  link.isButton
                    ? ""
                    : ({ isActive }) =>
                        `text-[11px]  uppercase tracking-[0.25em] transition-all duration-300 relative group
              ${isActive ? "yellowText font-black " : "text-gray-400 hover:text-white "}`
                }
                end={!link.isButton}
              >
                {link.isButton ? (
                  <button
                    className="
                px-8 py-2.5
                rounded-lg
                
                text-black
                text-[10px]
                font-black
                uppercase
                tracking-[0.2em]
                bg-green
                hover:shadow-[0_0_20px_rgba(156,238,105,0.3)]
                transition-all duration-500
                active:scale-95
                cursor-pointer
              "
                  >
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
                <span
                  className={`block h-0.5 bg-current transform transition-all duration-500 ${isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
                ></span>
                <span
                  className={`block h-0.5 bg-current transition-all duration-500 ${isMenuOpen ? "opacity-0" : "w-4 ml-auto"}`}
                ></span>
                <span
                  className={`block h-0.5 bg-current transform transition-all duration-500 ${isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`fixed inset-0 z-50 bg-[#0b0e14] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          isMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        {/* Background Grid */}
        <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-[0.035]" />

        {/* Subtle Gold Glow */}
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#d6b25e]/[0.04] blur-[100px]" />

        <div className="relative z-10 flex min-h-dvh flex-col px-6 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
              Evolve <span className="text-[#d6b25e]">Vue</span>
            </span>

            <button
              type="button"
              onClick={() => toggleMenu(false)}
              aria-label="Close navigation menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-[#d6b25e]/40 hover:text-[#d6b25e] active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex flex-1 flex-col justify-center ">
            <nav aria-label="Mobile navigation">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => toggleMenu(false)}
                    end={!link.isButton}
                    className={({ isActive }) =>
                      `group flex min-h-[68px] items-center justify-between border-b border-white/[0.07] py-4 transition-all duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-white/45 hover:text-white"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-5 sm:gap-7">
                          <span
                            className={`text-[10px] font-semibold tabular-nums transition-colors ${
                              isActive
                                ? "text-[#d6b25e]"
                                : "text-white/20 group-hover:text-[#d6b25e]/70"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span
                            className={`text-xl tracking-tight transition-all duration-300 sm:text-2xl ${
                              isActive
                                ? "font-semibold"
                                : "font-medium group-hover:translate-x-1"
                            }`}
                          >
                            {link.label}
                          </span>
                        </div>

                        {link.isButton ? (
                          <span className="rounded-sm bg-[#d6b25e] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#0b0e14] transition-all group-hover:bg-[#e5c778]">
                            Explore
                          </span>
                        ) : (
                          <span
                            className={`text-lg transition-all duration-300 ${
                              isActive
                                ? "translate-x-0 text-[#d6b25e] opacity-100"
                                : "-translate-x-2 text-white/20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                          >
                            →
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>

          {/* Footer */}
          <div className="border-t border-white/[0.08] pt-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/30">
                  Precision in every detail.
                </p>
                <p className="mt-1 text-[10px] text-white/20">
                  Evolve Vue Pvt. Ltd.
                </p>
              </div>

              <span className="h-1.5 w-1.5 rounded-full bg-[#d6b25e] shadow-[0_0_10px_#d6b25e]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
