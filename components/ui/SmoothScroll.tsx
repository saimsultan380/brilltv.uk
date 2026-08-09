"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";
import "lenis/dist/lenis.css";

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!enabled) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        duration: 1.05,
        smoothWheel: true,
        anchors: true,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}
