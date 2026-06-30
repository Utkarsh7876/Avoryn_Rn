"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { aboutStats } from "@/lib/constants";

export function AboutBlurb() {
  return (
    <section id="about" className="section-shell section-space">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <RevealOnScroll>
          <SectionLabel label="Who We Are" />
          <h2 className="mt-6 max-w-3xl text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] text-textPrimary">
            We don&apos;t just market.
            <br />
            We make things matter.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll className="lg:pt-16" delay={0.12}>
          <p className="max-w-xl text-base leading-8 text-textSecondary">
            Avoryn is built differently. Every campaign gets our full thinking —
            creator matching, strategy, and execution — all under one roof.
            No handoffs. No dilution.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {aboutStats.map((stat, index) => (
              <RevealOnScroll key={stat.label} delay={0.1 + index * 0.1}>
                <div className="rounded-[28px] border border-borderSubtle bg-panel px-6 py-8">
                  <p className="font-display text-5xl font-bold text-textPrimary">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-[13px] uppercase tracking-[0.18em] text-textSecondary">
                    {stat.label}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
