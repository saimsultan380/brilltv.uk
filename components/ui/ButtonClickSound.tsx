"use client";

import { useEffect } from "react";

const CLICK_SOUND_SRC = "/button-click-sound.wav";

const BUTTON_SELECTORS = [
  "button",
  ".telvis-cta-primary",
  ".telvis-cta-secondary",
  ".telvis-cta-glass",
  ".telvis-nav-cta",
].join(", ");

export function ButtonClickSound() {
  useEffect(() => {
    const audio = new Audio(CLICK_SOUND_SRC);
    audio.preload = "auto";

    const playClickSound = () => {
      audio.currentTime = 0;
      void audio.play().catch(() => {});
    };

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest(BUTTON_SELECTORS)) return;

      playClickSound();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
