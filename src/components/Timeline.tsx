"use client";

import { motion } from "framer-motion";

const timelineEvents = [
    {
        time: "09:00 AM",
        title: "REGISTRATION",
        description: "Badge pickup and team verification",
        align: "left"
    },
    {
        time: "10:00 AM",
        title: "OPENING CEREMONY",
        description: "Introduction and theme reveal",
        align: "right"
    },
    {
        time: "11:00 AM",
        title: "HACKING BEGINS",
        description: "Start building your projects",
        align: "left"
    },
    {
        time: "07:00 PM",
        title: "MENTORSHIP ROUND",
        description: "Feedback from industry experts",
        align: "right"
    },
    {
        time: "Day 2 - 10:00 AM",
        title: "FINAL PRESENTATION",
        description: "Pitching to the grand jury",
        align: "left"
    },
    {
        time: "Day 2 - 01:00 PM",
        title: "PRIZE DISTRIBUTION",
        description: "Celebrating the winners",
        align: "right"
    }
];

export default function Timeline() {
    return (
        <section id="timeline" className="relative w-full py-24 min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505]">

            {/* Background 3D Node/Orb Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] opacity-30 pointer-events-none -z-10 mix-blend-screen overflow-hidden">
                <img src="/images/knot_orb.png" alt="Metallic Knot Background" className="w-full object-contain filter drop-shadow-[0_0_50px_rgba(247,37,133,0.3)] animate-float" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        TIMELINE
                    </h2>
                    <div className="w-16 h-1 bg-[#a200ff] rounded-full drop-shadow-[0_0_10px_rgba(162,0,255,0.8)]" />
                </motion.div>

                <div className="relative max-w-4xl mx-auto mt-20">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#a200ff] to-transparent -translate-x-1/2 opacity-50" />

                    <div className="flex flex-col gap-12 md:gap-24 relative">
                        {timelineEvents.map((event, index) => {
                            const isLeft = event.align === "left";

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className={`relative flex items-center justify-start md:justify-center w-full`}
                                >
                                    {/* Desktop Layout (Alternating) */}
                                    <div className={`hidden md:flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                                        <div className={`w-[45%] flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                                            <div className="w-full max-w-[380px] p-6 lg:p-8 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:border-[#4cc9f0]/40 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                                                <p className="text-[#4cc9f0] font-mono text-sm tracking-widest font-bold mb-2 drop-shadow-[0_0_8px_rgba(76,201,240,0.4)]">{event.time}</p>
                                                <h3 className="text-white text-xl lg:text-2xl font-black uppercase mb-2 tracking-tight">{event.title}</h3>
                                                <p className="text-white/50 text-sm leading-relaxed">{event.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile Layout (Left Aligned) */}
                                    <div className="flex md:hidden w-full pl-12 pr-4">
                                        <div className="w-full p-6 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:border-[#4cc9f0]/40 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                            <p className="text-[#4cc9f0] font-mono text-xs tracking-widest font-bold mb-2 drop-shadow-[0_0_8px_rgba(76,201,240,0.4)]">{event.time}</p>
                                            <h3 className="text-white text-lg font-black uppercase mb-1 tracking-tight">{event.title}</h3>
                                            <p className="text-white/50 text-sm leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>

                                    {/* Glowing Node */}
                                    <div className="absolute left-[20px] md:left-1/2 -translate-x-[10.5px] md:-translate-x-1/2 w-5 h-5 rounded-full bg-[#a200ff] border-4 border-[#050505] shadow-[0_0_20px_#a200ff] z-10 box-content" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </section>
    );
}
