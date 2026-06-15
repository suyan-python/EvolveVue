import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { events } from "../data/events";

const EventsPreview = () =>
{

    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d6b25e]/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="inline-flex items-center gap-2 uppercase tracking-[0.35em] text-[10px] md:text-xs font-semibold text-[#d6b25e]">
                        <span className="w-2 h-2 rounded-full bg-[#d6b25e]" />
                        Life At Evolve Vue
                    </span>

                    <h2 className="mt-5 text-4xl md:text-6xl font-light text-white">
                        Events &
                        <span className="text-[#d6b25e]"> Experiences</span>
                    </h2>

                    <p className="mt-6 max-w-2xl mx-auto text-xs md:text-base text-zinc-400 leading-relaxed">
                        From professional development and collaborative meetings
                        to memorable social gatherings, explore the moments that
                        shape our culture and strengthen our team.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Large Featured Card */}
                    {events[0] && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-7"
                        >
                            <Link
                                to={`/events/${events[0].slug}`}
                                className="group block h-full"
                            >
                                <div className="relative overflow-hidden rounded-xl border border-white/10 h-[520px]">

                                    <img
                                        src={events[0].image}
                                        alt={events[0].title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                    <div className="absolute bottom-0 p-8 md:p-10">

                                        <span className="inline-flex px-3 py-1 rounded-full border border-[#d6b25e]/30 bg-[#d6b25e]/10 text-[#d6b25e] text-xs uppercase tracking-wider">
                                            Featured
                                        </span>

                                        <h3 className="text-3xl md:text-5xl text-white mt-4 font-light">
                                            {events[0].title}
                                        </h3>

                                        <p className="text-zinc-300 mt-4 max-w-xl">
                                            {events[0].description}
                                        </p>

                                        <div className="flex items-center justify-between mt-8">
                                            <span className="text-sm text-zinc-400">
                                                {events[0].count}+ Photos
                                            </span>

                                            <div className="flex items-center gap-2 text-[#d6b25e]">
                                                Explore
                                                <ArrowRight
                                                    size={18}
                                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    )}

                    {/* Right Side Cards */}
                    <div className="lg:col-span-5 grid gap-6">

                        {events.slice(1).map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.1,
                                }}
                            >
                                <Link
                                    to={`/events/${event.slug}`}
                                    className="group block"
                                >
                                    <div className="relative h-[247px] overflow-hidden rounded-3xl border border-white/10">

                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                                        <div className="absolute bottom-0 p-6 w-full">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-[#d6b25e] text-xs uppercase tracking-widest">
                                                    {event.count}+ Photos
                                                </span>

                                                <ArrowRight
                                                    size={18}
                                                    className="text-[#d6b25e] transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </div>

                                            <h3 className="text-2xl text-white font-light">
                                                {event.title}
                                            </h3>

                                            <p className="text-sm text-zinc-400 mt-2 line-clamp-2">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsPreview;