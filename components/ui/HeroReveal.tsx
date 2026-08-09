"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import {
  createScrollRevealVariants,
  heroRevealAnimate,
  heroRevealDuration,
  motionEase,
  type ScrollRevealVariant,
} from "@/lib/motion";

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: ScrollRevealVariant;
  style?: CSSProperties;
};

export function HeroReveal({
  children,
  className,
  delay = 0,
  variant = "text",
  style,
}: HeroRevealProps) {
  const reduceMotion = useReducedMotion();
  const preset = createScrollRevealVariants(variant).hidden;

  if (reduceMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`telvis-motion-reveal${className ? ` ${className}` : ""}`}
      style={style}
      initial={preset}
      animate={heroRevealAnimate}
      transition={{
        duration: variant === "cta" ? 0.52 : heroRevealDuration,
        delay,
        ease: motionEase,
      }}
    >
      {children}
    </motion.div>
  );
}
