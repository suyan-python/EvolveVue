import React from "react";
import { Award, ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const EmployeeCard = ({ image, name, designation, department, month, year, focus }) =>
{
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#12171f] border border-white/5 rounded-[2rem] p-6 transition-all duration-500 hover:border-yellow-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        >
            {/* Corner Badge: The Month/Year */}
            <div className="absolute z-10 top-4 right-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">
                    {month} {year}
                </span>
            </div>

            {/* Photo Container */}
            <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-2xl border border-white/10">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Department Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0b0e14] to-transparent">
                    <p className="text-[9px] font-black text-[#9cee69] uppercase tracking-[0.3em]">
                        {department}
                    </p>
                </div>
            </div>

            {/* Identity Details */}
            <div className="space-y-4">
                <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                        {name}
                    </h3>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-1">
                        {designation}
                    </p>
                </div>

                {/* Creative Detail: The "Expertise Node" */}
                <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span className="text-[9px] font-black text-white uppercase tracking-widest">Core Domain Focus</span>
                    </div>
                    <p className="text-gray-400 text-[13px] leading-relaxed italic">
                        "{focus}"
                    </p>
                </div>

                {/* Footer: Institutional Cue */}
                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={12} className="text-yellow-500/50" />
                        <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest">Verified Excellence</span>
                    </div>
                    <ChevronRight size={14} className="text-gray-700 group-hover:text-yellow-500 transform group-hover:translate-x-1 transition-all" />
                </div>
            </div>
        </motion.div>
    );
};

export default EmployeeCard;