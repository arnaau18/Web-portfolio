"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Parallax for main content
    gsap.to(contentRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Parallax for stats - moves slower
    gsap.to(statsRef.current, {
      yPercent: 25,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [reduceMotion]);

  return (
    <section
      id="about"
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
                Sobre mí
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-24 tracking-tight text-zinc-50 leading-[1.1]">
            De competir en eSports<br />a construir software
          </h2>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Main content - takes 3 columns */}
            <div ref={contentRef} className="lg:col-span-3 space-y-8 text-lg md:text-xl leading-relaxed text-zinc-400">
              <motion.p
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              >
                Pasé años compitiendo en los niveles más altos del eSports
                profesional en League of Legends. La disciplina extrema, el
                trabajo en equipo bajo presión y las decisiones rápidas y
                precisas definieron mi carrera como jugador.
              </motion.p>

              <motion.p
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                Hoy aplico esa misma mentalidad al desarrollo de software.
                Estudio Desarrollo de Aplicaciones Multiplataforma, dominando
                tecnologías como Java, SQL y Git mientras construyo aplicaciones
                modernas.
              </motion.p>

              <motion.p
                initial={reduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
              >
                Esta transición no es un cambio de carrera, es la evolución
                natural de alguien que busca la excelencia, la mejora continua y
                el dominio de sistemas complejos.
              </motion.p>
            </div>

            {/* Side stats - takes 2 columns with Double-Bezel */}
            <div ref={statsRef} className="lg:col-span-2 space-y-6">
              <motion.div
                initial={reduceMotion ? {} : { opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
              >
                {/* Outer Shell */}
                <div className="p-2 rounded-[2rem] bg-white/5 ring-1 ring-white/10">
                  {/* Inner Core */}
                  <div className="p-8 rounded-[calc(2rem-0.5rem)] bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <div className="text-5xl font-bold text-teal-400 mb-3 tracking-tight">2024</div>
                    <div className="text-sm text-zinc-400 leading-relaxed">
                      Estudiante activo DAM
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={reduceMotion ? {} : { opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.32, 0.72, 0, 1] }}
              >
                {/* Outer Shell */}
                <div className="p-2 rounded-[2rem] bg-white/5 ring-1 ring-white/10">
                  {/* Inner Core */}
                  <div className="p-8 rounded-[calc(2rem-0.5rem)] bg-zinc-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    <div className="text-5xl font-bold text-teal-400 mb-3 tracking-tight">Pro</div>
                    <div className="text-sm text-zinc-400 leading-relaxed">
                      Experiencia en eSports profesional
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
