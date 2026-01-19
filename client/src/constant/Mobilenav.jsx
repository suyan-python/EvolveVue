import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Users, Phone, LayoutDashboard, Info } from "lucide-react";

const MobileNav = () =>
{
    const location = useLocation();

    const navItems = [
        { label: "Home", path: "/", icon: <Home size={22} /> },
        { label: "Services", path: "/services", icon: <Briefcase size={22} /> },
        { label: "Careers", path: "/application", icon: <Users size={22} /> },
        { label: "About", path: "/about", icon: <Info size={22} /> },
        { label: "Contact", path: "/contact", icon: <Phone size={22} /> },

    ];

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 z-[100] md:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
            <div className="flex justify-around items-center h-20 pb-2 px-2">
                {navItems.map((item) =>
                {
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="relative flex flex-col items-center justify-center w-full h-full transition-all duration-300"
                        >
                            {/* --- The Thumb Zone Indicator (Top Bar) --- */}
                            <div className={`absolute top-0 w-10 h-1 rounded-b-full transition-all duration-500 
                                ${isActive ? "bg-yellow-500 shadow-[0_2px_10px_rgba(234,179,8,0.5)]" : "bg-transparent"}`}
                            />

                            {/* --- Icon with Brand Colors --- */}
                            <div className={`relative z-10 transition-all duration-300 transform ${isActive ? "text-yellow-500 -translate-y-1" : "text-gray-500"}`}>
                                {item.icon}

                                {/* Subtle Secondary Color Dot (Lime Green) - Shows 'System Online' feel */}
                                {isActive && (
                                    <span className="absolute -top-1 -right-1 flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9cee69] opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9cee69]"></span>
                                    </span>
                                )}
                            </div>

                            {/* --- Label --- */}
                            <span className={`text-[10px] font-bold mt-1.5 uppercase tracking-widest transition-colors duration-300 
                                ${isActive ? "text-white" : "text-gray-500"}`}>
                                {item.label}
                            </span>

                            {/* --- Professional Active Glow (eSewa Style) --- */}
                            {isActive && (
                                <div className="absolute inset-x-2 inset-y-2 bg-yellow-500/5 rounded-2xl -z-10" />
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileNav;