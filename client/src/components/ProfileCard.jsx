import React from "react";
import { motion } from "framer-motion";

const ProfileCard = React.memo(({ person, isLarge = false }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`group relative bg-[#12171f] p-4 rounded-[2rem] border border-white/5 transition-all duration-500 hover:border-[#9cee69]/30 
    ${isLarge ? "max-w-md w-full" : "w-full"}`}
    >
        {/* Identity Header: The "Status Bar" */}
        <div className="flex justify-between items-center mb-4 px-2">
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#9cee69] animate-pulse"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
            </div>
            <span className="text-[8px] font-black text-gray-500 uppercase tracking-[0.3em]">
                Archive: {new Date().getFullYear()}
            </span>
        </div>

        {/* The Inset Image Frame */}
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0b0e14]">
            <div className={`relative overflow-hidden transition-all duration-700 ease-in-out group-hover:scale-105 ${isLarge ? "aspect-[4/5]" : "aspect-[3/4]"}`}>
                <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-700"
                />

                {/* The "Scanner" Overlay: A subtle light bar that moves on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#9cee69]/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>
            </div>

            {/* Floating Badge: Staggered Role */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/80 to-transparent">
                <p className="text-[#9cee69] text-[10px] font-black uppercase tracking-[0.4em] mb-1">
                    {person.role}
                </p>
            </div>
        </div>

        {/* Content Area: Minimalist & Clean */}
        <div className="pt-6 pb-2 px-2">
            <div className="flex items-start justify-between">
                <div>
                    <h3 className={`font-bold text-white tracking-tighter leading-none ${isLarge ? "text-3xl" : "text-xl"}`}>
                        {person.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-4">
                        <div className="w-4 h-[1px] bg-yellow-500/50 group-hover:w-8 group-hover:bg-yellow-500 transition-all duration-500"></div>
                        <p className="text-gray-500 text-[9px] uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                            Medical Systems Lead
                        </p>
                    </div>
                </div>

                {/* Decorative "Data" Element */}
                <div className="hidden sm:block text-right">
                    <p className="text-[8px] font-mono text-gray-700 uppercase">Verification</p>
                    <p className="text-[10px] font-mono text-[#9cee69]/40 font-bold tracking-tighter">EV-00{Math.floor(Math.random() * 99)}</p>
                </div>
            </div>
        </div>
    </motion.div>
));

export default ProfileCard;