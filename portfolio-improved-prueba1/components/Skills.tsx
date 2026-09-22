"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, useEffect } from "react";
import {
  Code,
  Database,
  GitBranch,
  Terminal,
  FileJs,
  FileTs,
} from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const skillCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Parallax for each skill card with staggered effect
    skillCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          yPercent: 15 + ((index % 3) * 8),
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

  const skills = [
    {
      name: "Java",
      icon: Code,
      level: "Avanzado",
    },
    {
      name: "SQL",
      icon: Database,
      level: "Avanzado",
    },
    {
      name: "Git",
      icon: GitBranch,
      level: "Intermedio",
    },
    {
      name: "JavaScript",
      icon: FileJs,
      level: "Intermedio",
    },
    {
      name: "TypeScript",
      icon: FileTs,
      level: "Intermedio",
    },
    {
      name: "Spring Boot",
      icon: Terminal,
      level: "Intermedio",
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-[100dvh] flex items-center justify-center px-4 md:px-6 py-32 md:py-40 bg-zinc-950"
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
                Stack Técnico
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24 tracking-tight text-zinc-50 leading-[1.1]">
            Herramientas y<br />tecnologías
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  ref={(el) => { skillCardsRef.current[index] = el; }}
                  initial={reduceMotion ? {} : { opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : {}
                  }
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  className="group"
                >
                  {/* Outer Shell (Double-Bezel) */}
                  <div className="p-1.5 rounded-[2rem] bg-white/5 ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/[0.07] hover:ring-white/20">
                    {/* Inner Core */}
                    <div className="p-8 rounded-[calc(2rem-0.375rem)] bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] h-full">
                      {/* Icon in nested circle */}
                      <div className="mb-6">
                        <div className="w-max p-1 rounded-full bg-teal-400/10 ring-1 ring-teal-400/20">
                          <div className="w-12 h-12 rounded-full bg-teal-400/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-teal-400/20 group-hover:scale-110">
                            <Icon
                              weight="bold"
                              className="w-6 h-6 text-teal-400"
                            />
                          </div>
                        </div>
                      </div>

                      <h3 className="font-bold text-xl mb-2 text-zinc-50">{skill.name}</h3>
                      <p className="text-sm text-zinc-400">{skill.level}</p>
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
