"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/mpqwyyaz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#C2581F]/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-[#E06A28]/5 blur-[140px]" />
      </div>

      <Navigation ctaText="Book a Call" ctaHref="/coaching" />

      {/* Coming Soon Content */}
      <section className="mx-auto max-w-3xl px-6 md:px-12 lg:px-16 pt-20 pb-32 text-center">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#C2581F]/30 bg-[#C2581F]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#C2581F] mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C2581F] animate-pulse" />
          Coming Soon
        </span>

        {/* Headline */}
        <h1
          className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tight"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          <span className="text-white block">Combat Sports</span>
          <span className="text-[#C2581F] block">S&C</span>
        </h1>

        {/* Subline */}
        <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed">
          An 8-week strength and conditioning system built specifically for combat athletes. Dropping soon.
        </p>

        {/* Product Cover Banner */}
        <div className="relative mt-12 aspect-[3/4] sm:aspect-[16/9] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-0">
            <div className="relative sm:border-r-[3px] border-b-[3px] sm:border-b-0 border-[#C2581F]">
              <Image
                src="/Cross.jpeg"
                alt="Muay Thai cross punch"
                fill
                className="object-cover"
                style={{ objectPosition: "35% center" }}
                priority
              />
            </div>
            <div className="relative">
              <Image
                src="/Jiujitsu.jpeg"
                alt="Jiujitsu training"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Title overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight drop-shadow-lg text-center leading-tight"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Combat Sports<br />S&C
            </h2>
          </div>
          {/* Coming Soon badge */}
          <span className="absolute top-4 right-4 rounded-full bg-[#C2581F] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider shadow-lg">
            Coming Soon
          </span>
        </div>

        {/* Email Capture */}
        <div className="mt-12 max-w-md mx-auto">
          {status === "success" ? (
            <div className="rounded-2xl border border-[#C2581F]/30 bg-[#C2581F]/10 p-6">
              <p className="text-[#C2581F] font-semibold">You're on the list!</p>
              <p className="text-zinc-400 text-sm mt-2">We'll let you know when it drops.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900/80 px-5 py-4 text-white placeholder-zinc-500 focus:outline-none focus:border-[#C2581F] transition-colors"
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="rounded-xl bg-[#C2581F] px-8 py-4 text-base font-bold text-white hover:bg-[#E06A28] transition-all duration-200 shadow-lg shadow-[#C2581F]/20 whitespace-nowrap disabled:opacity-50"
              >
                {status === "submitting" ? "Sending..." : "Notify Me"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p className="mt-3 text-sm text-red-400">Something went wrong, try again.</p>
          )}
        </div>

        {/* Divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-zinc-800" />
          <span className="text-xs uppercase tracking-widest text-zinc-600">or</span>
          <span className="h-px w-12 bg-zinc-800" />
        </div>

        {/* Coaching CTA */}
        <p className="mt-8 text-zinc-500 text-sm">
          Want custom programming now?
        </p>
        <a
          href="/coaching"
          className="mt-4 inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-transparent px-8 py-4 text-base font-semibold text-white hover:border-[#C2581F] hover:text-[#C2581F] transition-all duration-200"
        >
          Book a Call
        </a>
      </section>

    </main>
  );
}
