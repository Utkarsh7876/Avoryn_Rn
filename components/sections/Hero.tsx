"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

import AnimatedHeadline from "@/components/AnimatedHeadline";
import ServiceMarquee from "@/components/ServiceMarquee";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-stretch"
      style={{ minHeight: "100vh", paddingTop: "8rem", paddingBottom: "0" }}
    >
      {/* Background effects isolated — overflow hidden here only, not on the whole section */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute left-[-8%] top-[12%] h-72 w-72 rounded-full bg-[rgba(255,180,91,0.14)] blur-[120px]" />
        <div className="absolute bottom-[18%] right-[-2%] h-64 w-64 rounded-full bg-[rgba(200,255,0,0.08)] blur-[110px]" />
      </div>

      {/* Cursor glow follows mouse */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #C8FF0012 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      />

      <div className="section-shell relative z-[2] flex flex-1 items-center py-20" style={{ paddingBottom: "5rem" }}>
        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionLabel label="Influencer Marketing Agency" />
          </motion.div>

          <AnimatedHeadline
            text={"We build brands\nthat people\nactually remember."}
            className="mt-8 text-[clamp(52px,8vw,120px)] font-extrabold text-textPrimary"
          />

          <motion.p
            className="mt-8 max-w-xl text-lg leading-8 text-textSecondary"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Avoryn is an influencer marketing agency.
            <br />
            We connect brands with creators, craft campaigns,
            <br />
            and drive results that actually matter.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button
              href="#creators"
              className="px-8 py-4 font-display text-base"
              icon="arrow-right"
            >
              Meet Our Creators
            </Button>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-textSecondary transition hover:text-textPrimary"
            >
              <span className="nav-link pb-1">Get in Touch</span>
              <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      <ServiceMarquee />
    </section>
  );
}
