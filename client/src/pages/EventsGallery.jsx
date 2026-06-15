import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { events } from "../data/events";


const EventsGallery = () =>
{
    const { slug } = useParams();

    const event = events.find(
        (e) => e.slug === slug
    );

    if (!event)
    {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Event not found
            </div>
        );
    }
    return (
        <section className="bg-black min-h-screen pt-32 pb-24">
            <div className=" mx-auto px-6 md:px-12">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <span className="uppercase tracking-[0.4em] text-[10px] text-[#d6b25e] font-semibold">
                        Life At Evolve Vue
                    </span>

                    <h1 className="mt-5 text-5xl md:text-7xl font-light text-white">
                        {event.title}
                    </h1>

                    <p className="mt-6 text-zinc-400 leading-relaxed">
                        {event.description}
                    </p>

                    <div className="mt-8 flex justify-center items-center gap-4">
                        <div className="h-px w-12 bg-[#d6b25e]/40" />
                        <span className="text-[#d6b25e] text-sm tracking-widest uppercase">
                            {event.gallery.length} Moments Captured
                        </span>
                        <div className="h-px w-12 bg-[#d6b25e]/40" />
                    </div>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 max-w-7xl mx-auto"
                >
                    <div className="overflow-hidden rounded-3xl border border-white/10">
                        <img
                            src={event.gallery[0]}
                            alt={event.title}
                            className="w-full h-[65vh] object-cover"
                        />
                    </div>
                </motion.div>

                {/* Editorial Section */}
                <div className="max-w-3xl mx-auto text-center mt-24">
                    <span className="text-[#d6b25e] uppercase tracking-[0.3em] text-xs">
                        Memories
                    </span>

                    <h2 className="mt-4 text-3xl md:text-5xl font-light text-white">
                        Moments That Define
                        <span className="text-[#d6b25e]"> Our Culture</span>
                    </h2>

                    <p className="mt-6 text-zinc-400 leading-relaxed">
                        Every gathering, celebration, training session, and team
                        outing contributes to the culture we continue to build.
                        These moments reflect collaboration, learning, and the
                        connections that extend beyond daily work.
                    </p>
                </div>

                {/* Gallery */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-20 space-y-6">

                    {event.gallery.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.03,
                            }}
                            className="group break-inside-avoid"
                        >
                            <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
                                <img
                                    src={image}
                                    alt={`${event.title} ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Story Block */}
                <div className="mt-28 max-w-7xl mx-auto">
                    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-10 md:p-16">

                        <div className="max-w-4xl mx-auto text-center">

                            <span className="text-[#d6b25e] uppercase tracking-[0.3em] text-xs">
                                Culture Highlight
                            </span>

                            <h3 className="mt-4 text-3xl md:text-5xl font-light text-white">
                                Building Connections Beyond Work
                            </h3>

                            <p className="mt-6 text-zinc-400 leading-relaxed">
                                At Evolve Vue, events are more than occasions.
                                They are opportunities to learn together,
                                celebrate achievements, strengthen relationships,
                                and create an environment where people genuinely
                                enjoy being part of the journey.
                            </p>

                            <div className="grid grid-cols-3 gap-6 mt-12">

                                <div>
                                    <h4 className="text-3xl text-[#d6b25e] font-light">
                                        {event.gallery.length}
                                    </h4>
                                    <p className="text-zinc-500 text-sm mt-2">
                                        Captured Moments
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-3xl text-[#d6b25e] font-light">
                                        Team
                                    </h4>
                                    <p className="text-zinc-500 text-sm mt-2">
                                        Shared Experiences
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-3xl text-[#d6b25e] font-light">
                                        Growth
                                    </h4>
                                    <p className="text-zinc-500 text-sm mt-2">
                                        Through Connection
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EventsGallery;