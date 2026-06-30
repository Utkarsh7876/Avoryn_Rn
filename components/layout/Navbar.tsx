"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`mx-auto flex w-full max-w-[1320px] items-center justify-between rounded-full border px-4 py-3 transition duration-300 md:px-6 ${
            isScrolled
              ? "border-borderSubtle bg-[rgba(10,10,10,0.95)] shadow-panel backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link
            href="/"
            className="font-display text-2xl font-bold tracking-[-0.06em]"
          >
            <span className="text-accent">A</span>VORYN
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = activeHash === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-[14px] uppercase tracking-[0.08em] transition ${
                    active ? "text-textPrimary" : "text-textSecondary hover:text-textPrimary"
                  }`}
                  data-active={active}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              href="#contact"
              variant="light"
              className="px-5 py-3 text-[14px]"
            >
              Let&apos;s Talk
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-borderSubtle bg-panel text-textPrimary transition hover:border-accent hover:text-accent md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      <MobileMenu
        open={isOpen}
        activeHash={activeHash}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
