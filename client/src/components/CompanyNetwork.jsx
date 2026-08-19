import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import vudevi from "../assets/logo/companies/vudevi.png";
import evolve from "../assets/logo/companies/evolve.png";
import jhp from "../assets/logo/companies/jhp.png";
import jhcb from "../assets/logo/companies/jhcb.webp";
import inaya from "../assets/logo/companies/inaya.png";

const companies = [
    {
        id: "vudevi",
        name: "Vu Devi",
        category: "Digital & Technology",
        logo: vudevi,
        url: "https://vudevi.com.np",
    },
    {
        id: "evolve-vue",
        name: "Evolve Vue",
        category: "Medical BPO & Clinical Support",
        logo: evolve,
        url: "/",
    },
    {
        id: "jhp",
        name: "JHP",
        category: "Specialty Coffee",
        logo: jhp,
        url: "https://jewelhimalayanproducts.com",
    },
    {
        id: "jhcb",
        name: "JHCB",
        category: "Nepali Coffee Beans",
        logo: jhcb,
        url: "https://jewelhimalayanproducts.com/nepal-coffee-beans",
    },
    {
        id: "inaya",
        name: "iNaya",
        category: "Café & Hospitality",
        logo: inaya,
        url: "https://jewelhimalayanproducts.com/inaya-cafe",
    },
];

export default function CompanyNetwork({
    currentCompany = "evolve-vue",
})
{
    return (
        <section className="relative w-full pb-28 md:pb-36 overflow-hidden text-white">
            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="max-w-3xl mb-14 md:mb-20">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-12 h-[1px] bg-[#d6b25e]" />

                        <span className="text-[10px] font-bold text-[#d6b25e] uppercase tracking-[0.5em]">
                            Our Network
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tighter"
                    >
                        Our Group of{" "}
                        <span className="text-gray-500 font-light">
                            Companies
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mt-4 md:mt-8 max-w-2xl text-xs md:text-base text-gray-400 leading-relaxed"
                    >
                        A diverse ecosystem of businesses built across technology,
                        healthcare, specialty coffee, and hospitality — each operating
                        with its own expertise and identity.
                    </motion.p>
                </div>

                {/* COMPANY LIST */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">

                    {companies.map((company, index) =>
                    {
                        const isActive = currentCompany === company.id;

                        return (
                            <motion.a
                                key={company.id}
                                href={company.url}
                                target={
                                    company.url.startsWith("https")
                                        ? "_blank"
                                        : undefined
                                }
                                rel={
                                    company.url.startsWith("https")
                                        ? "noopener noreferrer"
                                        : undefined
                                }
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                className={`
                    group relative
                    min-h-[280px]
                    sm:min-h-[300px]
                    lg:min-h-[360px]
                    overflow-hidden
                    rounded-md
                    border
                    transition-all duration-500 
                    ${isActive
                                        ? "border-[#d6b25e]/50"
                                        : "border-white/10 hover:border-white/20 "
                                    }
                `}
                            >

                                {/* LOGO BACKGROUND */}
                                <div
                                    className="
                        absolute inset-0
                        flex items-start justify-center pt-14
                        transition-all duration-700
                        group-hover:scale-105
                    "
                                >
                                    <img
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        className={`
                            w-full
                            max-w-[180px]
                            max-h-[150px]
                            object-contain
                            transition-all duration-700
                            ${isActive
                                                ? "opacity-40 grayscale-0"
                                                : "opacity-80 group-hover:opacity-90"
                                            }
                        `}
                                    />
                                </div>

                                {/* DARK OVERLAY */}
                                <div
                                    className={`
                        absolute inset-0
                        transition-all duration-500
                        ${isActive
                                            ? "bg-black/40"
                                            : "bg-black/30 group-hover:bg-black/60"
                                        }
                    `}
                                />

                                {/* SUBTLE GRADIENT */}
                                <div
                                    className="
                        absolute inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/20
                        to-transparent
                        opacity-90
                    "
                                />

                                {/* NUMBER */}
                                <div className="absolute top-5 left-5">
                                    <span
                                        className={`
                            text-[9px]
                            font-bold
                            tracking-[0.3em]
                            transition-colors duration-300
                            ${isActive
                                                ? "text-[#d6b25e]"
                                                : "text-gray-600 group-hover:text-gray-400"
                                            }
                        `}
                                    >
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* ACTIVE INDICATOR */}
                                {isActive && (
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#d6b25e]" />
                                )}

                                {/* CONTENT */}
                                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">

                                    {/* CATEGORY */}
                                    <p
                                        className="
                            mb-2
                            text-[7px]
                            md:text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-[#d6b25e]
                        "
                                    >
                                        {company.category}
                                    </p>

                                    {/* COMPANY NAME */}
                                    <h3
                                        className={`
                            text-base
                            md:text-2xl
                            font-medium
                            tracking-tight
                            leading-tight
                            transition-colors duration-300
                            ${isActive
                                                ? "text-white"
                                                : "text-gray-300 group-hover:text-white"
                                            }
                        `}
                                    >
                                        {company.name}
                                    </h3>

                                    {/* BOTTOM ROW */}
                                    <div className="flex items-center justify-between mt-2 md:mt-5 pt-1 md:pt-4 border-t border-white/10">

                                        <span
                                            className="
                                            font-bold
                                text-[7px]
                                            md:text-[8px]
                                uppercase
                                tracking-[0.25em]
                                text-gray-600
                                group-hover:text-gray-400
                                transition-colors
                            "
                                        >
                                            {isActive ? "Current Company" : "Explore"}
                                        </span>

                                        <div
                                            className={`
                                w-4 md:w-8 h-4 md:h-8
                                rounded-full
                                border
                                flex items-center justify-center
                                transition-all duration-500
                                ${isActive
                                                    ? "border-[#d6b25e]/60 text-[#d6b25e]"
                                                    : "border-white/10 text-gray-500 group-hover:border-[#d6b25e]/50 group-hover:text-[#d6b25e]"
                                                }
                            `}
                                        >
                                            <ArrowUpRight
                                                size={14}
                                                strokeWidth={1.5}
                                                className="
                                    transition-transform
                                    duration-500
                                    group-hover:translate-x-0.5
                                    group-hover:-translate-y-0.5
                                "
                                            />
                                        </div>

                                    </div>

                                </div>

                            </motion.a>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}