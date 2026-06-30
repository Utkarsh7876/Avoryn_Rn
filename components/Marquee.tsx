"use client";

import { useEffect, useRef } from "react";

import { heroMarquee } from "@/lib/constants";

const ITEMS = heroMarquee.map((item) => item.toUpperCase());

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);
  const speedRef = useRef(1);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const itemWidth = track.scrollWidth / 2;

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current -= speedRef.current;
        if (Math.abs(posRef.current) >= itemWidth) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const handleWheel = (e: WheelEvent) => {
      speedRef.current =
        e.deltaY > 0
          ? Math.min(speedRef.current + 0.3, 4)
          : Math.max(speedRef.current - 0.3, 0.5);
      setTimeout(() => {
        speedRef.current = 1;
      }, 300);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const allItems = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      className="w-full overflow-hidden border-t border-b border-borderSubtle py-3"
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        style={{ display: "flex", whiteSpace: "nowrap", willChange: "transform" }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center pr-12 text-[13px] font-medium uppercase tracking-[0.14em] text-textTertiary"
          >
            {item}
            <span className="ml-12 h-1.5 w-1.5 rounded-full bg-accent/60" />
          </span>
        ))}
      </div>
    </div>
  );
}
