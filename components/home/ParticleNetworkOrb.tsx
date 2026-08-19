"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function BrandMark() {
  return (
    <Image
      src="/logo-new.PNG"
      alt="IPTV UK Logo"
      width={44}
      height={44}
      style={{ objectFit: "contain" }}
      priority
    />
  );
}

function FeatureCard({
  icon,
  title,
  meta,
  className = "",
}: {
  icon: string;
  title: string;
  meta: string;
  className?: string;
}) {
  return (
    <div className={`feature-card ${className}`}>
      <span className="feature-icon">{icon}</span>

      <span>
        <strong>{title}</strong>
        <small>{meta}</small>
      </span>

      <i className="feature-dot" />
    </div>
  );
}

export function ParticleNetworkOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const host = canvas?.parentElement;

    if (!canvas || !context || !host) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let animation = 0;

    const count = 118;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    /*
     * Distribute particles evenly around a sphere
     * using the Fibonacci sphere method.
     */
    const points = Array.from({ length: count }, (_, index) => {
      const y = 1 - (index / (count - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = goldenAngle * index;

      return {
        x: Math.cos(theta) * radius,
        y,
        z: Math.sin(theta) * radius,
      };
    });

    const resize = () => {
      const rect = host.getBoundingClientRect();

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * ratio;
      canvas.height = height * ratio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const render = () => {
      frame += 0.006;

      context.clearRect(0, 0, width, height);

      const size = Math.min(width, height) * 0.335;
      const centerX = width * 0.5;
      const centerY = height * 0.44;

      /*
       * Smooth automatic 3D rotation in continuous infinite loop.
       */
      const angleY = frame;
      const angleX = -0.18 + Math.sin(frame * 0.7) * 0.06;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      /*
       * Central red atmosphere glow.
       */
      const glow = context.createRadialGradient(
        centerX,
        centerY,
        size * 0.08,
        centerX,
        centerY,
        size * 1.25
      );

      glow.addColorStop(0, "rgba(204,31,60,.18)");
      glow.addColorStop(0.46, "rgba(204,31,60,.06)");
      glow.addColorStop(1, "rgba(255,255,255,0)");

      context.fillStyle = glow;
      context.beginPath();
      context.arc(centerX, centerY, size * 1.35, 0, Math.PI * 2);
      context.fill();

      /*
       * Rotate and project the 3D points onto the canvas.
       */
      const projected = points.map((point, index) => {
        const wobble =
          1 + Math.sin(frame * 2.2 + index * 0.31) * 0.028;

        const x1 = point.x * cosY - point.z * sinY;
        const z1 = point.x * sinY + point.z * cosY;

        const y2 = point.y * cosX - z1 * sinX;
        const z2 = point.y * sinX + z1 * cosX;

        const perspective = 1.04 + z2 * 0.14;

        return {
          x: centerX + x1 * size * wobble * perspective,
          y: centerY + y2 * size * wobble * perspective,
          z: z2,
          alpha: 0.28 + (z2 + 1) * 0.3,
        };
      });

      /*
       * Draw connections between nearby particles.
       */
      for (let i = 0; i < projected.length; i += 1) {
        for (let j = i + 1; j < projected.length; j += 1) {
          const a = projected[i];
          const b = projected[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (
            distance < size * 0.29 &&
            Math.abs(a.z - b.z) < 0.42
          ) {
            const opacity = Math.max(
              0.035,
              (1 - distance / (size * 0.29)) *
                0.31 *
                ((a.alpha + b.alpha) / 2)
            );

            context.strokeStyle = `rgba(204,31,60,${opacity})`;
            context.lineWidth = 0.8;

            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      /*
       * Draw rear particles first and foreground
       * particles last to create depth.
       */
      projected
        .sort((a, b) => a.z - b.z)
        .forEach((point) => {
          const radius = 1.15 + (point.z + 1) * 0.72;

          context.fillStyle = `rgba(204,31,60,${point.alpha})`;

          context.beginPath();
          context.arc(
            point.x,
            point.y,
            radius,
            0,
            Math.PI * 2
          );
          context.fill();
        });

      animation = requestAnimationFrame(render);
    };

    const observer = new ResizeObserver(resize);

    observer.observe(host);

    resize();
    render();

    return () => {
      cancelAnimationFrame(animation);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="particle-animation-slot">
      <div
        className="visual-stage particle-stage"
        aria-label="Animated particle network orb"
      >
        <canvas ref={canvasRef} />

        <div className="orb-core">
          <BrandMark />
          <small>Brill TV UK</small>
        </div>

        <FeatureCard
          icon="▶"
          title="Live Sports"
          meta="Playing now"
          className="particle-float particle-float--one"
        />

        <FeatureCard
          icon="▤"
          title="Smart EPG"
          meta="Updated live"
          className="particle-float particle-float--two"
        />

        <FeatureCard
          icon="4K"
          title="Ultra HD"
          meta="Where available"
          className="particle-float particle-float--three"
        />

        <span className="particle-caption">
          <i /> Network connected · 12 ms
        </span>
      </div>
    </div>
  );
}
