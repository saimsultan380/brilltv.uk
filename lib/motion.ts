export const motionEase = [0.22, 1, 0.36, 1] as const;

export const motionViewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -60px 0px",
} as const;

export function staggerDelay(index: number, step = 0.08) {
  return index * step;
}
