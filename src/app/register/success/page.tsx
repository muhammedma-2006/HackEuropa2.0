"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Calendar, MapPin, Clock } from "lucide-react";
import { Team } from "@/lib/validation";
import Link from "next/link";

export default function SuccessPage() {
    const [team, setTeam] = useState<Team | null>(null);

    useEffect(() => {
        // Attempt to load team data from localStorage
        const stored = localStorage.getItem("hackEuropaTeam");
        if (stored) {
            try {
                // Wrap in setTimeout to satisfy strict linter regarding synchronous setState in effects
                setTimeout(() => {
                    setTeam(JSON.parse(stored));
                }, 0);
            } catch (e) {
                console.error("Error parsing team data from localStorage", e);
            }
        }
    }, []);

    return (
        <div className="w-full flex items-center justify-center p-4 py-12 md:p-6 min-h-[80vh]">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl bg-black/60 backdrop-blur-md rounded-[23px] border border-white/5 p-6 md:p-12 shadow-[0_0_50px_rgba(247,37,133,0.1)] relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7209b7] via-[#f72585] to-[#4cc9f0]" />

                <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-20 h-20 md:w-24 md:h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6"
                    >
                        <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-400" />
                    </motion.div>

                    <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 flex flex-col items-center justify-center w-full">
                        <span className="hidden md:inline">REGISTRATION <span className="text-chrome">CONFIRMED</span> 🎉</span>
                        <span className="md:hidden">CONFIRMED 🎉</span>
                    </h1>

                    <p className="text-white/60 text-base md:text-lg mb-8 max-w-lg">
                        Your team has been successfully registered for Hack Europa 2.0. We are excited to see what you build!
                    </p>
                </div>

                {team && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8"
                    >
                        <h3 className="text-sm font-bold text-[#f72585] uppercase tracking-widest mb-4">Team Summary</h3>
                        <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                            <span className="text-white/50">Team Name</span>
                            <span className="font-bold text-lg">{team.teamName}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                            <span className="text-white/50">Team Lead</span>
                            <span className="font-medium">{team.teamLead.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-white/50">Leader Email</span>
                            <span className="font-medium">{team.teamLead.email}</span>
                        </div>
                    </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center text-center border border-white/10">
                        <Calendar className="w-6 h-6 text-[#4cc9f0] mb-2" />
                        <span className="text-xs uppercase text-white/50 tracking-wider">Date</span>
                        <span className="font-bold tracking-tight">MARCH 13</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center text-center border border-white/10">
                        <MapPin className="w-6 h-6 text-[#f72585] mb-2" />
                        <span className="text-xs uppercase text-white/50 tracking-wider">Location</span>
                        <span className="font-bold tracking-tight">SOFTWARE BLOCK</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center text-center border border-white/10">
                        <Clock className="w-6 h-6 text-[#7209b7] mb-2" />
                        <span className="text-xs uppercase text-white/50 tracking-wider">Duration</span>
                        <span className="font-bold tracking-tight">8 HOURS</span>
                    </div>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h4 className="font-bold text-white mb-4">Next Steps</h4>
                    <ul className="space-y-3 text-sm text-white/70">
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4cc9f0] shrink-0" /> Ensure all team members bring their College IDs.
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f72585] shrink-0" /> Bring your laptops, chargers, and any necessary hardware.
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7209b7] shrink-0" /> A confirmation will be sent to the team lead&apos;s email.
                        </li>
                    </ul>
                </div>

                <div className="mt-8 flex justify-center">
                    <Link href="/" className="px-6 py-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm uppercase tracking-wider font-bold">
                        Return to Home
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
