"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { useEffect, useRef, useState } from "react";

// Scroll animation hook
function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// Animated section component
function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

// Credentials data
const credentials = [
  {
    title: "NASM Certified Personal Trainer",
    year: "2025",
  },
  {
    title: "Exercise Science, West Chester University",
    year: "Class of 2025",
  },
  {
    title: "PT Aide, Kinetic Reimagined",
    detail: "2 years under Dr. Christopher Sands",
  },
  {
    title: "Muay Thai Competitor",
    detail: "Preparing for sanctioned amateur bout",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--bfp-orange)]/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-[var(--bfp-orange-light)]/10 blur-[140px]" />
        <div className="absolute top-1/2 left-[-200px] h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[160px]" />
      </div>

      <Navigation ctaText="Work with Me" ctaHref="/coaching" />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pt-16 pb-28 md:pt-24 md:pb-32">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Headshot */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative group">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-zinc-800 ring-2 ring-[var(--bfp-orange)]/20 shadow-2xl shadow-[var(--bfp-orange)]/10 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[var(--bfp-orange)]/50">
                  <Image
                    src="/about/headshot.jpg"
                    alt="Jake Peterson - Exercise Science student and strength coach"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 rounded-3xl border border-[var(--bfp-orange)]/20 -z-10" />
              </div>
            </div>

            {/* Hero Text */}
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)]" />
                About
              </p>

              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white">
                Jake Peterson
              </h1>

              <p className="mt-4 text-lg md:text-xl text-zinc-400 font-semibold">
                NASM-CPT | Exercise Science | Muay Thai Athlete
              </p>

              <p className="mt-6 text-lg text-zinc-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I build strength programs for people who actually use their bodies. If your gym work is making you worse at the thing you care about, something's wrong.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Arc 1: Movement is Magic */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28 md:pb-32">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text - LEFT on desktop */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-16 w-1 bg-[var(--bfp-orange)] rounded-full" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  Movement is Magic
                </h2>
              </div>

              <div className="mt-8 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  My mom was sick my whole childhood. Terminal. When you watch someone you love fight their own body every single day, you learn something early: health isn't guaranteed. It's everything.
                </p>

                <p>
                  I was seven when they diagnosed me with Rheumatoid Arthritis. My left hip was in constant pain — walking felt impossible most days. I was in a wheelchair through most of elementary school. Used one at Disneyland because a full day on my feet was out of the question.
                </p>

                <p>
                  My rheumatologist said no contact sports. Swimming, maybe some low-impact stuff. That was supposed to be it for me.
                </p>

                <p>
                  I didn't listen. I kept moving. Ran anyway. Biked. Roller skated. Did my PT religiously. And slowly, the pain started to fade. Flare-ups went from constant to occasional to rare.
                </p>

                <p>
                  Seven-year-old me figured out something nobody told me directly: <span className="text-[var(--bfp-orange-light)] font-semibold">movement is magic.</span> It heals. It builds. It changes what you think is possible.
                </p>

                <p>
                  Fighting my own body as a kid planted something in me. If I could push past arthritis, I could push past anything.
                </p>
              </div>
            </div>

            {/* Image - RIGHT on desktop */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                <div className="aspect-square w-full max-w-md rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center border-2 border-zinc-800 overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[var(--bfp-orange)]/50 shadow-2xl shadow-[var(--bfp-orange)]/10">
                  <span className="text-6xl font-bold text-zinc-700">1</span>
                  <span className="mt-4 text-sm text-zinc-600 uppercase tracking-widest">Photo coming soon</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bfp-orange)]/5 to-transparent pointer-events-none" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-full max-w-md aspect-square rounded-3xl border border-[var(--bfp-orange)]/20 -z-10" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Arc 2: The Weight Room */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28 md:pb-32">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image - LEFT on desktop */}
            <div className="order-1 flex justify-center">
              <div className="relative group">
                <div className="aspect-square w-full max-w-md rounded-3xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center border-2 border-zinc-800 overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[var(--bfp-orange)]/50 shadow-2xl shadow-[var(--bfp-orange)]/10">
                  <span className="text-6xl font-bold text-zinc-700">2</span>
                  <span className="mt-4 text-sm text-zinc-600 uppercase tracking-widest">Photo coming soon</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bfp-orange)]/5 to-transparent pointer-events-none" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full max-w-md aspect-square rounded-3xl border border-[var(--bfp-orange)]/20 -z-10" />
              </div>
            </div>

            {/* Text - RIGHT on desktop */}
            <div className="order-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-16 w-1 bg-[var(--bfp-orange)] rounded-full" />
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  The Weight Room
                </h2>
              </div>

              <div className="mt-8 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  High school soccer was a reality check. I was scrawny, underfed, and not good enough. But the weight room was different.
                </p>

                <p>
                  Watching my body actually respond to progressive overload — seeing strength I built with my own work — that was the first time I felt <span className="text-[var(--bfp-orange-light)] font-semibold">capable.</span> Not lucky. Not talented. Capable.
                </p>

                <p>
                  I got obsessed. Anatomy, physiology, how the body actually works. Then senior year I tore my shoulder. Surgery. Months of rehab. Everything stopped.
                </p>

                <p>
                  I ended up befriending the PT at my gym. Picked his brain constantly. Learned about prehab, recovery, the science behind getting stronger without breaking down. By the time I got to West Chester, I knew Exercise Science was it.
                </p>

                <p>
                  I spent two years working as an aide at Kinetic Reimagined under Dr. Christopher Sands. That clinic treated people, not just injuries. I learned how to prescribe movement that actually worked and how to build an environment where people wanted to show up.
                </p>

                <p className="text-white font-semibold">
                  But studying it wasn't enough. I needed to test it.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Arc 3: Muay Thai (The Experiment) */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28 md:pb-32">
        <AnimatedSection>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text - LEFT on desktop */}
            <div className="order-2 lg:order-1">
              <div className="flex items-start gap-4 mb-8">
                <div className="h-20 w-1 bg-[var(--bfp-orange)] rounded-full mt-1" />
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                    Muay Thai
                  </h2>
                  <span className="block text-zinc-500 text-2xl md:text-3xl lg:text-4xl mt-2 font-semibold">
                    (The Experiment)
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-6 text-zinc-300 leading-relaxed">
                <p>
                  After my shoulder healed, casual rec sports weren't cutting it. I needed something that would break me if I wasn't ready.
                </p>

                <p>
                  A friend dragged me to Muay Thai. Within six months I competed in my first smoker fight. Within a year I was working at the gym. Now, with less than two years of experience, I'm preparing for my first sanctioned amateur fight.
                </p>

                <p>
                  People ask how I improved that fast in a sport that brutal. It's not complicated: <span className="text-[var(--bfp-orange-light)] font-semibold">I treated my body like an experiment.</span>
                </p>

                <p>
                  Every principle I learned in school — progressive overload, recovery strategies, energy system work — I tested on myself first. Strength training that didn't leave me too sore for technique work. Conditioning that didn't wreck my joints. Mobility protocols that kept me durable through 5-6 sessions a week.
                </p>

                <p>
                  It worked. Not because I'm special. Because I was methodical.
                </p>

                <p>
                  In late 2025 I got my NASM-CPT and started taking clients. They've hit PRs they didn't think were possible. Built strength without sacrificing their time. And stayed healthy enough to keep doing what they actually care about.
                </p>

                <p className="text-white font-semibold">
                  That's the standard. If your strength program makes you too sore to do what matters, it's not working.
                </p>
              </div>
            </div>

            {/* Image - RIGHT on desktop */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                <div className="aspect-square w-full max-w-md rounded-3xl overflow-hidden border-2 border-zinc-800 transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[var(--bfp-orange)]/50 shadow-2xl shadow-[var(--bfp-orange)]/10">
                  <Image
                    src="/about/training.jpg"
                    alt="Jake Peterson training Muay Thai"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-full max-w-md aspect-square rounded-3xl border border-[var(--bfp-orange)]/20 -z-10" />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Philosophy / Mission Statement */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28 md:pb-32">
        <AnimatedSection>
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 md:p-12 lg:p-16 text-center">
            <p className="text-[var(--bfp-orange)] text-sm uppercase tracking-widest mb-6 font-semibold">
              What I Believe
            </p>

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-white max-w-4xl mx-auto">
              I'm not a pro fighter. I'm not a veteran coach with 20 years of war stories. I'm an Exercise Science student who spent eight years learning one thing:
            </blockquote>

            <p className="mt-8 text-lg md:text-xl lg:text-2xl text-[var(--bfp-orange-light)] font-semibold max-w-3xl mx-auto">
              How do you build a body that performs under pressure, stays durable over time, and moves with discipline and clarity?
            </p>

            <p className="mt-8 text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
              That's what I teach. If you're serious about it — let's talk.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Jake's Motto Pull Quote */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28 md:pb-32">
        <AnimatedSection>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--bfp-orange)]/10 via-amber-500/5 to-[var(--bfp-orange-light)]/10 rounded-3xl blur-xl" />
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 md:p-12 lg:p-16">
              <p className="text-[var(--bfp-orange)] text-sm uppercase tracking-widest mb-4 font-semibold">
                My Philosophy
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-200 leading-relaxed italic">
                "I live to build capability: in my body, my mind, and the people I work with — so I can perform under pressure, stay durable over time, and move through the world with discipline and clarity."
              </p>
              <p className="mt-6 text-[var(--bfp-orange-light)] font-bold">— Jake Peterson</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Credentials Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28 md:pb-32">
        <AnimatedSection>
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-1 w-8 bg-[var(--bfp-orange)] rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Credentials
            </h2>
            <div className="h-1 w-8 bg-[var(--bfp-orange)] rounded-full" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((credential, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-[var(--bfp-orange)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--bfp-orange)]/5"
              >
                <h3 className="font-bold text-white text-sm leading-tight">
                  {credential.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500">
                  {credential.year || credential.detail}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-28 md:pb-32">
        <AnimatedSection>
          <div className="rounded-[2rem] border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 p-10 md:p-12 lg:p-16 text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Ready to train with purpose?
            </h3>

            <p className="mt-6 text-zinc-400 max-w-xl mx-auto text-lg leading-relaxed">
              Whether you want custom coaching or just a solid starting point, I've got you covered.
            </p>

            {/* Two-button CTA layout */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary CTA: Coaching */}
              <Link
                href="/coaching"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-[var(--bfp-orange)] px-10 py-4 text-lg font-bold text-white hover:bg-[var(--bfp-orange-light)] transition-all duration-300 shadow-lg shadow-[var(--bfp-orange)]/20 hover:shadow-[var(--bfp-orange)]/30"
              >
                Work with me
              </Link>

              {/* Secondary CTA: Free blueprint */}
              <Link
                href="/start"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl border-2 border-[var(--bfp-orange)] bg-transparent px-10 py-4 text-lg font-bold text-[var(--bfp-orange-light)] hover:bg-[var(--bfp-orange)] hover:text-white transition-all duration-300"
              >
                Start free
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}
