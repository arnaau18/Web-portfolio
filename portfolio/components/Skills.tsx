"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, GitBranch, Terminal, Braces, FileCode } from "lucide-react";

// Skills section with bento box layout
export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      name: "Java",
      icon: Code2,
      color: "from-orange-500 to-red-500",
      description: "Desarrollo backend y POO"
    },
    {
      name: "SQL",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      description: "Bases de datos relacionales"
    },
    {
      name: "Git",
      icon: GitBranch,
      color: "from-orange-600 to-red-600",
      description: "Control de versiones"
    },
    {
      name: "VS Code",
      icon: Terminal,
      color: "from-blue-600 to-purple-600",
      description: "Entorno de desarrollo"
    },
    {
      name: "JavaScript",
      icon: Braces,
      color: "from-yellow-500 to-orange-500",
      description: "Desarrollo web moderno"
    },
    {
      name: "TypeScript",
      icon: FileCode,
      color: "from-blue-500 to-blue-700",
      description: "JavaScript tipado"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div ref={ref} className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Habilidades
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-[0.03] blur-xl`} />
                </div>

                <div className="relative z-10">
                  {/* Icon with gradient */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Skill name */}
                  <h3 className="text-2xl font-bold mb-2 text-foreground/90">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/50 text-sm">
                    {skill.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/[0.05] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
