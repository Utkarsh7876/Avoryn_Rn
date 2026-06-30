"use client";

import {
  Film,
  Lightbulb,
  Share2,
  TrendingUp,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

import RevealOnScroll from "@/components/RevealOnScroll";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { useMagneticTilt } from "@/hooks/useMagneticTilt";
import { services, type Service } from "@/lib/constants";

const icons: Record<Service["icon"], LucideIcon> = {
  Users,
  TrendingUp,
  Film,
  Video,
  Share2,
  Lightbulb,
};

function ServiceCard({ service }: { service: Service }) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagneticTilt(5);
  const Icon = icons[service.icon];

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: "transform" }}
      className="group cursor-default rounded-[28px] border border-borderSubtle bg-panel p-8 transition-colors duration-200 hover:border-accent"
    >
      <div className="mb-10 flex items-start justify-between">
        <span className="font-display text-sm font-bold tracking-[0.24em] text-accent">
          {service.number}
        </span>
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-borderSubtle bg-panelStrong text-textSecondary transition duration-300 group-hover:border-accent group-hover:text-accent">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <h3 className="text-[30px] font-semibold leading-[1.05] text-textPrimary">
        {service.title}
      </h3>
      <p className="mt-4 text-base leading-7 text-textSecondary">{service.body}</p>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="section-shell section-space">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionLabel label="What We Do" align="center" />
        <h2 className="mt-6 text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] text-textPrimary">
          Everything you need.
          <br />
          Nothing you don&apos;t.
        </h2>
      </RevealOnScroll>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <RevealOnScroll key={service.number} delay={index * 0.08}>
            <ServiceCard service={service} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
