"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Throttle the mouse update to prevent performance issues
        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            animationFrameId = requestAnimationFrame(() => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 hidden md:block"
            animate={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76,201,240,0.1), transparent 40%)`,
            }}
        />
    );
}
