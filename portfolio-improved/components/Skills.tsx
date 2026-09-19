"use client";

import { motion, useReducedMotion, useInView } from "motion/react";
import { useRef } from "react";
import {
  Code,
  Database,
  GitBranch,
  Terminal,
  FileJs,
  FileTs,
} from "@phosphor-icons/react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

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
      className="min-h-[100dvh] flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-zinc-50">
            Stack técnico
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-6 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300 group"
                >
                  <Icon
                    weight="bold"
                    className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="font-bold text-lg mb-1 text-zinc-50">{skill.name}</h3>
                  <p className="text-sm text-zinc-400">{skill.level}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
