"use client";

import { motion, type MotionProps } from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    delay?: number;
    y?: number;
  };

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({
  children,
  className,
  delay = 0
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const words = children.split(" ");

  return (
    <span className={cn("inline-block overflow-hidden", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="mr-[0.25em] inline-block"
          initial={{ y: "110%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + index * 0.035
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
