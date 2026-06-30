"use client";

import { useRef, useEffect } from "react";

export interface Brand {
  name: string;
  logo: string; // path in /public e.g. "/brands/unstop.png"
}

const SPEED = 0.5; // px per frame

export default function BrandLogoMarquee({ brands }: { brands: Brand[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const singleSetWidth = track.scrollWidth / 3;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current -= SPEED;
        if (Math.abs(posRef.current) >= singleSetWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [brands]);

  const tripled = [...brands, ...brands, ...brands];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)",
      }}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "16px",
          willChange: "transform",
          width: "max-content",
        }}
      >
        {tripled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            style={{
              flexShrink: 0,
              width: "200px",
              height: "120px",
              borderRadius: "14px",
              border: "1px solid #1e1e1e",
              backgroundColor: "#0d0d0d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              transition: "border-color 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C8FF0066";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#1e1e1e";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                opacity: 0.85,
                transition: "opacity 0.25s ease, transform 0.25s ease",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = "1";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLImageElement).style.opacity = "0.85";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
