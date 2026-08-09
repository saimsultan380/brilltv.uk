"use client";

import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type SectionHeaderProps = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  animate?: boolean;
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  animate = true,
}: SectionHeaderProps) {
  const headerClass = `telvis-section-header${align === "center" ? " is-center" : ""}`;

  if (!animate) {
    return (
      <header className={headerClass}>
        {eyebrow ? <p className="telvis-section-eyebrow">{eyebrow}</p> : null}
        <h2 id={id} className="telvis-section-title">
          {title}
        </h2>
        {lead ? <p className="telvis-section-lead">{lead}</p> : null}
      </header>
    );
  }

  return (
    <header className={headerClass}>
      {eyebrow ? (
        <ScrollReveal delay={0} variant="text">
          <p className="telvis-section-eyebrow">{eyebrow}</p>
        </ScrollReveal>
      ) : null}
      <ScrollReveal delay={eyebrow ? 0.06 : 0} variant="text">
        <h2 id={id} className="telvis-section-title">
          {title}
        </h2>
      </ScrollReveal>
      {lead ? (
        <ScrollReveal delay={eyebrow ? 0.12 : 0.06} variant="text">
          <p className="telvis-section-lead">{lead}</p>
        </ScrollReveal>
      ) : null}
    </header>
  );
}

export function TitleAccent({ children }: { children: ReactNode }) {
  return <span className="telvis-h1-accent">{children}</span>;
}
