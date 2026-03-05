"use client";

import { motion } from "framer-motion";
import { Trophy, Coins, Star } from "lucide-react";

export default function PrizePool() {
    return (
        <section id="prizes" className="relative w-full py-24 min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block px-4 py-1 mb-6 rounded-full border border-[#f72585]/30 bg-[#f72585]/10 text-[#f72585] text-sm font-semibold tracking-widest text-center shadow-[0_0_15px_rgba(247,37,133,0.2)]">
                        REWARDS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                        THE <span className="text-chrome">PRIZE POOL</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        Compete against the brightest minds to build innovative solutions and secure your share of the ₹15,000 prize pool.
                    </p>
                </motion.div>

                <div className="flex justify-center w-full max-w-4xl mx-auto">
                    {/* Main Prize Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group relative w-full md:w-2/3 flex flex-col items-center justify-center p-10 md:p-14 rounded-3xl bg-white/5 backdrop-blur-md border border-[#4cc9f0]/30 hover:border-[#4cc9f0]/60 transition-colors shadow-[0_0_40px_rgba(76,201,240,0.1)] hover:shadow-[0_0_60px_rgba(76,201,240,0.2)]"
                    >
                        <Trophy className="w-16 h-16 mb-4 text-[#4cc9f0] group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(76,201,240,0.6)] transition-all duration-300" />
                        <h3 className="text-white/80 text-lg md:text-xl font-medium tracking-widest uppercase mb-2">Total Prize Pool</h3>
                        <p className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4cc9f0] via-white to-[#4cc9f0] group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                            ₹15K
                        </p>

                        {/* Decorative floating elements */}
                        <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Star className="w-6 h-6 text-[#f72585] animate-pulse" />
                        </div>
                        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Coins className="w-6 h-6 text-[#7209b7] animate-bounce" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4cc9f0]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
        </section>
    );
}
