"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { TextRoll } from "@/components/ui/text-roll";

export default function ZoomHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const circleScale = useTransform(scrollYProgress, [0, 1], [1, 2.5]);
  const circleOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.9, 0.3]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.3, 0]);

  return (
    <div ref={containerRef} className="h-[130vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-6xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none mb-6 font-[family-name:var(--font-space-grotesk)]">
              <TextRoll
                className="text-white"
                onAnimationComplete={() => setShowSubtitle(true)}
              >
                Arnau Fores Garcia
              </TextRoll>
            </h1>

            {showSubtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-lg md:text-xl text-zinc-400 font-normal tracking-wide"
              >
                Full Stack Developer
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.3 }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-xs text-zinc-600 uppercase tracking-[0.25em] font-medium"
            >
              Scroll
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
