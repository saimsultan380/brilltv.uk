import type { CSSProperties, ReactNode } from "react";

type OrbitCardProps = {
  angle: number;
  icon: ReactNode;
  label: ReactNode;
};

export function OrbitCard({ angle, icon, label }: OrbitCardProps) {
  return (
    <div
      className="telvis-orbit-item"
      style={{ "--orbit-angle": `${angle}deg` } as CSSProperties}
    >
      <div className="telvis-orbit-card-shell">
        <div className="telvis-orbit-card-spin">
          <div className="telvis-orbit-card">
            {icon}
            <span>{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
