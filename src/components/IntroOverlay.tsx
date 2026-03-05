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
            <div className="relative flex items-center justify-center h-screen overflow-hidden text-center w-full bg-[#0a0a0a] bg-[url('/images/poster_bg.png')] bg-cover bg-center bg-no-repeat">

                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 pointer-events-none bg-black/30" />

                {/* Dim Background 2.0 */}
                <div
                    className="
      absolute
      text-[160px] sm:text-[240px] md:text-[320px]
      font-extrabold
      text-white/5
      select-none
      pointer-events-none
    "
                >
                    2.0
                </div>

                {/* Header */}
                <div className="relative z-10 flex flex-col items-center">

                    <h1
                        className="
        text-6xl sm:text-8xl md:text-9xl
        font-extrabold
        uppercase
        tracking-wide
        leading-none
        text-white
        drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]
      "
                    >
                        HACK
                    </h1>

                    <h1
                        className="
        text-6xl sm:text-8xl md:text-9xl
        font-extrabold
        uppercase
        mt-3
        tracking-wide
        leading-none
        text-white
        drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]
      "
                    >
                        EUROPA
                    </h1>

                </div>

            </div>
            {/* End Cover Page Block */}

            <div className="absolute z-50 flex flex-col items-center">
                <button
                    onClick={handleClick}
                    className="mt-[60vh] px-12 py-4 sm:px-16 sm:py-5 text-lg sm:text-xl rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-600 to-sky-400 hover:scale-105 transition-all duration-300 touch-manipulation shadow-[0_0_30px_rgba(247,37,133,0.3)] hover:shadow-[0_0_50px_rgba(247,37,133,0.6)] text-white font-bold"
                >
                    Explore
                </button>
            </div>
        </div>
    );
}
