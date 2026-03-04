"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/#hero" },
        { name: "About", href: "/#about" },
        { name: "Tracks", href: "/#tracks" },
        { name: "Register", href: "/register" },
    ];

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-6 px-4"
        >
            <div className="flex items-center gap-6 md:gap-8 px-8 py-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10 shadow-[0_5px_30px_rgba(0,0,0,0.3)]">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    const isRegister = link.name === "Register";
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm tracking-wider uppercase transition-colors duration-300 font-medium ${isRegister
                                ? "text-[#f72585] font-semibold hover:text-[#f72585] drop-shadow-[0_0_8px_rgba(247,37,133,0.5)]"
                                : isActive
                                    ? "text-white"
                                    : "text-white/50 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}
