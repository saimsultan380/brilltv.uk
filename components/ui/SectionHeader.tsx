"use client";

import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type SectionHeaderProps = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
}: SectionHeaderProps) {
  return (
    <header
      className={`telvis-section-header${align === "center" ? " is-center" : ""}`}
    >
      {eyebrow ? (
        <ScrollReveal delay={0}>
          <p className="telvis-section-eyebrow">{eyebrow}</p>
        </ScrollReveal>
      ) : null}
      <ScrollReveal delay={eyebrow ? 0.06 : 0}>
        <h2 id={id} className="telvis-section-title">
          {title}
        </h2>
      </ScrollReveal>
      {lead ? (
        <ScrollReveal delay={eyebrow ? 0.12 : 0.06}>
          <p className="telvis-section-lead">{lead}</p>
        </ScrollReveal>
      ) : null}
    </header>
  );
}

export function TitleAccent({ children }: { children: ReactNode }) {
  return <span className="telvis-h1-accent">{children}</span>;
}
