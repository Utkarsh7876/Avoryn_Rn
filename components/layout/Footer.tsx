"use client";

import Link from "next/link";
import { X } from "lucide-react";
import type { SVGProps } from "react";

import { contactEmail, footerColumns, socialLinks } from "@/lib/constants";
import { handleHashLinkClick } from "@/lib/scrollToHash";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 11v5M8 8v.01M12 16v-5c0-1.1.9-2 2-2s2 .9 2 2v5" />
    </svg>
  );
}

const socialIcons = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  "Twitter/X": X,
};

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-16">
      <div className="grid gap-12 rounded-[32px] border border-borderSubtle bg-panel/70 px-6 py-10 shadow-panel md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_0.6fr_0.6fr] lg:px-10">
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-block font-display text-3xl font-bold tracking-[-0.06em]"
          >
            <span className="text-accent">A</span>VORYN
          </Link>
          <p className="max-w-xs text-base leading-7 text-textSecondary">
            Influencer marketing that moves brands forward.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-borderSubtle bg-panelStrong text-textSecondary transition hover:border-accent hover:text-textPrimary"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title} className="space-y-5">
            <h3 className="text-sm uppercase tracking-[0.18em] text-textSecondary">
              {column.title}
            </h3>
            <div className="space-y-3">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleHashLinkClick(event, link.href)}
                  className="block text-sm text-textSecondary transition hover:text-textPrimary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-borderSubtle pt-6 text-sm text-textTertiary md:flex-row md:items-center md:justify-between">
        <p>Copyright 2025 Avoryn. All rights reserved.</p>
        <Link
          href={`mailto:${contactEmail}`}
          className="transition hover:text-textPrimary"
        >
          {contactEmail}
        </Link>
      </div>
    </footer>
  );
}
