"use client";
import { useState, useEffect } from "react";

export default function IntroOverlay({ onEnter }: { onEnter: () => void }) {
    const [animate, setAnimate] = useState(false);
    const [transformStyle, setTransformStyle] = useState("");

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleClick = () => {
        const hero = document.getElementById("hero");
        if (!hero) return;

        const rect = hero.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const viewportCenterX = window.innerWidth / 2;
        const viewportCenterY = window.innerHeight / 2;

        const translateX = centerX - viewportCenterX;
        const translateY = centerY - viewportCenterY;

        // Responsive scale factor
        const scale =
            window.innerWidth < 640
                ? 8    // mobile
                : window.innerWidth < 1024
                    ? 10   // tablet
                    : 14;  // desktop

        setTransformStyle(
            `translate(${translateX}px, ${translateY}px) scale(${scale})`
        );

        setAnimate(true);

        setTimeout(() => {
            onEnter();
            document.getElementById("hero")?.scrollIntoView({ behavior: "instant" });
        }, 1400);
    };

    return (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050505] text-white overflow-hidden"
            style={{
                transform: animate ? transformStyle : "translate(0px, 0px) scale(1)",
                transition:
                    "transform 1.4s cubic-bezier(0.22,1,0.36,1), opacity 1.2s ease",
                opacity: animate ? 0 : 1,
            }}
        >
            {/* Hero-like Background Glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute bottom-[-350px] left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-violet-600/20 blur-[260px] rounded-full" />
                <div className="absolute bottom-[-300px] left-[20%] w-[800px] h-[600px] bg-fuchsia-500/15 blur-[240px] rounded-full" />
                <div className="absolute bottom-[-300px] right-[20%] w-[800px] h-[600px] bg-sky-400/15 blur-[240px] rounded-full" />
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-violet-500 to-sky-400 bg-clip-text text-transparent">
                    HackEuropa 2.0
                </h1>

                <button
                    onClick={handleClick}
                    className="mt-12 px-12 py-4 sm:px-16 sm:py-5 text-lg sm:text-xl rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-600 to-sky-400 hover:scale-105 transition-all duration-300 touch-manipulation"
                >
                    Explore
                </button>
            </div>
        </div>
    );
}
