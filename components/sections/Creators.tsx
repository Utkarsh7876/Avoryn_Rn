"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

import RevealOnScroll from "@/components/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { creators } from "@/lib/creators";

const track = [...creators, ...creators];

function CreatorCard({
  creator,
  index,
}: {
  creator: (typeof creators)[number];
  index: number;
}) {
  // Track which src to attempt: "jpg" → "png" → "error"
  const [srcState, setSrcState] = useState<"jpg" | "png" | "error">("jpg");
  const initial = creator.name.charAt(0).toUpperCase();

  const currentSrc =
    srcState === "jpg"
      ? `${creator.image}.jpg`
      : srcState === "png"
        ? `${creator.image}.png`
        : null;

  const handleError = () => {
    if (srcState === "jpg") setSrcState("png");
    else setSrcState("error");
  };

  const card = (
    <motion.article
      className="group relative w-[220px] shrink-0 snap-start md:w-[260px]"
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <div className="relative overflow-hidden rounded-[28px] border border-borderSubtle bg-panel shadow-panel transition duration-300 group-hover:border-accent/60 group-hover:shadow-accent">
        {/* Photo */}
        <div className="relative aspect-[4/5] overflow-hidden bg-panelStrong">
          {currentSrc ? (
            <Image
              src={currentSrc}
              alt={creator.name}
              fill
              className="object-cover object-top transition duration-500 group-hover:scale-110"
              sizes="260px"
              onError={handleError}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(200,255,0,0.18),transparent_0_42%),linear-gradient(160deg,#1a1a1a,#0d0d0d)]">
              <span className="font-display text-5xl font-bold text-accent/40">
                {initial}
              </span>
            </div>
          )}
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Name + handle over the photo */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-display text-base font-bold leading-tight text-white">
              {creator.name}
            </p>
            <p className="mt-0.5 text-xs font-medium text-accent/90">
              {creator.handle}
            </p>
          </div>
        </div>

        {/* Footer strip */}
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-xs text-textSecondary">{creator.niche}</span>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#C8FF00",
              letterSpacing: "0.04em",
            }}
          >
            {creator.followers}
          </span>
        </div>

        {/* Decorative glow blob */}
        <motion.div
          className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full bg-accent/20 blur-2xl"
          animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{
            duration: 3 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.article>
  );

  if (creator.instagramUrl) {
    return (
      <Link
        href={creator.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        {card}
      </Link>
    );
  }

  return card;
}

export function Creators() {
  return (
    <section id="creators" className="section-space overflow-hidden">
      <div className="section-shell">
        <RevealOnScroll className="max-w-3xl">
          <SectionLabel label="Our Creators" />
          <h2 className="mt-6 text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] text-textPrimary">
            Creators we&apos;ve
            <br />
            worked with.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-textSecondary">
            The creators behind campaigns that drive real engagement and
            results for brands across India.
          </p>
        </RevealOnScroll>
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent md:w-24" />

        <div className="creators-marquee-track px-6 md:px-10">
          {track.map((creator, index) => (
            <CreatorCard
              key={`${creator.handle}-${index}`}
              creator={creator}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
