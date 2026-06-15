import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AccessPortal from "@/components/AccessPortal";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Features />
        <HowItWorks />
        <AccessPortal />
        <Team />
      </main>
      <Footer />
    </LanguageProvider>
  );
}


