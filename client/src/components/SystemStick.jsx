import React from "react";
import { motion } from "framer-motion";
import { Activity, Shield, Zap, Database, CheckCircle2, Globe } from "lucide-react";

const SystemTicker = () =>
{
    const capabilities = [
        { label: "Medical Scribing", icon: <Activity size={14} /> },
        { label: "HIPAA Compliant", icon: <Shield size={14} /> },
        { label: "99.9% Accuracy Rate", icon: <CheckCircle2 size={14} /> },
        { label: "Clinical Audit", icon: <Database size={14} /> },
        { label: "Real-Time Sync", icon: <Zap size={14} /> },
        { label: "24/7 Operations", icon: <Globe size={14} /> },
        { label: "Data Integrity", icon: <Shield size={14} /> },
    ];

    // Duplicate the array to create a seamless loop
    const tickerItems = [...capabilities, ...capabilities];

    return (
        <div className="w-full bg-[#12171f] border-y border-white/5 py-3 overflow-hidden relative group mt-20">
            {/* Side Fades for Professional Depth */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0e14] to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0e14] to-transparent z-10"></div>

            <motion.div
                className="flex whitespace-nowrap gap-16 md:gap-24"
                animate={{
                    x: [0, -1000], // Adjust speed by changing the duration below
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {tickerItems.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-4 group/item transition-opacity duration-300"
                    >
                        {/* The "Active Node" Indicator */}
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-yellow-500 group-hover/item:border-yellow-500/50 group-hover/item:bg-yellow-500/10 transition-all">
                            {item.icon}
                        </div>

                        <span className="text-xs  font-black text-gray-500 uppercase tracking-[0.3em] group-hover/item:text-white transition-colors">
                            {item.label}
                        </span>

                        {/* Separator Element */}
                        <div className="ml-8 md:ml-12 flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-white/10"></div>
                            <div className="w-1 h-1 rounded-full bg-[#d6b25e]/40"></div>
                            <div className="w-1 h-1 rounded-full bg-white/10"></div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SystemTicker;