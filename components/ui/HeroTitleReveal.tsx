"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

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
            className="telvis-h1-reveal-text"
            initial={
              reduceMotion
                ? false
                : {
                    y: "112%",
                    skewY: 7,
                    opacity: 0,
                  }
            }
            animate={{
              y: "0%",
              skewY: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.82,
              delay: 0.1 + index * 0.1,
              ease,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
