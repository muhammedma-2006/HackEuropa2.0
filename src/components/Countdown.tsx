"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
    // March 14, 9:00 AM IST (UTC+5:30)
    const targetDate = new Date("2026-03-14T09:00:00+05:30").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return null;
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Satisfy aggressive synchronous setState linter
        setTimeout(() => {
            setMounted(true);
            setTimeLeft(calculateTimeLeft());
        }, 0);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // prevent memory leaks
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Prevent hydration mismatch by rendering an empty block on the server matching the size of the timer container
    if (!mounted) {
        return <div className="flex gap-4 md:gap-6 mt-6 min-h-[88px] opacity-0" aria-hidden="true" />;
    }

    if (!timeLeft) {
        return (
            <div className="text-xl font-semibold text-white mt-6 z-10">
                Event Started
            </div>
        );
    }

    return (
        <div className="flex gap-3 md:gap-6 text-center text-white mt-6 z-10">
            <TimeBox value={timeLeft.days} label="Days" />
            <TimeBox value={timeLeft.hours} label="Hours" />
            <TimeBox value={timeLeft.minutes} label="Minutes" />
            <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
    );
}

function TimeBox({ value, label }: { value: number; label: string }) {
    return (
        <div className="bg-white/5 backdrop-blur-md px-3 md:px-6 py-3 md:py-4 rounded-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] min-w-[70px] md:min-w-[100px]">
            <div className="text-2xl md:text-3xl font-bold font-mono text-white/90">
                {value.toString().padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-xs opacity-70 uppercase tracking-widest mt-1">{label}</div>
        </div>
    );
}
