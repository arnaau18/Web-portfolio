import ZoomHero from "@/components/ZoomHero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import CursorGlow from "@/components/CursorGlow";
import BackgroundLiquid from "@/components/BackgroundLiquid";

export default function Home() {
  return (
    <>
      <BackgroundLiquid />
      <Navigation />
      <CursorGlow />
      <main className="relative z-10">
        <ZoomHero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
