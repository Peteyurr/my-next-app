"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface NavigationProps {
  ctaText?: string;
  ctaHref?: string;
  showBanner?: boolean;
}

/*
  UPDATE: DEFAULT NAVIGATION CTA
  The default CTA is "Book a Call" pointing to /coaching.
  Override these defaults by passing ctaText and ctaHref props.
*/
export default function Navigation({
  ctaText = "Book a Call",
  ctaHref = "/coaching",
  showBanner = true,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("banner-dismissed");
    if (dismissed) setBannerDismissed(true);
  }, []);

  const dismissBanner = () => {
    setBannerDismissed(true);
    localStorage.setItem("banner-dismissed", "true");
  };

  return (
    <>
      {/*
        ============================================================
        UPDATE: SITE-WIDE URGENCY BANNER
        ============================================================
        Purpose: Create urgency and drive action to your priority offer.
        This banner appears on every page (except where showBanner={false}).

        When to update (check monthly):
        1. Change the month name each month
        2. Update spot availability as roster fills
        3. During product launches, change to promote the launch
        4. Reset localStorage ("banner-dismissed") after major updates
           so returning visitors see the new message

        Banner message options:
        - Coaching focus: "Limited 1:1 coaching spots available for [Month]"
        - Product launch: "[Product Name] is now live — [X]% off this week"
        - Lead magnet: "Free [Lead Magnet] — Get it before [deadline]"
        - Waitlist: "Coaching full for [Month] — Join the waitlist"

        Update frequency: Monthly at minimum, or when priorities change

        NOTE: Users can dismiss this banner and it won't show again (stored
        in localStorage). To reset after a major update, users need to clear
        their browser data, or you can change the localStorage key name.
      */}
      {showBanner && !bannerDismissed && (
        <div className="relative bg-zinc-900 border-b border-[var(--bfp-orange)]/20">
          <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-center gap-x-4">
            <p className="text-sm text-zinc-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)] mr-2" />
              {/* UPDATE: Change month and message monthly */}
              Limited 1:1 coaching spots available for February
              <Link
                href="/coaching"
                className="ml-2 font-medium text-[var(--bfp-orange-light)] hover:text-[var(--bfp-orange)] transition-colors"
              >
                Book your call →
              </Link>
            </p>
            <button
              onClick={dismissBanner}
              className="absolute right-4 p-1 text-zinc-500 hover:text-zinc-300 transition-colors"
              aria-label="Dismiss banner"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Navigation */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 border-b border-zinc-800/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-sm font-bold text-[var(--bfp-orange)]">
              BP
            </span>
            <span className="font-semibold tracking-tight">Built for Performance</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/coaching" className="hover:text-white transition-colors">
              Coaching
            </Link>
            <Link
              href={ctaHref}
              className="rounded-xl bg-white px-4 py-2 font-medium text-zinc-950 hover:bg-zinc-200 transition"
            >
              {ctaText}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-zinc-300 transition-transform ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-zinc-300 transition-opacity ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-zinc-300 transition-transform ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-zinc-800/60 bg-zinc-950/95 backdrop-blur">
            <div className="flex flex-col gap-4 px-6 py-6">
              <Link
                href="/"
                className="text-zinc-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-zinc-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/coaching"
                className="text-zinc-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coaching
              </Link>
              <Link
                href={ctaHref}
                className="rounded-xl bg-white px-4 py-3 font-medium text-zinc-950 hover:bg-zinc-200 transition text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {ctaText}
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
