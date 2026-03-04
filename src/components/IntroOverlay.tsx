"use client";
import { useState, useEffect } from "react";

export default function IntroOverlay({ onEnter }: { onEnter: () => void }) {
    const [zoom, setZoom] = useState(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleClick = () => {
        setZoom(true);
        setTimeout(() => onEnter(), 1400);
    };

    return (
        <div
            className={`
        fixed inset-0 z-[999]
        flex flex-col items-center justify-center
        bg-[#050505] text-white overflow-hidden
        origin-center transform-gpu
        transition-transform transition-opacity
        duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${zoom ? "scale-[20] sm:scale-[25] md:scale-[30] opacity-0" : "scale-100 opacity-100"}
      `}
        >
            {/* ===== Ambient Glow (Same as Hero) ===== */}
            <div className="absolute inset-0 -z-10 pointer-events-none">

                <div className="
          absolute bottom-[-350px] left-1/2 -translate-x-1/2
          w-[1200px] h-[700px]
          bg-violet-600/20 blur-[260px] rounded-full
        " />

                <div className="
          absolute bottom-[-300px] left-[20%]
          w-[800px] h-[600px]
          bg-fuchsia-500/15 blur-[240px] rounded-full
        " />

                <div className="
          absolute bottom-[-300px] right-[20%]
          w-[800px] h-[600px]
          bg-sky-400/15 blur-[240px] rounded-full
        " />
            </div>

            {/* ===== Y2K Chrome Abstract 3D Elements ===== */}

            <div className="absolute inset-0 -z-10 pointer-events-none">

                {/* Chrome Orb */}
                <div className="
          absolute top-[20%] left-[10%]
          w-40 h-40 sm:w-60 sm:h-60
          rounded-full
          bg-gradient-to-br
          from-white/80 via-gray-300 to-gray-600
          blur-md opacity-30
          animate-pulse
        " />

                {/* Metallic Ring */}
                <div className="
          absolute bottom-[15%] right-[10%]
          w-60 h-60 sm:w-80 sm:h-80
          rounded-full border-[8px]
          border-white/20
          blur-sm opacity-30
        " />

            </div>

            {/* ===== Animated Header (Hero-style) ===== */}
            <h1
                className="
          text-6xl sm:text-8xl md:text-9xl
          font-extrabold
          tracking-tight
          text-center
          bg-gradient-to-r
          from-fuchsia-400 via-violet-500 to-sky-400
          bg-clip-text text-transparent
          animate-[fadeInUp_1.2s_ease-out]
        "
            >
                HackEuropa 2.0
            </h1>

            {/* ===== Explore Button (Scaled Proportionally) ===== */}
            <button
                onClick={handleClick}
                className="
          mt-12
          touch-manipulation
          px-10 py-4 sm:px-14 sm:py-5
          text-lg sm:text-xl
          rounded-full
          bg-gradient-to-r
          from-fuchsia-500 via-violet-600 to-sky-400
          shadow-[0_0_40px_rgba(168,85,247,0.4)]
          hover:scale-105
          transition-all duration-300
        "
            >
                Explore
            </button>
        </div>
    );
}
