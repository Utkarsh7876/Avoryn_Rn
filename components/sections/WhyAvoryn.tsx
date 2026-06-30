"use client";

import RevealOnScroll from "@/components/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { differentiators } from "@/lib/constants";

export function WhyAvoryn() {
  return (
    <section className="section-shell section-space">
      <div className="rounded-[36px] border border-borderSubtle bg-panel px-6 py-14 shadow-panel md:px-10 md:py-16">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <SectionLabel label="Why Avoryn" align="center" />
          <h2 className="mt-6 text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] text-textPrimary">
            Why Avoryn?
          </h2>
        </RevealOnScroll>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <RevealOnScroll
              key={item.title}
              direction={index % 2 === 0 ? "left" : "right"}
              delay={0.1}
            >
              <article className="rounded-[28px] border border-borderSubtle bg-panelStrong/60 p-7">
                <div className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent" />
                  <div>
                    <h3 className="text-[22px] font-semibold text-textPrimary">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-textSecondary">
                      {item.body}
                    </p>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
