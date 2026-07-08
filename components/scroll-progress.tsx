"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 24,
    mass: 0.2
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[80] h-px w-full origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400"
      style={{ scaleX }}
    />
  );
}
