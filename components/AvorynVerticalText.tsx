"use client";

const LETTERS = ["A", "V", "O", "R", "Y", "N"];
const TOTAL_DURATION = 3; // seconds for one full cycle
const GLOW_DURATION = 0.5; // seconds each letter glows
const STAGGER = TOTAL_DURATION / LETTERS.length;

export default function AvorynVerticalText({ className = "" }: { className?: string }) {
  return (
    <>
      <style>{`
        /* glow duration per letter: ${GLOW_DURATION}s */
        @keyframes letterGlow {
          0%, 100% {
            color: #1a2200;
            -webkit-text-stroke: 1px #2a3300;
            text-shadow: none;
          }
          15% {
            color: #C8FF00;
            -webkit-text-stroke: 1px #C8FF00;
            text-shadow:
              0 0 10px #C8FF0099,
              0 0 24px #C8FF0055,
              0 0 48px #C8FF0022;
          }
          35% {
            color: #1a2200;
            -webkit-text-stroke: 1px #2a3300;
            text-shadow: none;
          }
        }
        .avoryn-letter {
          display: block;
          line-height: 1;
          font-weight: 800;
          font-size: clamp(1.8rem, 3vw, 3.2rem);
          letter-spacing: 0.04em;
          user-select: none;
          color: #1a2200;
          -webkit-text-stroke: 1px #2a3300;
          animation: letterGlow ${TOTAL_DURATION}s ease-in-out infinite;
          will-change: color, text-shadow;
        }
        @media (prefers-reduced-motion: reduce) {
          .avoryn-letter { animation: none; color: #2a3300; }
        }
      `}</style>
      <div
        aria-label="AVORYN"
        role="img"
        className={className}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.05rem",
          position: "absolute",
          right: "2.5vw",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className="avoryn-letter"
            style={{
              fontFamily: "var(--font-syne), 'Syne', sans-serif",
              animationDelay: `${i * STAGGER}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </>
  );
}
