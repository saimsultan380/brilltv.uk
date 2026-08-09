import { motion } from "motion/react";
import type { ElementType } from "react";

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionViewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -2% 0px",
} as const;

export const cardMotionDuration = 0.22;
export const cardPartMotionDuration = 0.18;
export const cardStaggerStep = 0.03;
export const cardChildrenStagger = 0.035;

export function staggerDelay(index: number, step = cardStaggerStep) {
  return index * step;
}

const motionTagCache = new Map<string, ElementType>();

export function getMotionComponent(tag: string): ElementType {
  const cached = motionTagCache.get(tag);
  if (cached) return cached;

  const motionRecord = motion as unknown as Record<string, ElementType | undefined>;
  const component = motionRecord[tag] ?? motion.create(tag);
  motionTagCache.set(tag, component);
  return component;
}
