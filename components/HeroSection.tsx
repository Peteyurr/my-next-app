"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY;
        bgRef.current.style.transform = `translateY(${y * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger staggered text reveal on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden">

      {/* Background image — parallax container */}
      <div ref={bgRef} className="absolute inset-0 z-0 bg-[#111111] will-change-transform" style={{ top: "-10%", bottom: "-10%", height: "120%" }}>
        {/* Mobile background */}
        <Image
          src="/HERO.jpeg"
          alt="Jake Peterson"
          fill
          className="block md:hidden object-contain"
          priority
        />
        {/* Desktop background */}
        <Image
          src="/HIGH_TEEP.jpeg"
          alt="Jake Peterson throwing a teep kick"
          fill
          className="hidden md:block object-cover object-center"
          priority
        />
        {/* Dark overlay — heavy left, lighter right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-[#111111]/40" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pt-20 md:pt-32 pb-24 md:pb-40 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow */}
          <p
            className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2581F] font-semibold mb-6 transition-all duration-[600ms] ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="h-px w-8 bg-[#C2581F]" />
            Built for Performance
          </p>

          {/* Headline — staggered reveal */}
          <h1
            className="text-[clamp(4rem,10vw,8rem)] font-black leading-[0.9] tracking-tight uppercase"
            style={{ fontFamily: "'Oswald', 'Arial Narrow', sans-serif" }}
          >
            <span
              className={`text-white block transition-all duration-[600ms] ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              Build
            </span>
            <span
              className={`text-[#C2581F] block transition-all duration-[600ms] ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "250ms" }}
            >
              Capability.
            </span>
            <span
              className={`text-white block transition-all duration-[600ms] ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Perform.
            </span>
          </h1>

          <p
            className={`mt-8 text-lg md:text-xl text-zinc-300 max-w-lg leading-relaxed transition-all duration-[600ms] ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "550ms" }}
          >
            Strength and conditioning for athletes who train with purpose —
            and can&apos;t afford to be wrecked by their gym sessions.
          </p>

          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-[600ms] ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            <Link
              href="/coaching"
              className="inline-flex items-center justify-center rounded-xl bg-[#C2581F] px-8 py-4 text-base font-bold text-white hover:bg-[#E06A28] transition-all duration-200 shadow-lg shadow-[#C2581F]/30"
            >
              Book a Call →
            </Link>
          </div>

          {/* Credibility strip */}
          <div
            className={`mt-14 flex flex-wrap gap-6 text-zinc-500 text-sm transition-all duration-[600ms] ease-out ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "750ms" }}
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C2581F]" />
              NASM Certified PT
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C2581F]" />
              Exercise Science, WCU
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C2581F]" />
              Muay Thai Competitor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
