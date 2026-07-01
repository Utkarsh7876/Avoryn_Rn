import type { MouseEvent } from "react";

/**
 * Next.js Link's client-side router only scrolls to an in-page hash on the
 * first navigation — repeated clicks on different same-page anchors update
 * the URL but don't re-trigger the scroll. scrollIntoView is called
 * explicitly instead, which is deterministic and respects the
 * `scroll-margin-top` set on sections in globals.css (so content doesn't
 * land hidden behind the fixed navbar). The hash is pushed to history
 * separately, and a synthetic hashchange fires so listeners (e.g. the
 * navbar's active-link state) stay in sync.
 */
export function handleHashLinkClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
) {
  if (!href.startsWith("#")) return;

  const target = document.getElementById(href.slice(1));
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", href);
  window.dispatchEvent(new HashChangeEvent("hashchange"));
}
