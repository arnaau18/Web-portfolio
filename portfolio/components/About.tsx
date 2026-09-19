"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// About section with glassmorphism card
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Sobre Mí
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 md:p-12 hover:bg-white/[0.03] transition-all duration-700 group relative overflow-hidden"
        >
          {/* Decorative glow effect on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/[0.03] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/[0.03] rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 space-y-6 text-foreground/70 text-lg leading-relaxed">
            <p>
              Mi trayectoria es única: pasé de competir en los más altos niveles del <span className="font-semibold">eSports profesional en League of Legends</span> a dedicarme al <span className="font-semibold">desarrollo de software</span>.
            </p>

            <p>
              Durante años, la <span className="font-semibold">disciplina extrema</span>, el <span className="font-semibold">trabajo en equipo bajo presión</span>, y la capacidad de tomar <span className="font-semibold">decisiones rápidas y precisas</span> fueron el día a día en mi carrera como jugador profesional. Estas habilidades no solo me definieron como competidor, sino que ahora son la base de mi enfoque como desarrollador.
            </p>

            <p>
              Actualmente estoy cursando <span className="font-semibold">Desarrollo de Aplicaciones Multiplataforma (DAM)</span>, donde aplico esa misma mentalidad competitiva para dominar tecnologías como <span className="font-semibold">Java, SQL, Git</span>, y el desarrollo de aplicaciones modernas.
            </p>

            <p>
              La transición del gaming profesional a la programación no es solo un cambio de carrera, es la evolución natural de alguien que siempre ha buscado la <span className="font-semibold">excelencia</span>, la <span className="font-semibold">mejora continua</span>, y el dominio de sistemas complejos.
            </p>
          </div>

          {/* Corner accent - more subtle */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/[0.05] to-transparent rounded-bl-full opacity-50" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/[0.05] to-transparent rounded-tr-full opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
