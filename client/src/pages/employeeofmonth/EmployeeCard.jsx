import React from "react";
import { motion } from "framer-motion";
import CelebrationEffect from "./CelebrationEffect";

const EmployeeCard = ({
  image,
  name,
  designation,
  department,
  month,
  year,
  focus,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#12171f] transition-all duration-500 hover:border-yellow-500/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    >
      <CelebrationEffect />

      {/* Larger Photo Section */}
      <div className="relative aspect-[4/4.5] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Department Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#12171f] via-[#12171f]/40 to-transparent px-4 pb-4 pt-12">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9cee69]">
            {department}
          </p>
        </div>
      </div>

      {/* Compact Text Section */}
      <div className="space-y-3 p-4 pt-3 sm:p-5 sm:pt-3">
        <div>
          <h3 className="text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-[#d6b25e] sm:text-xl">
            {name}
          </h3>

          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-gray-500 sm:text-xs">
            {designation}
          </p>
        </div>

        {/* Compact Expertise */}
        <div className="border-t border-white/10 pt-3">
          <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            Core Domain Focus
          </p>

          <p className="line-clamp-2 text-xs leading-relaxed text-gray-400">
            {focus}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EmployeeCard;
