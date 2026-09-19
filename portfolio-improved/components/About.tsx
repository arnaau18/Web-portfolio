"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
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
            Sobre mí
          </h2>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main content - takes 3 columns */}
            <div className="lg:col-span-3 space-y-6 text-lg leading-relaxed text-zinc-400">
              <p>
                Pasé años compitiendo en los niveles más altos del eSports
                profesional en League of Legends. La disciplina extrema, el
                trabajo en equipo bajo presión y las decisiones rápidas y
                precisas definieron mi carrera como jugador.
              </p>

              <p>
                Hoy aplico esa misma mentalidad al desarrollo de software.
                Estudio Desarrollo de Aplicaciones Multiplataforma, dominando
                tecnologías como Java, SQL y Git mientras construyo aplicaciones
                modernas.
              </p>

              <p>
                Esta transición no es un cambio de carrera, es la evolución
                natural de alguien que busca la excelencia, la mejora continua y
                el dominio de sistemas complejos.
              </p>
            </div>

            {/* Side stats - takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-4xl font-bold text-teal-400 mb-2">2024</div>
                <div className="text-sm text-zinc-400">
                  Estudiante activo DAM
                </div>
              </div>

              <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-4xl font-bold text-teal-400 mb-2">Pro</div>
                <div className="text-sm text-zinc-400">
                  Experiencia en eSports profesional
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
