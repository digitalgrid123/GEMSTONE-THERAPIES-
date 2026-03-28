import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ThermalInsights } from "@/components/ThermalInsights";
import { HealthBenefits } from "@/components/HealthBenefits";
import { About } from "@/components/About";
import { Treatments } from "@/components/Treatments";
import { LadiesCare } from "@/components/LadiesCare";
import { ExerciseVideos } from "@/components/ExerciseVideos";
import { Locations } from "@/components/Locations";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans selection:bg-zinc-900 selection:text-white relative">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ThermalInsights />
        <HealthBenefits />
        <Treatments />
        <LadiesCare />
        <ExerciseVideos />
        <About />
        <Locations />
        <Faq />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
