import Image from "next/image";
import type { ReactNode } from "react";
import {
  FavouriteIcon,
  MovieIcon,
  PlayIcon,
  SeriesIcon,
  TvIcon,
} from "@/components/icons/OrbitIcons";
import { OrbitCard } from "@/components/home/OrbitCard";

const CX = 200;
const CY = 200;
const RADIUS = 192;
const VIEW = 400;

/** Card angles in degrees (0 = 3 o'clock, clockwise positive, SVG y-down). */
const ORBIT_ITEMS: {
  angle: number;
  label: ReactNode;
  icon: ReactNode;
}[] = [
  { angle: -90, label: "Live TV", icon: <TvIcon /> },
  { angle: -18, label: "Series", icon: <SeriesIcon /> },
  {
    angle: 54,
    label: (
      <>
        Continue
        <br />
        Watching
      </>
    ),
    icon: <PlayIcon />,
  },
  { angle: 126, label: "Favourites", icon: <FavouriteIcon /> },
  { angle: 198, label: "Movies", icon: <MovieIcon /> },
];

function toRad(deg: number) {
  return (deg * Math.PI) / 180;
}

function polar(angleDeg: number, radius = RADIUS) {
  const rad = toRad(angleDeg);
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

function normalizeAngle(deg: number) {
  let value = deg;
  while (value < 0) value += 360;
  while (value >= 360) value -= 360;
  return value;
}

function arcPath(startDeg: number, endDeg: number, radius = RADIUS) {
  const start = polar(startDeg, radius);
  const end = polar(endDeg, radius);
  let delta = normalizeAngle(endDeg - startDeg);
  if (delta <= 0) delta += 360;
  const largeArc = delta > 180 ? 1 : 0;

  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

const CARD_GAP = 16;

function buildArcs() {
  return ORBIT_ITEMS.map((item, index) => {
    const next = ORBIT_ITEMS[(index + 1) % ORBIT_ITEMS.length];
    let start = item.angle + CARD_GAP;
    let end = next.angle - CARD_GAP;

    if (end <= start) end += 360;

    return {
      key: `arc-${index}`,
      d: arcPath(start, end),
    };
  });
}

export function OrbitVisual() {
  const arcs = buildArcs();

  return (
    <div className="telvis-visual" aria-hidden="true">
      <div className="telvis-orbit-rotator">
        <svg
          className="telvis-orbit-svg"
          viewBox={`0 0 ${VIEW} ${VIEW}`}
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="telvis-orbit-stroke"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#5262FF" />
              <stop offset="45%" stopColor="#8250FF" />
              <stop offset="100%" stopColor="#C14BFF" />
            </linearGradient>

            <filter
              id="telvis-orbit-glow"
              x="-40%"
              y="-40%"
              width="180%"
              height="180%"
            >
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <marker
              id="telvis-orbit-arrow"
              markerWidth="14"
              markerHeight="14"
              refX="10"
              refY="7"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path
                d="M2 2 L12 7 L2 12 L5 7 Z"
                fill="#D7B7FF"
                stroke="#E8D4FF"
                strokeWidth="0.6"
              />
            </marker>
          </defs>

          <circle cx={CX} cy={CY} r={RADIUS} className="telvis-orbit-guide" />

          {arcs.map((arc) => (
            <g key={arc.key} filter="url(#telvis-orbit-glow)">
              <path d={arc.d} className="telvis-orbit-arc" />
              <path
                d={arc.d}
                className="telvis-orbit-arc-arrow"
                markerEnd="url(#telvis-orbit-arrow)"
              />
            </g>
          ))}
        </svg>

        {ORBIT_ITEMS.map((item, index) => (
          <OrbitCard
            key={index}
            angle={item.angle}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>

      <div className="telvis-orbit-logo">
        <Image
          src="/logo-mark.png"
          alt=""
          width={120}
          height={120}
          priority
        />
      </div>
    </div>
  );
}
