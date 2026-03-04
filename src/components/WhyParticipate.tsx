"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Zap } from "lucide-react";

export default function WhyParticipate() {
    const benefits = [
        {
            title: "Elite Networking",
            description: "Connect with the brightest minds across universities, top-tier mentors, and industry veterans.",
            icon: Users,
        },
        {
            title: "Career Opportunities",
            description: "Gain exposure to tech recruiters. Top performers often secure internships or developer grants.",
            icon: Briefcase,
        },
        {
            title: "Accelerated Growth",
            description: "Learn emerging technologies under pressure, transforming months of learning into a 48-hour sprint.",
            icon: Zap,
        }
    ];

    return (
        <section className="relative w-full py-24 flex flex-col items-center justify-center border-t border-white/5 bg-[#050505] overflow-hidden">
            {/* Background glow strip */}
            <div className="absolute top-0 left-[20%] w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#4cc9f0] to-transparent shadow-[0_0_20px_#4cc9f0]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">
                        WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">PARTICIPATE?</span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        Beyond the code: The Hack Europa advantage.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors flex flex-col items-start text-left"
                        >
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#f72585]/20 group-hover:text-[#f72585] transition-colors">
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                            <p className="text-white/50 leading-relaxed text-sm">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
