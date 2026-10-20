"use client";

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import SelectedWorks from "@/components/sections/SelectedWorks";
import Process from "@/components/sections/Process";
import Footer from "@/components/sections/Footer";
import { usePageAnimations } from "@/hooks/usePageAnimations";

export default function Home() {
  usePageAnimations();

  return (
    <main className="relative min-h-screen w-full bg-[#080808] text-[#f5f5f3]">
      <Header />
      <Hero />
      <Manifesto />
      <Services />
      <SelectedWorks />
      <Process />
      <Footer />
    </main>
  );
}
