"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy } from "lucide-react";

export default function EventInfo() {
    return (
        <section id="event-info" className="relative w-full py-24 min-h-[50vh] flex flex-col items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-[#f72585]/30 bg-[#f72585]/10 text-[#f72585] text-sm font-semibold tracking-widest text-center shadow-[0_0_15px_rgba(247,37,133,0.2)]">
                        HOSTED BY THE SAIT
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        <span className="text-chrome">THE FUTURE</span> IS NOW
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        Organized and hosted by the Students Association of Information Technology (SAIT), Hack Europa 2.0 is an intense 8-hour innovation sprint where cutting-edge technology meets visionary ideas.
                    </p>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed mt-4">
                        Taking place at the Software Block on 14 March, this high-energy hackathon brings together developers, designers, and problem-solvers to build impactful solutions under pressure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[
                        { icon: Calendar, title: "Date", value: "14 March", color: "text-[#4cc9f0]" },
                        { icon: MapPin, title: "Location", value: "Software Block", color: "text-[#f72585]" },
                        { icon: Trophy, title: "Format", value: "8 Hours", color: "text-[#7209b7]" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <item.icon className={`w-12 h-12 mb-6 ${item.color} group-hover:scale-110 transition-transform`} />
                            <h3 className="text-white/60 text-sm tracking-widest uppercase mb-2">{item.title}</h3>
                            <p className="text-2xl font-bold">{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
