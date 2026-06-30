"use client";

import BrandLogoMarquee from "@/components/BrandLogoMarquee";
import RevealOnScroll from "@/components/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { brands } from "@/lib/brands";

export function Brands() {
  return (
    <section id="brands" className="section-space overflow-hidden border-y border-borderSubtle bg-panel/30">
      <div className="section-shell">
        <RevealOnScroll className="mx-auto max-w-3xl text-center">
          <SectionLabel label="Trusted By" align="center" />
          <h2 className="mt-6 text-[clamp(36px,5vw,64px)] font-bold leading-[0.95] text-textPrimary">
            Brands we&apos;ve
            <br />
            worked with.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-textSecondary">
            From ed-tech to AI — we&apos;ve partnered with leading names to drive
            creator-led campaigns that deliver.
          </p>
        </RevealOnScroll>
      </div>

      <div className="mt-14 px-0">
        <BrandLogoMarquee brands={brands} />
      </div>
    </section>
  );
}
