"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { motionEase } from "@/lib/motion";

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  style?: CSSProperties;
};

export function HeroReveal({
  children,
  className,
  delay = 0,
  y = 16,
  style,
}: HeroRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduceMotion ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, delay, ease: motionEase }}
    >
      {children}
    </motion.div>
  );
}
