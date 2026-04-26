import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const CompactCard = React.memo(({ member, delay = 0 }) =>
{
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.3, delay }}
            className="group bg-[#121212] border border-white/5 p-4 rounded-sm 
                 hover:border-[#d6b25e]/40 transition-colors duration-300"
            style={{ contentVisibility: "auto" }}
        >
            <div className="flex items-center gap-4">

                {/* Avatar */}
                {/* <div className="w-12 h-12 overflow-hidden rounded-full bg-[#0b0e14] border border-white/10 flex-shrink-0">
                    <img
                        src={member.image || "/fallback-avatar.png"}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover 
                       transition-transform duration-300 ease-out 
                       group-hover:scale-105"
                        style={{ willChange: "transform" }}
                    />
                </div> */}

                {/* Info */}
                <div className="min-w-0">
                    <h4 className="text-white text-sm font-bold tracking-tight truncate">
                        {member.name}
                    </h4>
                    <p className="text-[#d6b25e] text-[9px] font-black uppercase tracking-widest truncate">
                        {member.role}
                    </p>
                </div>

            </div>
        </motion.div>
    );
});

export default CompactCard;