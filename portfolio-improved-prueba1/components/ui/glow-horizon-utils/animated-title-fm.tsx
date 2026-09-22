"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AnimatedTitleFM({ open }: { open: boolean }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 1, ease: EASE, delay: 0.5 }}
      className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center"
    >
      Arnau Fores Garcia
    </motion.h1>
  );
}
