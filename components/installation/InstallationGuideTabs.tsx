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
import { useState } from "react";
import { GuideContent } from "@/components/installation/GuideContent";
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

  const handleTabClick = (id: string) => {
    setActiveId(id);

    if (!window.matchMedia(MOBILE_QUERY).matches) {
      return;
    }

    const panel = document.getElementById(`guide-panel-${id}`);
    panel?.scrollIntoView({ behavior: "smooth", block: "start" });
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
            <article
              key={section.id}
              id={`guide-panel-${section.id}`}
              role="tabpanel"
              aria-labelledby={`guide-tab-${section.id}`}
              className={`telvis-glass telvis-guide-panel${isActive ? " is-active" : ""}`}
              hidden={!isActive}
            >
              <h2 className="telvis-guide-panel-title">{section.title}</h2>
              <GuideContent blocks={section.blocks} />
            </article>
          );
        })}
      </div>
    </div>
  );
}
