"use client";

import Link from "next/link";

import RevealOnScroll from "@/components/RevealOnScroll";
import { ContactForm } from "@/components/sections/ContactForm";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { contactEmail, contactExpectations } from "@/lib/constants";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell section-space">
      <RevealOnScroll className="mx-auto max-w-3xl text-center">
        <SectionLabel label="Contact" align="center" />
        <h2 className="mt-6 text-[clamp(40px,6vw,72px)] font-bold leading-[0.95] text-textPrimary">
          Ready to build
          <br />
          something real?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-textSecondary">
          Let&apos;s talk about your brand, your goals, and how Avoryn can help.
          No pitch decks. No fluff. Just an honest conversation.
        </p>
      </RevealOnScroll>

      <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6">
          <RevealOnScroll className="rounded-[32px] border border-borderSubtle bg-panel p-8 shadow-panel">
            <SectionLabel label="Reach Out" />
            <div className="mt-8">
              <p className="text-[12px] uppercase tracking-[0.18em] text-textSecondary">
                Email
              </p>
              <Link
                href={`mailto:${contactEmail}`}
                className="mt-2 block font-display text-[clamp(24px,4vw,32px)] font-semibold text-textPrimary transition hover:text-accent"
              >
                {contactEmail}
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            className="rounded-[32px] border border-borderSubtle bg-panel p-8 shadow-panel"
            delay={0.1}
          >
            <SectionLabel label="What Happens Next" />
            <div className="mt-8 space-y-6">
              {contactExpectations.map((item, index) => (
                <div key={item.title} className="flex gap-4">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-accent">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-[22px] font-semibold text-textPrimary">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-textSecondary">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.15}>
          <ContactForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
