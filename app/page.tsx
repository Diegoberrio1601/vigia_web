import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import BentoFeatures from "./components/BentoFeatures";
import InteractiveMockup from "./components/InteractiveMockup";
import LegalSection from "./components/LegalSection";
import LimitsSection from "./components/LimitsSection";
import WhySection from "./components/WhySection";
import DownloadSection from "./components/DownloadSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BentoFeatures />
        <InteractiveMockup />
        <LegalSection />
        <LimitsSection />
        <WhySection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
}
