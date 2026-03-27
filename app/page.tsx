import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import WhatIsSection from "./components/WhatIsSection";
import FeaturesSection from "./components/FeaturesSection";
import LegalSection from "./components/LegalSection";
import LimitsSection from "./components/LimitsSection";
import WhySection from "./components/WhySection";
import DownloadSection from "./components/DownloadSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <FeaturesSection />
        <LegalSection />
        <LimitsSection />
        <WhySection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
