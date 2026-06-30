"use client";

import { useState } from "react";

interface BrandLogoCardProps {
  name: string;
  logo: string; // path to logo image e.g. "/logos/brand.png" or "/logos/brand.svg"
  href?: string;
}

export default function BrandLogoCard({ name, logo, href }: BrandLogoCardProps) {
  const [hovered, setHovered] = useState(false);

  const card = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "3 / 2",
        borderRadius: "12px",
        overflow: "hidden",
        border: hovered ? "1px solid #C8FF0066" : "1px solid #1e1e1e",
        backgroundColor: "#0d0d0d",
        cursor: href ? "pointer" : "default",
        transition: "border-color 0.25s ease",
      }}
    >
      {/* Full-bleed logo image */}
      <img
        src={logo}
        alt={name}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          padding: "20px",
          filter: hovered
            ? "brightness(1.2)"
            : "brightness(0.7) grayscale(0.3)",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "filter 0.3s ease, transform 0.35s ease",
        }}
      />
      {/* Hover overlay — very subtle lime tint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered ? "rgba(200,255,0,0.04)" : "transparent",
          transition: "background 0.3s ease",
          borderRadius: "12px",
          pointerEvents: "none",
        }}
      />
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "block" }}
      >
        {card}
      </a>
    );
  }

  return card;
}
