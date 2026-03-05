"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Countdown from "./Countdown";

function MagneticButton({ children, href }: { children: React.ReactNode, href: string }) {
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!buttonRef.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) * 0.2; // 0.2 is magnetic pull strength
        const y = (clientY - (top + height / 2)) * 0.2;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            <motion.a
                ref={buttonRef}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block mt-8 px-10 py-4 rounded-full font-bold text-lg tracking-wider text-black bg-chrome border border-white/40 shadow-[0_0_20px_rgba(247,37,133,0.3)] hover:shadow-[0_0_40px_rgba(247,37,133,0.6)] transition-shadow duration-300 z-10 cursor-pointer"
            >
                {children}
            </motion.a>
        </motion.div>
    );
}

const BackgroundLighting = () => {
    return (
        <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-600/10 blur-[250px] rounded-full pointer-events-none" />
    );
};

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax calculations (speed differences)
    const yText = useTransform(scrollY, [0, 1000], [0, 50]);

    return (
        <section id="hero" ref={containerRef} className="relative w-full min-h-[100vh] flex flex-col items-center justify-center overflow-hidden z-10">
            {/* Background Lighting Layer */}
            <div className="absolute inset-0 -z-10">
                <BackgroundLighting />
            </div>

            <motion.div
                style={{ y: yText }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center gap-6 z-10"
            >
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center gap-2"
                >
                    <span className="w-2 h-2 rounded-full bg-[#4cc9f0] shadow-[0_0_10px_#4cc9f0] animate-pulse" />
                    <span className="text-xs font-bold tracking-[0.2em] text-[#ededed]">HOSTED BY THE SAIT</span>
                </motion.div>

                <div className="relative flex flex-col items-center justify-center mt-4">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.08 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="absolute text-hero-sub-clamp font-black tracking-tighter text-white select-none z-0 pointer-events-none"
                    >
                        2.0
                    </motion.div>

                    <h1 className="text-hero-clamp font-black tracking-tighter text-sweep z-10 text-center leading-[0.9] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                        HACK<br className="md:hidden" /> EUROPA
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-lg md:text-xl font-medium text-white/60 max-w-2xl text-center mt-2 tracking-wide z-10"
                >
                    14 March 2026 • 9:00 AM
                </motion.p>

                <Countdown />

                <MagneticButton href="YOUR_GOOGLE_FORM_LINK">
                    REGISTER NOW
                </MagneticButton>
            </motion.div>
        </section>
    );
}
