import ZoomHero from "@/components/ZoomHero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      <Navigation />
      <CursorGlow />
      <main className="relative">
        <ZoomHero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
