export default function Guidelines() {
    return (
        <section id="guidelines" className="py-24 px-6 bg-[#050505]">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
                    Hackathon Guidelines
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

                    {/* Team Size */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-3">Team Size</h3>
                        <p className="text-gray-300">
                            Each team must consist of <strong>4 members</strong>.
                        </p>
                    </div>

                    {/* Female Participant */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-3">Inclusive Teams</h3>
                        <p className="text-gray-300">
                            Every team must include <strong>at least one female participant</strong>.
                        </p>
                    </div>

                    {/* Hack Duration */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-3">Hack Duration</h3>
                        <p className="text-gray-300">
                            Participants will have <strong>8 hours</strong> to design and build their solution.
                        </p>
                    </div>

                    {/* Food */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-3">Food & Refreshments</h3>
                        <p className="text-gray-300">
                            Food and refreshments will be provided for all participants.
                        </p>
                    </div>

                    {/* Equipment */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-3">Bring Your Equipment</h3>
                        <p className="text-gray-300">
                            Participants must bring their own laptops, chargers, and development tools. Internet will be provided.
                        </p>
                    </div>

                    {/* Development */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-semibold text-white mb-3">Original Work</h3>
                        <p className="text-gray-300">
                            All projects must be developed during the hackathon. Pre-built solutions are not allowed.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
