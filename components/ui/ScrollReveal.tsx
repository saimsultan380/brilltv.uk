"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { motionEase, motionViewport } from "@/lib/motion";

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
  y = 28,
  as = "div",
  style,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={className}
      style={style}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionViewport}
      transition={{ duration: 0.65, delay, ease: motionEase }}
    >
      {children}
    </Component>
  );
}

type ScrollStaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  itemClassName?: string;
};

export function ScrollStagger({
  children,
  className,
  stagger = 0.08,
  itemClassName,
}: ScrollStaggerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ ...motionViewport, amount: 0.12, margin: "0px 0px -50px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div
              key={index}
              className={itemClassName}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: motionEase },
                },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
