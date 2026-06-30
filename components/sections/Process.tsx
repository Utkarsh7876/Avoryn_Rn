"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processSteps } from "@/lib/constants";

export function Process() {
  return (
    <section className="section-shell section-space">
      <RevealOnScroll className="max-w-3xl">
        <SectionLabel label="How We Work" />
        <h2 className="mt-6 text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] text-textPrimary">
          Our process is
          <br />
          the product.
        </h2>
      </RevealOnScroll>

      <div className="relative mt-16">
        <div className="absolute left-10 right-10 top-7 hidden border-t border-borderSubtle lg:block" />
        <div className="grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.number} delay={index * 0.08}>
              <article className="relative rounded-[28px] border border-borderSubtle bg-panel p-6">
                <p className="font-display text-sm font-bold tracking-[0.2em] text-accent">
                  {step.number}
                </p>
                <h3 className="mt-5 text-[24px] font-semibold text-textPrimary">
                  {step.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-textSecondary">
                  {step.body}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
