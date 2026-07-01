"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { contactEmail, navLinks } from "@/lib/constants";
import { handleHashLinkClick } from "@/lib/scrollToHash";

type MobileMenuProps = {
  open: boolean;
  activeHash: string;
  onClose: () => void;
};

export function MobileMenu({ open, activeHash, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-[rgba(10,10,10,0.98)] backdrop-blur-xl" />
          <div className="section-shell relative flex min-h-screen flex-col justify-between py-6">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="font-display text-2xl font-bold tracking-[-0.06em]"
                onClick={onClose}
              >
                <span className="text-accent">A</span>VORYN
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-borderSubtle bg-panel text-textPrimary transition hover:border-accent hover:text-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <motion.nav
              className="flex flex-col gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={(event) => {
                      handleHashLinkClick(event, link.href);
                      onClose();
                    }}
                    className={`font-display text-[clamp(40px,11vw,56px)] leading-[0.95] tracking-[-0.06em] ${
                      activeHash === link.href ? "text-accent" : "text-textPrimary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div
              className="space-y-6 border-t border-borderSubtle pt-8"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.35, delay: 0.18 }}
            >
              <Link
                href={`mailto:${contactEmail}`}
                className="block text-sm text-textSecondary transition hover:text-textPrimary"
              >
                {contactEmail}
              </Link>
              <Button
                href="#contact"
                variant="light"
                className="px-6 py-3.5 text-sm"
                icon="arrow-right"
              >
                Let&apos;s Talk
              </Button>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
