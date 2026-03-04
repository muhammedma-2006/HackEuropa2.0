"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, Cpu } from "lucide-react";

export default function Tracks() {
    const tracks = [
        {
            title: "Web3 & DeFi",
            description: "Build the decentralized future. Smart contracts, dApps, and new economic paradigms.",
            icon: Sparkles,
            gradient: "from-[#4cc9f0] via-[#7209b7] to-[#f72585]",
        },
        {
            title: "AI & Machine Learning",
            description: "Push the boundaries of intelligent systems. LLMs, generative art, and predictive models.",
            icon: Cpu,
            gradient: "from-[#f72585] via-[#7209b7] to-[#4cc9f0]",
        },
        {
            title: "Cyber Security",
            description: "Defend the digital realm. Zero-trust architecture, cryptography, and network defense.",
            icon: Terminal,
            gradient: "from-[#7209b7] via-[#4cc9f0] to-[#f72585]",
        }
    ];

    return (
        <section id="tracks" className="relative w-full py-32 flex flex-col items-center justify-center border-t border-white/5 bg-[#050505]">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
                        HACKATHON <span className="text-sweep">TRACKS</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        Choose your domain and build something extraordinary.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                            className="group relative"
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-r ${track.gradient} rounded-2xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}
                            />
                            <div
                                className={`group relative p-[1px] rounded-2xl bg-gradient-to-r ${track.gradient} transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(247,37,133,0.4)]`}
                            >
                                <div className="relative h-full flex flex-col p-8 rounded-2xl bg-[#0a0a0a] backdrop-blur-md overflow-hidden">
                                    <track.icon className="w-10 h-10 mb-6 text-white/80 group-hover:scale-110 transition-transform duration-500 group-hover:text-white" />

                                    <h3 className="text-2xl font-bold mb-4 tracking-tight">{track.title}</h3>
                                    <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-300 flex-grow">
                                        {track.description}
                                    </p>

                                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                                        <span className="text-xs font-bold tracking-widest text-white/40 uppercase group-hover:text-white transition-colors">
                                            Select Track
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white transition-colors group-hover:text-black">
                                            <span className="text-lg leading-none mt-[-2px]">→</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
