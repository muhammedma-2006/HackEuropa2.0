export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen bg-[#050505] overflow-x-hidden pt-24 font-sans text-white">
            {/* Lighter blur background for forms compared to the cinematic landing page */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-[60vh] bg-[#f72585]/5 blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10 w-full pb-24">
                {children}
            </main>
        </div>
    );
}
