"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { useEffect, useRef, useState } from "react";

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

const credentials = [
  { title: "NASM Certified Personal Trainer", year: "2025" },
  { title: "Exercise Science, West Chester University", year: "Class of 2026" },
  { title: "PT Aide, Kinetic Reimagined", detail: "2 years under Dr. Christopher Sands" },
  { title: "Muay Thai Competitor", detail: "Preparing for sanctioned amateur bouts" },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111111] text-zinc-50">

      {/* GRAIN TEXTURE */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-700/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[140px]" />
      </div>

      <Navigation ctaText="Work with Me" ctaHref="/coaching" />

      {/* ============================================================
          HERO
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pt-24 pb-24">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Headshot */}
            <div className="flex justify-center lg:justify-start order-1">
              <div className="relative group">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl shadow-orange-900/20 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[#C2581F]/50">
                  <Image
                    src="/about/headshot.jpg"
                    alt="Jake Peterson"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 rounded-3xl border border-[#C2581F]/20 -z-10" />
              </div>
            </div>

            {/* Hero text */}
            <div className="order-2 text-center lg:text-left">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2581F] font-semibold mb-6">
                <span className="h-px w-8 bg-[#C2581F]" />
                About
              </p>

              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-white"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Jake<br />
                <span className="text-[#C2581F]">Peterson</span>
              </h1>

              <p className="mt-6 text-zinc-400 font-semibold uppercase tracking-widest text-sm">
                NASM-CPT · Exercise Science · Muay Thai Athlete
              </p>

              <p className="mt-6 text-lg text-zinc-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I build strength programs for people who actually use their bodies. If your gym work is making you worse at the thing you care about, something's wrong.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ============================================================
          ARC 1 — Movement is Magic
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Text */}
            <div className="order-2 lg:order-1">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C2581F] mb-4">Chapter 01</p>
              <h2
                className="text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-8"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Movement<br />is Magic
              </h2>

              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  My mom was sick my whole childhood. Being there during cancer treatments, and seeing my mom fight so hard against a body that was trying to shut her down, I learned very early on how blessed we are to get to invest in our health.
                </p>
                <p>
                  I rarely ever talk about it, but when I was seven, I was diagnosed with Rheumatoid Arthritis in my left hip. I used a wheelchair for a few years on and off because my flare ups killed. I was a kid very familiar with the dreary waiting rooms of medical centers, and saw firsthand how doctors often just throw drugs at symptoms without giving people the systems to keep them at home, healthy.
                </p>
                <p>
                  My rheumatologist said no contact sports. Swimming, maybe some low-impact stuff. I didn't listen. Sure enough, flare ups happened less often. Then became rare. Now my hips are stronger than ever, and I use them to kick people in the face, lol.
                </p>
                <p>
                  Seven-year-old me figured out something nobody told me directly: <span className="text-[#C2581F] font-semibold">movement is magic.</span> It heals. It builds. It changes what you think is possible.
                </p>
                <p>
                  After seeing how movement prolonged quality of life for my mom, and gave me back my freedom, I knew I could help people break their own self limiting beliefs on what's possible.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="aspect-square rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl shadow-orange-900/10 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[#C2581F]/50">
                  <Image
                    src="/momma.JPG"
                    alt="Jake with his mom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-full aspect-square rounded-3xl border border-[#C2581F]/20 -z-10" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ============================================================
          ARC 2 — The Weight Room
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Photo */}
            <div className="order-1 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="aspect-square rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl shadow-orange-900/10 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[#C2581F]/50">
                  <Image
                    src="/Soccertuff.JPG"
                    alt="Jake playing soccer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full aspect-square rounded-3xl border border-[#C2581F]/20 -z-10" />
              </div>
            </div>

            {/* Text */}
            <div className="order-2">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C2581F] mb-4">Chapter 02</p>
              <h2
                className="text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-8"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                The Weight<br />Room
              </h2>

              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  High school soccer was a reality check. I was scrawny, underfed, and honestly horrible. But learning how to lift? That was my shit. A new community, newbie gains. I was hooked.
                </p>
                <p>
                  Watching my body actually respond to progressive overload — seeing change I built with consistency — that was the first time I felt <span className="text-[#C2581F] font-semibold">capable.</span> It was more than just the gym. It was therapy.
                </p>
                <p>
                  I needed to learn everything. Anatomy, physiology, how the body actually works. Then senior year I tore my shoulder, and everything... stopped. My identity was gone. Or was it?
                </p>
                <p>
                  I ended up befriending the PT at my gym. Picked his brain constantly. Learned about prehab, recovery, the science behind getting stronger without breaking down. By the time I got to West Chester, I knew Exercise Science was it.
                </p>
                <p>
                  I spent two years working as an aide at Kinetic Reimagined under Dr. Christopher Sands. That clinic treated people, not just injuries. I learned how to prescribe movement that actually worked and how to build an environment where people wanted to show up.
                </p>
                <p className="text-white font-semibold">
                  But studying it wasn't enough. I needed to build more proof.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ============================================================
          ARC 3 — Muay Thai
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

            {/* Text */}
            <div className="order-2 lg:order-1">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C2581F] mb-4">Chapter 03</p>
              <h2
                className="text-4xl md:text-5xl font-black uppercase text-white leading-tight mb-2"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Muay Thai
              </h2>
              <p className="text-zinc-600 text-xl font-semibold mb-8 uppercase tracking-wide">The Experiment</p>

              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  After my shoulder healed, I was barely lifting, and casual rec sports weren't cutting it. I needed something that would break me if I wasn't ready.
                </p>
                <p>
                  A friend dragged me to Muay Thai. Within six months I competed in my first smoker fight. Within a year I was working at the gym. Now, with less than two years of experience, I'm preparing for my first sanctioned amateur fight.
                </p>
                <p>
                  People ask how I improved that fast in a sport that brutal. It's not complicated: <span className="text-[#C2581F] font-semibold">I just built a body that could learn fast.</span>
                </p>
                <p>
                  Every principle I learned in school — progressive overload, recovery strategies, energy system work — I tested on myself first. Logged everything. Strength training that didn't leave me too sore for technique work. Conditioning that didn't wreck my joints. Mobility protocols that kept me feeling great through 5-6 sessions a week.
                </p>
                <p>
                  It worked. Not because I'm unique. Because I understood how to apply sports science to life.
                </p>
                <p>
                  In late 2025 I got my NASM-CPT and started taking clients. They've hit PRs they didn't think were possible. Built strength without sacrificing their time. And stayed healthy enough to keep doing what they actually care about.
                </p>
                <p className="text-white font-semibold">
                  That's the standard. If your strength program makes you too sore to do what matters, it's not working.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group w-full max-w-md">
                <div className="aspect-square rounded-3xl overflow-hidden border-2 border-zinc-800 shadow-2xl shadow-orange-900/10 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[#C2581F]/50">
                  <Image
                    src="/about/training.jpg"
                    alt="Jake Peterson training Muay Thai"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-full aspect-square rounded-3xl border border-[#C2581F]/20 -z-10" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ============================================================
          PHILOSOPHY
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-24">
        <AnimatedSection>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10 md:p-16 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C2581F] mb-6">What I Believe</p>
            <blockquote
              className="text-3xl md:text-4xl font-black uppercase text-white leading-tight max-w-4xl mx-auto"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              I'm not a pro fighter. I'm not a wannabe "gymshark" athelete.
            </blockquote>
            <p className="mt-6 text-lg text-[#C2581F] font-semibold max-w-3xl mx-auto leading-relaxed">
              I'm an Exercise Science student who spent eight years learning how to build a body that is Built for Performance.
            </p>
            <p className="mt-6 text-zinc-500 max-w-2xl mx-auto leading-relaxed">
              In life, in sport, whatever it looks like - let's get you there too.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* ============================================================
          PULL QUOTE
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-24">
        <AnimatedSection>
          <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/80 p-10 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C2581F]/5 via-transparent to-[#C2581F]/5 rounded-3xl" />
            <p className="text-xs uppercase tracking-[0.2em] text-[#C2581F] mb-4 relative">My Philosophy</p>
            <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed italic relative">
              "I live to build capability: in my body, my mind, and the people I work with — so I can perform under pressure, stay present, and move with deliberate intention everywhere I go."
            </p>
            <p className="mt-6 text-[#C2581F] font-bold relative">— Jake Peterson</p>
          </div>
        </AnimatedSection>
      </section>

      {/* ============================================================
          CREDENTIALS
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-24">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-[#C2581F]" />
            <h2
              className="text-3xl font-black uppercase text-white"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Credentials
            </h2>
            <div className="h-px w-12 bg-[#C2581F]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-[#C2581F]/40 transition-all duration-300"
              >
                <h3 className="font-bold text-white text-sm leading-tight">{c.title}</h3>
                <p className="mt-2 text-sm text-zinc-500">{c.year || c.detail}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ============================================================
          FINAL CTA
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28">
        <AnimatedSection>
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 p-12 md:p-16 text-center">
            <h3
              className="text-4xl md:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Ready to train<br />
              <span className="text-[#C2581F]">with purpose?</span>
            </h3>

            <p className="mt-6 text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Whether you want custom coaching or just a solid starting point, I've got you covered.
            </p>

            <div className="mt-10">
              <Link
                href="/coaching"
                className="inline-flex items-center justify-center rounded-xl bg-[#C2581F] px-10 py-4 text-base font-bold text-white hover:bg-[#E06A28] transition-all duration-200 shadow-lg shadow-[#C2581F]/30"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </main>
  );
}
