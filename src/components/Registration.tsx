"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/navigation";
import { Member, Team, emptyMember, validateTeamStep } from "@/lib/validation";

// --- Reusable UI Components ---
const InputField = ({ label, value, onChange, type = "text", required = true }: { label: string; value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; type?: string; required?: boolean; }) => (
    <div className="relative group">
        <input
            type={type}
            required={required}
            value={value}
            onChange={onChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#f72585] focus:ring-1 focus:ring-[#f72585] transition-all peer"
            placeholder={label}
        />
        <label className="absolute left-4 -top-3 text-[10px] font-bold tracking-wider text-[#f72585] bg-[#0a0a0a] px-1 uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#f72585] peer-focus:bg-[#0a0a0a] cursor-text">
            {label}
        </label>
    </div>
);

const SelectField = ({ label, value, onChange, options }: { label: string; value: string; onChange: React.ChangeEventHandler<HTMLSelectElement>; options: string[]; }) => (
    <div className="relative group">
        <select
            required
            value={value}
            onChange={onChange}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#f72585] focus:ring-1 focus:ring-[#f72585] transition-all appearance-none"
        >
            <option value="" disabled className="bg-[#050505]">Select {label}</option>
            {options.map((opt: string) => <option key={opt} value={opt} className="bg-[#050505]">{opt}</option>)}
        </select>
        <label className="absolute left-4 -top-3 text-[10px] font-bold tracking-wider text-[#f72585] bg-[#0a0a0a] px-1 uppercase transition-all">
            {label}
        </label>
    </div>
);

const SegmentedControl = ({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[]; }) => (
    <div className="flex flex-col gap-2">
        <label className="text-[10px] font-bold tracking-wider text-white/60 uppercase">{label}</label>
        <div className="flex gap-2">
            {options.map((opt: string) => (
                <button
                    key={opt}
                    type="button"
                    onClick={() => onChange(opt)}
                    className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${value === opt ? "bg-[#f72585] text-white shadow-[0_0_15px_rgba(247,37,133,0.5)] border border-[#f72585]" : "bg-white/5 text-white/50 border border-white/10 hover:bg-white/10"}`}
                >
                    {opt}
                </button>
            ))}
        </div>
    </div>
);

// --- Main Registration Component ---
export default function Registration() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [team, setTeam] = useState<Team>({
        teamName: "",
        teamLead: { ...emptyMember },
        members: [{ ...emptyMember }, { ...emptyMember }, { ...emptyMember }],
    });

    const totalSteps = 6;
    const currentMembersCount = 1 + team.members.filter(m => m.name.trim() !== "").length;

    const updateLead = (field: keyof Member, value: string) => {
        setTeam(prev => ({ ...prev, teamLead: { ...prev.teamLead, [field]: value } }));
        setError("");
    };

    const updateMember = (index: number, field: keyof Member, value: string) => {
        const newMembers = [...team.members];
        newMembers[index] = { ...newMembers[index], [field]: value };
        setTeam(prev => ({ ...prev, members: newMembers }));
        setError("");
    };

    const copyLeadDetails = (index: number) => {
        const newMembers = [...team.members];
        newMembers[index] = { ...newMembers[index], department: team.teamLead.department };
        setTeam(prev => ({ ...prev, members: newMembers }));
    };

    const handleNext = () => {
        const err = validateTeamStep(step, team);
        if (err) { setError(err); return; }
        if (step < totalSteps) setStep(prev => prev + 1);
    };

    const handlePrev = () => {
        if (step > 1) { setStep(prev => prev - 1); setError(""); }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Final sanity check before submission
        const err = validateTeamStep(6, team);
        if (err) { setError(err); return; }

        setIsSubmitting(true);
        setError("");

        // MOCK: Save to DB or localStorage
        localStorage.setItem("hackEuropaTeam", JSON.stringify(team));

        // MOCK: Add slight delay for animation UX feeling like a real database write
        setTimeout(() => {
            router.push("/register/success");
        }, 1500);
    };

    // --- Render Steps ---
    const renderStepContent = () => {
        if (step === 1) {
            return (
                <motion.div key="step1" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6 tracking-tight">Team Information</h3>
                    <InputField label="Team Name" value={team.teamName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setTeam({ ...team, teamName: e.target.value }); setError(""); }} />
                </motion.div>
            );
        }

        if (step === 2) {
            return (
                <motion.div key="step2" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6 tracking-tight">Team Lead Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Full Name" value={team.teamLead.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateLead("name", e.target.value)} />
                        <InputField label="Email Address" type="email" value={team.teamLead.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateLead("email", e.target.value)} />
                        <InputField label="Department" value={team.teamLead.department} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateLead("department", e.target.value)} />
                        <SelectField label="Year of Study" value={team.teamLead.year} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateLead("year", e.target.value)} options={["1st Year", "2nd Year", "3rd Year", "4th Year", "PG"]} />
                        <InputField label="GitHub Profile" type="url" value={team.teamLead.github} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateLead("github", e.target.value)} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5 mt-4">
                        <SegmentedControl label="Gender" value={team.teamLead.gender} onChange={(v: string) => updateLead("gender", v)} options={["Male", "Female", "Other"]} />
                        <SegmentedControl label="Food Preference" value={team.teamLead.foodPreference} onChange={(v: string) => updateLead("foodPreference", v)} options={["Veg", "Non-veg"]} />
                    </div>
                </motion.div>
            );
        }

        if (step >= 3 && step <= 5) {
            const idx = step - 3;
            const m = team.members[idx];
            return (
                <motion.div key={`step${step}`} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} className="space-y-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold tracking-tight">Team Member {idx + 1}</h3>
                        {team.teamLead.department && (
                            <button type="button" onClick={() => copyLeadDetails(idx)} className="text-xs text-[#4cc9f0] hover:text-white transition-colors border border-[#4cc9f0]/30 rounded-full px-3 py-1">
                                Copy Dept from Lead
                            </button>
                        )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="Full Name" value={m.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateMember(idx, "name", e.target.value)} />
                        <InputField label="Department" value={m.department} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateMember(idx, "department", e.target.value)} />
                        <SelectField label="Year of Study" value={m.year} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateMember(idx, "year", e.target.value)} options={["1st Year", "2nd Year", "3rd Year", "4th Year", "PG"]} />
                        <InputField label="GitHub Profile" type="url" value={m.github} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateMember(idx, "github", e.target.value)} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5 mt-4">
                        <SegmentedControl label="Gender" value={m.gender} onChange={(v: string) => updateMember(idx, "gender", v)} options={["Male", "Female", "Other"]} />
                        <SegmentedControl label="Food Preference" value={m.foodPreference} onChange={(v: string) => updateMember(idx, "foodPreference", v)} options={["Veg", "Non-veg"]} />
                    </div>
                </motion.div>
            );
        }

        if (step === 6) {
            const allMembers = [team.teamLead, ...team.members];
            return (
                <motion.div key="step6" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} className="space-y-6 w-full">
                    <h3 className="text-2xl font-bold mb-6 tracking-tight text-center">Review Registration</h3>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                        <h4 className="text-xl font-bold text-[#f72585] mb-4">Team: {team.teamName}</h4>
                        <div className="space-y-4">
                            {allMembers.map((m, i) => (
                                <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7209b7] to-[#4cc9f0] flex items-center justify-center font-bold text-lg">
                                            {m.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-bold">{m.name} <span className="text-xs text-white/40 ml-2 uppercase">{i === 0 ? "Lead" : `Member ${i}`}</span></p>
                                            <p className="text-sm text-white/50">{m.department} • {m.year}</p>
                                        </div>
                                    </div>
                                    <button type="button" onClick={() => setStep(i + 2)} className="mt-2 md:mt-0 text-xs text-white/40 hover:text-white transition-colors">Edit Section</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            );
        }
    };

    return (
        <section id="registration" className="relative w-full py-24 min-h-screen flex items-center justify-center border-t border-white/5 bg-[#0a0a0a] overflow-hidden">

            <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-3xl">
                <div className="text-center mb-10">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">Hack Europa 2.0</h1>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-chrome uppercase">Team Registration</h2>
                    <p className="text-white/60 font-medium tracking-wide uppercase text-sm mb-6">
                        Software Block <span className="mx-2 text-white/20">•</span> 14 March <span className="mx-2 text-white/20">•</span> 8 Hours
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-4">
                        <span className="text-white/50 text-sm">4 Members Required</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-white/50 text-sm">Members Added: <b className="text-[#4cc9f0]">{currentMembersCount}/4</b></span>
                    </div>
                </div>

                {/* Stepper Indicator */}
                <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4 scrollbar-hide">
                    {["Team", "Lead", "M1", "M2", "M3", "Review"].map((label, i) => {
                        const num = i + 1;
                        const isActive = step === num;
                        const isPast = step > num;
                        return (
                            <div key={label} className="flex flex-col items-center gap-2 min-w-[60px]">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${isActive ? "bg-[#f72585] text-white shadow-[0_0_15px_#f72585]" : isPast ? "bg-white/20 text-white" : "bg-white/5 text-white/30"}`}>
                                    {num}
                                </div>
                                <span className={`text-[10px] tracking-widest uppercase transition-colors ${isActive ? "text-white" : "text-white/30"}`}>{label}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Glass Form Container */}
                <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-white/20 via-white/5 to-transparent">
                    <div className="relative p-6 md:p-10 rounded-[23px] bg-black/60 backdrop-blur-md border border-white/5 min-h-[400px] flex flex-col">

                        <AnimatePresence mode="wait">
                            {renderStepContent()}
                        </AnimatePresence>

                        {error && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
                                {error}
                            </motion.div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="mt-auto pt-8 flex items-center justify-between gap-4">
                            {step > 1 ? (
                                <button type="button" onClick={handlePrev} className="px-6 py-3 rounded-xl font-bold tracking-wider text-white/60 hover:text-white bg-white/5 border border-white/10 transition-colors uppercase text-sm">
                                    Back
                                </button>
                            ) : <div />}

                            {step < totalSteps ? (
                                <button type="button" onClick={handleNext} className="px-8 py-3 rounded-xl font-bold tracking-wider text-black bg-[#ededed] shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-shadow uppercase text-sm">
                                    Continue
                                </button>
                            ) : (
                                <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="px-8 py-3 rounded-xl font-bold tracking-wider text-black bg-chrome border border-white/50 shadow-[0_0_20px_rgba(247,37,133,0.3)] hover:shadow-[0_0_30px_rgba(247,37,133,0.6)] transition-all uppercase text-sm disabled:opacity-50 flex items-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        "Confirm Submission"
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
