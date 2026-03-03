"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavigationProps {
  ctaText?: string;
  ctaHref?: string;
}

/*
  UPDATE: DEFAULT NAVIGATION CTA
  The default CTA is "Book a Call" pointing to /coaching.
  Override these defaults by passing ctaText and ctaHref props.
*/
export default function Navigation({
  ctaText = "Book a Call",
  ctaHref = "/coaching",
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navigation */}
      <header className="sticky top-0 z-20 bg-[#000000] border-b border-zinc-800/60 h-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-full">
          <Link href="/" className="flex items-center">
            <Image
              src="/B_-_4.PNG"
              alt="Built for Performance"
              width={213}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <Link href="/" className="relative hover:text-white transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#C2581F] after:transition-all after:duration-300 hover:after:w-full">
              Home
            </Link>
            <Link href="/about" className="relative hover:text-white transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#C2581F] after:transition-all after:duration-300 hover:after:w-full">
              About
            </Link>
            <Link href="/coaching" className="relative hover:text-white transition-colors after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-[#C2581F] after:transition-all after:duration-300 hover:after:w-full">
              Coaching
            </Link>
            <Link
              href={ctaHref}
              className="rounded-xl bg-white px-4 py-2 font-medium text-zinc-950 hover:bg-zinc-200 transition active:scale-95"
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
          <nav className="md:hidden border-t border-zinc-800/60 bg-[#1A1A1A]">
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
                className="rounded-xl bg-white px-4 py-3 font-medium text-zinc-950 hover:bg-zinc-200 transition text-center active:scale-95"
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
