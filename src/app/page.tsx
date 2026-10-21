import { Header } from "@/components/Header";
import { Interactions } from "@/components/Interactions";
import { RevealObserver } from "@/components/RevealObserver";
import { About } from "@/components/sections/About";
import { Collection } from "@/components/sections/Collection";
import { FinalCta, FloatingWhatsApp, Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowToBuy } from "@/components/sections/HowToBuy";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Marquee } from "@/components/sections/Marquee";
import { ScrollText } from "@/components/sections/ScrollText";
import { Visit } from "@/components/sections/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <ScrollText />
        <About />
        <HowToBuy />
        <InstagramFeed />
        <Visit />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <RevealObserver />
      <Interactions />
    </>
  );
}
