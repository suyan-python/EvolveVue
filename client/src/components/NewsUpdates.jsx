import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Chart from "./Chart";

const NewsUpdates = () =>
{
  const [expanded, setExpanded] = useState(null);

  const updates = [
    {
      id: 1,
      category: "Strategic Partnership",
      date: "JAN 2026",
      title: "Global Hospital Network Expansion",
      brief: "Strategic integration with tier-1 international healthcare providers.",
      content: "This collaboration establishes Evolve Vue as a primary documentation partner for global clinical networks, ensuring HIPAA-certified data flow across borders."
    },
    {
      id: 2,
      category: "Human Capital",
      date: "DEC 2025",
      title: "Scaling Operations: Q1 Recruitment",
      brief: "Open positions for Medical Scribes and Data Analysts.",
      content: "To meet the rising demand for tele-health documentation, we are expanding our clinical division by 40% in the upcoming fiscal quarter."
    },
    {
      id: 3,
      category: "Security Protocol",
      date: "NOV 2025",
      title: "Next-Gen Encryption Deployment",
      brief: "Upgrading to military-grade security for patient data integrity.",
      content: "Implementation of multi-layer biometric authentication and AI-driven threat detection protocols to exceed GDPR and HIPAA requirements."
    }
  ];

  return (
    <section className="relative py-16 bg-[#0b0e14] overflow-hidden">
      {/* Background Structural Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0h1v40H0zM0 0h40v1H0z' fill='%23ffffff'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* --- SECTION HEADER --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-[#d6b25e]"></div>
            <span className="text-[10px] font-bold text-[#d6b25e] uppercase tracking-[0.5em]">Corporate Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
            Insights <span className="text-gray-500 italic font-serif">&</span> Updates.
          </h2>
        </div>

        {/* --- NEWS LEDGER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-4">
            {updates.map((item) => (
              <div
                key={item.id}
                className="group bg-[#121212] border border-white/5 rounded-md transition-all duration-500 hover:border-[#d6b25e]/30 overflow-hidden"
              >
                <div
                  className="p-8 cursor-pointer flex justify-between items-center"
                  onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                >
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-[9px] font-black text-[#d6b25e] tracking-[0.2em] uppercase">{item.category}</span>
                      <span className="text-[9px] font-bold text-gray-600 tracking-widest">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#d6b25e] transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm mt-2">{item.brief}</p>
                  </div>
                  <div className={`text-[#d6b25e] transition-transform duration-500 ${expanded === item.id ? 'rotate-180' : ''}`}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <div className="pt-6 border-t border-white/5">
                        <p className="text-gray-400 text-sm leading-relaxed">{item.content}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* --- PERFORMANCE ANALYTICS (The Chart) --- */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 p-10 bg-[#121212] border border-white/5 border-l-4 border-l-[#d6b25e] rounded-md">
              <h4 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8">Performance Analytics</h4>
              <h3 className="text-2xl font-bold text-white mb-4">Workforce Growth</h3>
              <p className="text-gray-500 text-sm mb-10 leading-relaxed">
                Visualizing our institutional expansion. This data reflects our increasing capacity to handle high-volume clinical documentation requests globally.
              </p>

              <div className="bg-[#0b0e14] p-6 rounded border border-white/5 shadow-inner">
                <Chart />
              </div>

              <div className="mt-10 pt-10 border-t border-white/5 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl tracking-tight">2026 Focus</span>
                  <span className="text-[10px] text-[#d6b25e] font-black tracking-widest uppercase">Scalability & Precision</span>
                </div>
                <button className="px-6 py-3 border border-[#d6b25e]/30 text-[#d6b25e] text-[10px] font-black tracking-widest uppercase hover:bg-[#d6b25e] hover:text-black transition-all">
                  Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsUpdates;