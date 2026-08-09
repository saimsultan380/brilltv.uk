import type { LucideIcon } from "lucide-react";

type GlassIconProps = {
  icon: LucideIcon;
  className?: string;
};

export function GlassIcon({ icon: Icon, className = "" }: GlassIconProps) {
  return (
    <span className={`telvis-icon-badge ${className}`.trim()}>
      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
