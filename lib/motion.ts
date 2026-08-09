export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionViewport = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -24px 0px",
} as const;

export function staggerDelay(index: number, step = 0.05) {
  return index * step;
}
