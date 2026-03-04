import Hero from "@/components/Hero";
import About from "@/components/About";
import Tracks from "@/components/Tracks";
import WhyParticipate from "@/components/WhyParticipate";
import Speakers from "@/components/Speakers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#f72585] selection:text-white">
      {/* Sticky Hero Background */}
      <div className="fixed inset-0 w-full h-screen z-0">
        <Hero />
      </div>

      {/* Pages that scroll over the hero */}
      <div className="relative z-10 mt-[100vh] bg-[#050505] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] border-t border-white/10 flex flex-col">
        <About />
        <WhyParticipate />
        <Tracks />
        <Speakers />
        <Footer />
      </div>
    </main>
  );
}
