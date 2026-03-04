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
        setTimeout(() => {
            onEnter();
        }, 1200);
    };

    return (
        <div
            className={`
        fixed inset-0 z-[999]
        flex flex-col items-center justify-center
        bg-[#050505] text-white overflow-hidden
        transition-all duration-[1200ms] ease-in-out
        ${zoom ? "scale-[25] opacity-0" : "scale-100 opacity-100"}
      `}
        >
            {/* === SAME GLOW SYSTEM AS HERO === */}

            <div className="absolute inset-0 -z-10 pointer-events-none">

                {/* Main Violet Glow */}
                <div className="
          absolute
          bottom-[-350px]
          left-1/2
          -translate-x-1/2
          w-[1200px]
          h-[700px]
          bg-violet-600/20
          blur-[260px]
          rounded-full
        " />

                {/* Pink Accent */}
                <div className="
          absolute
          bottom-[-300px]
          left-[20%]
          w-[800px]
          h-[600px]
          bg-fuchsia-500/15
          blur-[240px]
          rounded-full
        " />

                {/* Blue Accent */}
                <div className="
          absolute
          bottom-[-300px]
          right-[20%]
          w-[800px]
          h-[600px]
          bg-sky-400/15
          blur-[240px]
          rounded-full
        " />
            </div>

            {/* Content */}
            <h1 className="text-4xl md:text-6xl font-black mb-10 tracking-widest text-chrome text-center drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                HACK EUROPA 2.0
            </h1>

            <button
                onClick={handleClick}
                className="
          px-10 py-3
          rounded-full font-medium tracking-widest uppercase text-sm
          bg-gradient-to-r
          from-fuchsia-500
          via-violet-600
          to-sky-400
          text-white
          hover:opacity-90 hover:shadow-[0_0_30px_rgba(247,37,133,0.5)]
          transition-all duration-300
        "
            >
                Explore
            </button>
        </div>
    );
}
