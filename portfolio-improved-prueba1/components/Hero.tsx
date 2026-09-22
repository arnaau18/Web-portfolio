"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect for content - moves slower
    gsap.to(contentRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Parallax effect for visual - moves faster
    gsap.to(visualRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [reduceMotion]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={heroRef} className="min-h-[100dvh] flex items-center justify-center px-6 py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            ref={contentRef}
            initial={reduceMotion ? false : { opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-teal-400/10 border border-teal-400/20"
            >
              <span className="text-sm font-medium text-teal-400">
                Full-Stack Developer
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-none text-zinc-50">
              Arnau Fores Garcia
            </h1>

            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-[55ch]">
              De competir en eSports profesional a construir software. Disciplina, trabajo en equipo y precisión aplicados al desarrollo.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-6 py-3 bg-teal-400 text-zinc-950 rounded-lg font-medium transition-all duration-300 hover:bg-teal-500 flex items-center gap-2"
              >
                Hablemos
                <ArrowRight
                  weight="bold"
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                onClick={() => scrollToSection("experience")}
                className="px-6 py-3 border border-zinc-700 rounded-lg font-medium text-zinc-50 transition-all duration-300 hover:bg-zinc-900"
              >
                Ver experiencia
              </button>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            ref={visualRef}
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-400/20 to-teal-500/20 border border-teal-400/30 p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl font-bold text-teal-400 mb-4">AFG</div>
                <div className="text-zinc-400 font-mono text-sm">
                  Desarrollo de Aplicaciones Multiplataforma
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-teal-400/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
