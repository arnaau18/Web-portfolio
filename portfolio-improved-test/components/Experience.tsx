"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import { GameController, Code } from "@phosphor-icons/react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

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
      className="min-h-[100dvh] flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-zinc-50">
            Trayectoria
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group p-8 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-teal-400/10 flex items-center justify-center">
                      <Icon weight="bold" className="w-6 h-6 text-teal-400" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-1 text-zinc-50">
                            {exp.title}
                          </h3>
                          <div className="text-zinc-400">
                            {exp.organization}
                          </div>
                        </div>
                        <div className="text-sm text-teal-400 font-medium mt-2 md:mt-0">
                          {exp.period}
                        </div>
                      </div>

                      <p className="text-zinc-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm rounded-md bg-zinc-950 border border-zinc-800 text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
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
