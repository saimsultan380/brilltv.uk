"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { heroRevealDuration, motionEase } from "@/lib/motion";

type HeroTitleRevealProps = {
  id?: string;
  className?: string;
  lines: ReactNode[];
};

export function HeroTitleReveal({
  id,
  className,
  lines,
}: HeroTitleRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <h1 id={id} className={className}>
      {lines.map((line, index) => (
        <span key={index} className="telvis-h1-reveal-line">
          <motion.span
            className="telvis-h1-reveal-text telvis-motion-reveal"
            initial={
              reduceMotion
                ? false
                : {
                    y: "112%",
                    skewY: 7,
                    opacity: 0,
                    filter: "blur(10px)",
                  }
            }
            animate={{
              y: "0%",
              skewY: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: heroRevealDuration,
              delay: 0.12 + index * 0.1,
              ease: motionEase,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
