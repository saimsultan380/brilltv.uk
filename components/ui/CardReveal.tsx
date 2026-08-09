"use client";

import { useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import {
  cardRevealVariants,
  getMotionComponent,
  motionViewport,
} from "@/lib/motion";

type CardRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "article" | "li" | "div" | "details";
  style?: CSSProperties;
  id?: string;
  role?: string;
  hidden?: boolean;
  "aria-labelledby"?: string;
};

type CardRevealPartProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "icon" | "content";
  as?: "div" | "h2" | "h3" | "p" | "span" | "summary" | "figcaption";
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
  id,
  role,
  hidden,
  "aria-labelledby": ariaLabelledby,
}: CardRevealProps) {
  const reduceMotion = useReducedMotion();
  const tagProps = {
    className: `telvis-motion-reveal${className ? ` ${className}` : ""}`,
    id,
    role,
    hidden,
    "aria-labelledby": ariaLabelledby,
    style,
  };

  if (reduceMotion) {
    const Tag = as;
    return <Tag {...tagProps}>{children}</Tag>;
  }

  const MotionTag = getMotionComponent(as);

  return (
    <MotionTag
      {...tagProps}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      variants={cardRevealVariants}
    >
      {children}
    </MotionTag>
  );
}

export function CardRevealPart({
  children,
  className,
  id,
  as = "div",
}: CardRevealPartProps) {
  const Tag = as;

  return (
    <Tag className={className} id={id}>
      {children}
    </Tag>
  );
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
