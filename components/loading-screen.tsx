"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1550);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#030409]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeOut" } }}
        >
          <div className="relative grid place-items-center">
            <motion.div
              aria-hidden="true"
              className="absolute h-40 w-40 rounded-full border border-cyan-200/20"
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute h-24 w-24 rounded-full border border-fuchsia-200/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-glow backdrop-blur-xl">
              <BrainCircuit className="h-8 w-8 text-cyan-100" />
            </div>
            <motion.p
              className="mt-8 text-sm font-medium text-white/70"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              Initializing AI lab
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
