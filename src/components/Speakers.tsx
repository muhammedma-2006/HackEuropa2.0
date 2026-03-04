"use client";

import { motion } from "framer-motion";

export default function Speakers() {
    const speakers = [
        { name: "TBD", role: "Keynote Speaker", color: "from-[#4cc9f0]" },
        { name: "TBD", role: "Lead Judge", color: "from-[#7209b7]" },
        { name: "TBD", role: "Industry Expert", color: "from-[#f72585]" },
    ];

    return (
        <section className="relative w-full py-24 flex flex-col items-center justify-center border-t border-white/5 bg-[#050505]">
            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                        JUDGES & SPEAKERS
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        Learn from the experts building the decentralized future.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-12 max-w-5xl mx-auto">
                    {speakers.map((speaker, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            className="group flex flex-col items-center"
                        >
                            <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full p-[2px] bg-gradient-to-b from-white/20 to-transparent group-hover:from-white/60 transition-all duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-b ${speaker.color} to-transparent rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`} />

                                <div className="w-full h-full rounded-full bg-[#0a0a0a] border border-white/10 overflow-hidden flex items-center justify-center relative z-10">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="w-[120%] h-[120%] opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjEwIDEwIiAvPjwvc3ZnPg==')] bg-center bg-cover"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold tracking-tight mb-1">{speaker.name}</h3>
                            <p className="text-sm font-medium tracking-widest text-[#f72585] uppercase">{speaker.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
