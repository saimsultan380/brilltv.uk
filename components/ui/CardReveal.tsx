"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ElementType, ReactNode } from "react";
import { motionEase, motionViewport } from "@/lib/motion";

const motionTagCache = new Map<string, ElementType>();

function getMotionComponent(tag: string): ElementType {
  const cached = motionTagCache.get(tag);
  if (cached) return cached;

  const motionRecord = motion as unknown as Record<string, ElementType | undefined>;
  const component = motionRecord[tag] ?? motion.create(tag);
  motionTagCache.set(tag, component);
  return component;
}

const cardVariants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      duration: 0.45,
      delay,
      ease: motionEase,
      when: "beforeChildren",
      staggerChildren: 0.09,
    },
  }),
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.84, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: motionEase },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: motionEase },
  },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

type CardRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "article" | "li" | "div" | "details";
  style?: CSSProperties;
};

type CardRevealPartProps = {
  children: ReactNode;
  className?: string;
  variant?: "icon" | "content";
  as?: "div" | "h3" | "p" | "span" | "summary";
};

type CardRevealListProps = {
  children: ReactNode;
  className?: string;
  as?: "ul" | "tbody";
};

type CardRevealListItemProps = {
  children: ReactNode;
  className?: string;
  as?: "li" | "tr";
};

export function CardReveal({
  children,
  className,
  delay = 0,
  as = "article",
  style,
}: CardRevealProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) {
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const Component = getMotionComponent(as);

  return (
    <Component
      className={className}
      style={style}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={cardVariants}
    >
      {children}
    </Component>
  );
}

export function CardRevealPart({
  children,
  className,
  variant = "content",
  as = "div",
}: CardRevealPartProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;
  const variants = variant === "icon" ? iconVariants : contentVariants;

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = getMotionComponent(as);

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}

export function CardRevealList({
  children,
  className,
  as = "ul",
}: CardRevealListProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = getMotionComponent(as);

  return (
    <Component className={className} variants={listVariants}>
      {children}
    </Component>
  );
}

export function CardRevealListItem({
  children,
  className,
  as = "li",
}: CardRevealListItemProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as;

  if (reduceMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const Component = getMotionComponent(as);

  return (
    <Component className={className} variants={contentVariants}>
      {children}
    </Component>
  );
}
