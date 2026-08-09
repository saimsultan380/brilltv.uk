"use client";

import { useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { getMotionComponent, motionEase, motionViewport } from "@/lib/motion";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "article" | "li" | "p" | "section" | "details";
  style?: CSSProperties;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 0,
  as = "div",
  style,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

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
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionViewport}
      transition={{ duration: 0.24, delay, ease: motionEase }}
    >
      {children}
    </MotionTag>
  );
}
