"use client";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-[#050505]">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
                    About
                </h2>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* About HackEuropa */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">

                        <h3 className="text-2xl font-semibold text-white mb-4">
                            About HackEuropa
                        </h3>

                        <p className="text-gray-300 leading-relaxed">
                            HackEuropa 2.0 is an intense 8-hour hackathon where students collaborate
                            to design and build innovative technology solutions. Participants work
                            in teams to transform ideas into functional prototypes within a limited
                            time, encouraging creativity, teamwork, and problem-solving under
                            pressure.
                        </p>

                        <div className="mt-6 text-gray-400 space-y-1 text-sm">
                            <p>📅 14 March 2026</p>
                            <p>📍 Software Block</p>
                            <p>⏱ 8 Hour Hackathon</p>
                            <p>🏆 Prize Pool: ₹15,000</p>
                        </div>

                    </div>

                    {/* About SAIT */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8">

                        <h3 className="text-2xl font-semibold text-white mb-4">
                            About SAIT
                        </h3>

                        <p className="text-gray-300 leading-relaxed">
                            The Students Association of Information Technology (SAIT) is the
                            official student body of the IT Department. SAIT aims to promote
                            technical excellence, innovation, and collaboration among students
                            through workshops, coding competitions, hackathons, and industry
                            interaction programs.
                        </p>

                        <p className="text-gray-300 leading-relaxed mt-4">
                            HackEuropa is one of SAIT’s flagship technical events, bringing
                            together developers, designers, and innovators to build impactful
                            solutions and push the boundaries of technology.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}
