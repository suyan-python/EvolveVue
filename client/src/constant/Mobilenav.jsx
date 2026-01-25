import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Users, Phone, Info } from "lucide-react";
import { motion } from "framer-motion";

const MobileNav = () =>
{
    const location = useLocation();

    const navItems = [
        { label: "Home", path: "/", icon: <Home size={20} /> },
        { label: "Services", path: "/services", icon: <Briefcase size={20} /> },
        { label: "Careers", path: "/application", icon: <Users size={20} /> },
        { label: "About", path: "/about", icon: <Info size={20} /> },
        { label: "Contact", path: "/contact", icon: <Phone size={20} /> },
    ];

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-[#0b0e14]/95 backdrop-blur-2xl border-t border-white/10 z-[100] md:hidden shadow-2xl">
            {/* Brand Accent Top Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5"></div>

            <div className="flex justify-around items-center h-16 px-1">
                {navItems.map((item) =>
                {
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="relative flex flex-col items-center justify-center w-full h-full"
                        >
                            {/* --- 1. Architectural Active Indicator (Sharp Box) --- */}
                            {isActive && (
                                <motion.div
                                    layoutId="mobileActive"
                                    className="absolute inset-0 bg-white/[0.03] border-x border-white/5"
                                />
                            )}

                            {/* --- 2. Top Status Bar --- */}
                            <div
                                className={`absolute top-0 w-8 h-[2px] transition-all duration-500 
                ${isActive ? "bg-[#d6b25e] shadow-[0_0_12px_#d6b25e]" : "bg-transparent"}`}
                            />

                            {/* --- 3. Icon Container --- */}
                            <div
                                className={`relative z-10 transition-all duration-300 ${isActive ? "text-[#d6b25e]" : "text-gray-600"
                                    }`}
                            >
                                {item.icon}

                                {/* Verification Pulse - Only on Active */}
                                {isActive && (
                                    <span className="absolute -top-1 -right-1 flex h-1.5 w-1.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d6b25e] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d6b25e]"></span>
                                    </span>
                                )}
                            </div>

                            {/* --- 4. Technical Label --- */}
                            <span
                                className={`text-[9px] font-black mt-2 uppercase tracking-[0.2em] transition-colors duration-300 
                ${isActive ? "text-white" : "text-gray-600"}`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileNav;