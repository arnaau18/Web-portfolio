"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, useEffect } from "react";
import { GameController, Code } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Parallax for each experience card
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          yPercent: 10 + (index * 5),
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [reduceMotion]);

  const experiences = [
    {
      period: "Presente",
      title: "Desarrollo de Aplicaciones Multiplataforma",
      organization: "Estudiante DAM",
      description:
        "Formación en desarrollo full-stack con enfoque en aplicaciones empresariales. Java, SQL, arquitectura de software y metodologías ágiles.",
      icon: Code,
      tags: ["Java", "SQL", "Git", "Spring Boot"],
    },
    {
      period: "Años anteriores",
      title: "Jugador Profesional",
      organization: "eSports - League of Legends",
      description:
        "Competición en los niveles más altos. Desarrollo de habilidades en toma de decisiones bajo presión, comunicación en equipo y análisis estratégico.",
      icon: GameController,
      tags: ["Trabajo en equipo", "Análisis", "Competición", "Estrategia"],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-[100dvh] flex items-center justify-center px-4 md:px-6 py-32 md:py-40 bg-black"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          {/* Eyebrow Tag */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="inline-flex items-center mb-8"
          >
            <div className="px-4 py-1.5 rounded-full bg-teal-400/5 border border-teal-400/10">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-teal-400">
                Trayectoria
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24 tracking-tight text-zinc-50 leading-[1.1]">
            Mi camino
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  ref={(el) => { cardsRef.current[index] = el; }}
                  initial={reduceMotion ? {} : { opacity: 0, y: 40 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : {}
                  }
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="group"
                >
                  {/* Outer Shell (Double-Bezel) */}
                  <div className="p-2 rounded-[2rem] bg-white/5 ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.07] hover:ring-white/20">
                    {/* Inner Core */}
                    <div className="p-8 md:p-10 rounded-[calc(2rem-0.5rem)] bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                      <div className="flex flex-col md:flex-row md:items-start gap-6">
                        {/* Icon Container - Nested Circle */}
                        <div className="shrink-0">
                          <div className="p-1 rounded-full bg-teal-400/10 ring-1 ring-teal-400/20">
                            <div className="w-14 h-14 rounded-full bg-teal-400/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-teal-400/20 group-hover:scale-110">
                              <Icon weight="bold" className="w-7 h-7 text-teal-400" />
                            </div>
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                            <div>
                              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-zinc-50 leading-tight">
                                {exp.title}
                              </h3>
                              <div className="text-base text-zinc-400">
                                {exp.organization}
                              </div>
                            </div>
                            <div className="mt-3 md:mt-0">
                              <div className="px-3 py-1 rounded-full bg-teal-400/10 border border-teal-400/20">
                                <span className="text-xs font-medium text-teal-400">
                                  {exp.period}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-zinc-400 leading-relaxed mb-6 text-base md:text-lg">
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {exp.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-4 py-2 text-sm rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-400 transition-all duration-300 hover:border-zinc-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
