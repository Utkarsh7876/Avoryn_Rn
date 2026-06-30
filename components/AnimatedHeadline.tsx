"use client";

import { motion } from "framer-motion";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
}

export default function AnimatedHeadline({ text, className = "" }: AnimatedHeadlineProps) {
  const lines = text.split("\n");

  return (
    <h1
      className={className}
      style={{ lineHeight: 1.05, paddingBottom: "0.15em" }}
      aria-label={text.replace(/\n/g, " ")}
    >
      {lines.map((line, lineIndex) => (
        <span
          key={lineIndex}
          style={{
            display: "block",
            // clipPath clips vertically only — words sliding up from below stay hidden
            // but the span grows to its natural width, so nothing is clipped horizontally
            paddingBottom: "0.2em",
            overflow: "visible",
          }}
        >
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: lineIndex * 0.12 + wordIndex * 0.055,
              }}
              style={{
                display: "inline-block",
                marginRight: "0.25em",
                // clip each word's upward reveal without constraining the span width
                clipPath: "inset(0 0 -30% 0)",
              }}
            >
              {word}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}
