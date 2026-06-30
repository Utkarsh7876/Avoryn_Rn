"use client";

import { useRef, useEffect } from "react";

const SERVICES = [
  "UGC Content",
  "Reels & Short Form",
  "Brand Campaigns",
  "Influencer Strategy",
  "Content Creation",
  "Paid Media",
  "Creator Partnerships",
  "Performance Marketing",
];

const SPEED = 0.6; // px per frame — lower = slower

export default function ServiceMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const singleWidth = track.scrollWidth / 3;

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current -= SPEED;
        if (Math.abs(posRef.current) >= singleWidth) {
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
  }, []);

  const allItems = [...SERVICES, ...SERVICES, ...SERVICES];

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        borderTop: "1px solid #1e1e1e",
        borderBottom: "1px solid #1e1e1e",
        paddingTop: "14px",
        paddingBottom: "14px",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
        cursor: "default",
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
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexShrink: 0,
              paddingLeft: "40px",
              paddingRight: "40px",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#666666",
              fontFamily: "Inter, sans-serif",
              gap: "40px",
            }}
          >
            {item}
            <span
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#C8FF00",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
