import type { ReactNode } from "react";

import { FadeInView } from "@/components/animations/FadeInView";
import { SectionLabel } from "@/components/ui/SectionLabel";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  description: string;
  kicker?: string;
};

export function PageHero({
  label,
  title,
  description,
  kicker,
}: PageHeroProps) {
  return (
    <section className="section-shell pt-32 md:pt-40">
      <FadeInView className="max-w-4xl">
        <SectionLabel label={label} />
        {kicker ? (
          <p className="mt-8 text-sm uppercase tracking-[0.18em] text-textSecondary">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-6 text-[clamp(44px,8vw,96px)] font-extrabold leading-[0.92] text-textPrimary">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-textSecondary md:text-lg">
          {description}
        </p>
      </FadeInView>
    </section>
  );
}
