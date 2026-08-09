"use client";

import { useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import {
  createScrollRevealVariants,
  getMotionComponent,
  motionViewport,
  type ScrollRevealVariant,
} from "@/lib/motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: ScrollRevealVariant;
  as?: "div" | "article" | "li" | "p" | "section" | "details";
  style?: CSSProperties;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y,
  variant = "text",
  as = "div",
  style,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;
  const variants = createScrollRevealVariants(variant, y);

  if (reduceMotion) {
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const MotionTag = getMotionComponent(as);

  return (
    <MotionTag
      className={`telvis-motion-reveal${className ? ` ${className}` : ""}`}
      style={style}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
