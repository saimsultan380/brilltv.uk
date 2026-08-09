"use client";

import {
  Apple,
  Box,
  Cast,
  Gamepad2,
  Laptop,
  Monitor,
  PlayCircle,
  Router,
  Smartphone,
  TabletSmartphone,
  Tv,
  TvMinimal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GuideContent } from "@/components/installation/GuideContent";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import {
  installationDeviceTabs,
  installationGuideDefaultId,
} from "@/lib/installation-guide-data";

const MOBILE_QUERY = "(max-width: 767px)";

const guideDeviceIcons: Record<string, LucideIcon> = {
  "android-tv": Tv,
  "smart-tv": Monitor,
  "iphone-ipad": TabletSmartphone,
  "apple-tv": Apple,
  "android-mobile": Smartphone,
  windows: Laptop,
  mac: Laptop,
  roku: TvMinimal,
  chromecast: Cast,
  xbox: Gamepad2,
  "tv-box": Box,
  "mag-portal": Router,
  kodi: PlayCircle,
};

export function InstallationGuideTabs() {
  const [activeId, setActiveId] = useState(installationGuideDefaultId);
  const shouldScrollRef = useRef(false);

  useEffect(() => {
    if (!shouldScrollRef.current) return;
    shouldScrollRef.current = false;

    if (!window.matchMedia(MOBILE_QUERY).matches) return;

    const panel = document.getElementById(`guide-panel-${activeId}`);
    if (!panel) return;

    requestAnimationFrame(() => {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [activeId]);

  const handleTabClick = (id: string) => {
    if (id === activeId) return;
    shouldScrollRef.current = true;
    setActiveId(id);
  };

  return (
    <div className="telvis-guide-layout">
      <div
        className="telvis-guide-tabs"
        role="tablist"
        aria-label="Installation guide devices"
      >
        {installationDeviceTabs.map((section) => {
          const isActive = activeId === section.id;
          const Icon = guideDeviceIcons[section.id] ?? Monitor;

          return (
            <button
              key={section.id}
              type="button"
              role="tab"
              id={`guide-tab-${section.id}`}
              className={`telvis-guide-tab${isActive ? " is-active" : ""}`}
              aria-selected={isActive}
              aria-controls={`guide-panel-${section.id}`}
              onClick={() => handleTabClick(section.id)}
            >
              <span className="telvis-guide-tab-icon" aria-hidden="true">
                <Icon size={18} strokeWidth={1.9} />
              </span>
              <span className="telvis-guide-tab-label">{section.label}</span>
            </button>
          );
        })}
      </div>

      <div className="telvis-guide-panels">
        {installationDeviceTabs.map((section) => {
          const isActive = activeId === section.id;

          return (
            <CardReveal
              key={section.id}
              as="article"
              id={`guide-panel-${section.id}`}
              role="tabpanel"
              aria-labelledby={`guide-tab-${section.id}`}
              className={`telvis-glass telvis-guide-panel${isActive ? " is-active" : ""}`}
              hidden={!isActive}
            >
              <CardRevealPart as="h2" className="telvis-guide-panel-title">
                {section.title}
              </CardRevealPart>
              <CardRevealPart>
                <GuideContent blocks={section.blocks} />
              </CardRevealPart>
            </CardReveal>
          );
        })}
      </div>
    </div>
  );
}
