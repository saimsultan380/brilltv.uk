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
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={motionViewport}
      transition={{ duration: 0.34, delay, ease: motionEase }}
    >
      {children}
    </Component>
  );
}

export function CardRevealPart({
  children,
  className,
  as = "div",
}: CardRevealPartProps) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}

export function CardRevealList({
  children,
  className,
  as = "ul",
}: CardRevealListProps) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}

export function CardRevealListItem({
  children,
  className,
  as = "li",
}: CardRevealListItemProps) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}
