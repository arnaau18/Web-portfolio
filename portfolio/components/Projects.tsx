"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, ArrowUpRight } from "lucide-react";

// Projects section with "coming soon" placeholders
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Proyecto en Desarrollo",
      description: "Actualmente trabajando en un proyecto innovador que será publicado próximamente. Este espacio está reservado para mostrar mi trabajo en desarrollo de aplicaciones.",
      tags: ["Java", "SQL", "Spring Boot"],
      status: "Próximamente"
    },
    {
      title: "Proyecto en Desarrollo",
      description: "Un segundo proyecto en fase de desarrollo que demostrará mis habilidades en tecnologías modernas y arquitecturas escalables.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      status: "Próximamente"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Proyectos
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 group cursor-pointer relative overflow-hidden h-full flex flex-col"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-secondary/[0.03] blur-xl" />
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                {/* Status badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/20 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent/80" />
                    <span className="text-sm font-semibold text-accent/80">{project.status}</span>
                  </div>
                </div>

                {/* Project title */}
                <h3 className="text-3xl font-bold mb-4 text-foreground/90 group-hover:text-primary/90 transition-colors duration-500">
                  {project.title}
                </h3>

                {/* Project description */}
                <p className="text-foreground/50 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-md bg-primary/5 text-primary/80 border border-primary/10 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View project link (disabled for now) */}
                <div className="flex items-center gap-2 text-foreground/30 cursor-not-allowed">
                  <span className="text-sm">En desarrollo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/[0.05] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/[0.05] to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
