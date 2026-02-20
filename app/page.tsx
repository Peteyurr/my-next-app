import Link from "next/link";
import Navigation from "@/components/Navigation";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import NotifyForm from "@/components/NotifyForm";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#111111] text-zinc-50">

      {/* GRAIN TEXTURE OVERLAY */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <Navigation ctaText="Book a Call" ctaHref="/coaching" />

      {/* ============================================================
          HERO — Full bleed image, split layout
      ============================================================ */}
      <section className="relative min-h-screen flex items-center">

        {/* Background image — faded right side */}
        <div className="absolute inset-0 z-0">
          {/* Mobile background */}
          <Image
            src="/about/training.jpg"
            alt="Jake Peterson training"
            fill
            className="block md:hidden object-cover"
            style={{ objectPosition: "80% 10%" }}
            unoptimized
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
        <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pt-32 pb-40 w-full">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2581F] font-semibold mb-6">
              <span className="h-px w-8 bg-[#C2581F]" />
              Built for Performance
            </p>

            {/* Headline — Bebas Neue style via font-weight + tracking */}
            <h1
              className="text-[clamp(4rem,10vw,8rem)] font-black leading-[0.9] tracking-tight uppercase"
              style={{ fontFamily: "'Oswald', 'Arial Narrow', sans-serif" }}
            >
              <span className="text-white block">Build</span>
              <span className="text-[#C2581F] block">Capability.</span>
              <span className="text-white block">Perform.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-zinc-300 max-w-lg leading-relaxed">
              Strength and conditioning for athletes who train with purpose —
              and can't afford to be wrecked by their gym sessions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/coaching"
                className="inline-flex items-center justify-center rounded-xl bg-[#C2581F] px-8 py-4 text-base font-bold text-white hover:bg-[#E06A28] transition-all duration-200 shadow-lg shadow-[#C2581F]/30"
              >
                Book a Call →
              </Link>
            </div>

            {/* Credibility strip */}
            <div className="mt-14 flex flex-wrap gap-6 text-zinc-500 text-sm">
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

      {/* ============================================================
          WHO THIS IS FOR — Dark card row
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8">Who this is for</p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "The Muay Thai fighter who needs strength without losing gas",
            "The runner building mileage who wants to lift without killing their legs",
            "The combat athlete preparing to compete who needs to peak — not crash",
            "The desk worker who wants real-world capability, not just a gym body",
          ].map((text, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 px-5 py-5 hover:border-[#C2581F]/40 hover:bg-zinc-900/70 transition-all duration-300"
            >
              <span className="text-[#C2581F] font-black text-2xl block mb-3" style={{ fontFamily: "Oswald, sans-serif" }}>
                0{i + 1}
              </span>
              <p className="text-sm text-zinc-300 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          COMING SOON TEASER — Combat Sports S&C
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16">
        <div className="rounded-3xl border border-[#C2581F]/20 bg-zinc-900/60 overflow-hidden">
          {/* Photo banner */}
          <div className="relative aspect-[4/3] sm:aspect-[21/9] md:aspect-[3/1]">
            <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 gap-0">
              <div className="relative sm:border-r-[3px] border-b-[3px] sm:border-b-0 border-[#C2581F]">
                <Image
                  src="/Cross.jpeg"
                  alt="Muay Thai cross punch"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "35% center" }}
                />
              </div>
              <div className="relative">
                <Image
                  src="/Jiujitsu.jpeg"
                  alt="Jiujitsu training"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
            {/* Coming Soon badge */}
            <span className="absolute top-4 right-4 rounded-full bg-[#C2581F] px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider shadow-lg">
              Coming Soon
            </span>
          </div>

          {/* Text content + email capture */}
          <div className="p-6 md:p-10">
            <h2
              className="text-3xl md:text-4xl font-black uppercase text-white"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              Combat Sports S&C
            </h2>
            <p className="mt-3 text-zinc-400 leading-relaxed max-w-xl">
              An 8-week strength and conditioning system built for fighters. Dropping soon.
            </p>
            <div className="mt-6 max-w-md">
              <NotifyForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PHOTO BREAK — Action shot full width
      ============================================================ */}
      <section className="relative h-64 md:h-96 overflow-hidden my-4">
        <Image
          src="/SidekickDG.jpeg"
          alt="Jake Peterson throwing a sidekick"
          fill
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/80 via-transparent to-[#111111]/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="text-[clamp(2rem,6vw,5rem)] font-black uppercase tracking-tight text-white/10 select-none"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Train with purpose
          </p>
        </div>
      </section>

      {/* ============================================================
          THREE PATHS
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-24">
        <div className="flex items-end justify-between mb-12">
          <h2
            className="text-3xl md:text-5xl font-black uppercase text-white"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Start here.
          </h2>
          <span className="text-xs uppercase tracking-widest text-zinc-600 hidden md:block">Three ways in</span>
        </div>

        <div className="grid gap-6 md:grid-cols-1 max-w-lg">
          {/* Coaching */}
          <Link
            href="/coaching"
            className="group relative rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-[#C2581F]/60 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 left-0 h-1 w-0 bg-[#C2581F] group-hover:w-full transition-all duration-500" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#C2581F] mb-4">Limited Spots</p>
            <h3
              className="text-3xl font-black uppercase text-white group-hover:text-[#C2581F] transition-colors mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              1:1 Coaching
            </h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Custom programming built around your life, schedule, and sport. Weekly check-ins and direct access to Jake.
            </p>
            <p className="mt-6 text-sm text-zinc-600 group-hover:text-[#C2581F] transition-colors">
              Apply now →
            </p>
          </Link>
        </div>
      </section>

      {/* ============================================================
          SPLIT SECTION — Jake in gym with gloves
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-16">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-zinc-800">
          {/* Image */}
          <div className="relative h-80 lg:h-auto min-h-[400px]">
            <Image
              src="/Frontbicep.png"
              alt="Jake Peterson front bicep pose"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]/60 hidden lg:block" />
          </div>

          {/* Text */}
          <div className="bg-zinc-900/80 p-6 md:p-14 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C2581F] mb-4">The standard</p>
            <h2
              className="text-3xl md:text-5xl font-black uppercase text-white leading-tight mb-6"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              If it doesn't transfer, cut it.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Every exercise earns its place. Nothing is in the program just to make you tired. If your strength work is leaving you too beat up to do what you actually care about — it's not working.
            </p>
            <p className="text-zinc-300 font-semibold">
              That's the Built for Performance standard.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-24">
        <div className="flex items-end justify-between mb-12">
          <h2
            className="text-3xl md:text-5xl font-black uppercase text-white"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Real results.
          </h2>
          <span className="text-xs uppercase tracking-widest text-zinc-600 hidden md:block">From real people</span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Will */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-[#C2581F]/30 transition-all duration-300">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C2581F] text-sm">★</span>
              ))}
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm">
              "The lifts are specifically tailored to build strength for Muay Thai. Real improvements in mobility, power, and conditioning. Everything feels purposeful and directly translates to better performance."
            </p>
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <p className="font-bold text-white">Will</p>
              <p className="text-xs text-[#C2581F] uppercase tracking-wider mt-1">Muay Thai Competitor</p>
            </div>
          </div>

          {/* Tyler */}
          <div className="rounded-3xl border border-[#C2581F]/20 bg-zinc-900/60 p-8 relative">
            <div className="absolute -top-3 left-8">
              <span className="bg-[#C2581F] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                VO2 47 → 53
              </span>
            </div>
            <div className="flex items-center gap-1 mb-6 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C2581F] text-sm">★</span>
              ))}
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm">
              "Before this program I had no end goal in sight. Jake's program let me focus on joint health and mobility — it's helped my runs and overall performance significantly. Great mentor."
            </p>
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <p className="font-bold text-white">Tyler</p>
              <p className="text-xs text-[#C2581F] uppercase tracking-wider mt-1">Runner — 3 month transformation</p>
            </div>
          </div>

          {/* Jasmyn */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-[#C2581F]/30 transition-all duration-300">
            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#C2581F] text-sm">★</span>
              ))}
            </div>
            <p className="text-zinc-300 leading-relaxed text-sm">
              "Jake helped me realize that the heaviest weight is the door. Once I walked through it, everything else followed."
            </p>
            <div className="mt-8 pt-6 border-t border-zinc-800">
              <p className="font-bold text-white">Jasmyn</p>
              <p className="text-xs text-[#C2581F] uppercase tracking-wider mt-1">Corporate Professional</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PHYSIQUE / PROOF STRIP
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 rounded-3xl overflow-hidden">
          {[
            { src: "/Back.png", alt: "Jake Peterson back muscles" },
            { src: "/Cross.jpeg", alt: "Jake Peterson throwing a cross" },
            { src: "/Jiujitsu.jpeg", alt: "Jake Peterson jiujitsu training" },
            { src: "/Frontbicep.png", alt: "Jake Peterson front bicep" },
          ].map((img, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                style={img.src === "/Cross.jpeg" ? { objectPosition: "35% center" } : undefined}
              />
              <div className="absolute inset-0 bg-[#111111]/20 hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          VALUE PROP — 3 column
      ============================================================ */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
            <h2
              className="text-2xl font-black uppercase text-white mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              The Problem
            </h2>
            <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed">
              <li className="flex gap-3"><span className="text-[#C2581F] mt-0.5">—</span>Gym sessions that wreck you for days</li>
              <li className="flex gap-3"><span className="text-[#C2581F] mt-0.5">—</span>Programs that ignore your other training</li>
              <li className="flex gap-3"><span className="text-[#C2581F] mt-0.5">—</span>Strength that doesn't show up when it matters</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-[#C2581F]/20 bg-[#C2581F]/5 p-8">
            <h2
              className="text-2xl font-black uppercase text-[#C2581F] mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              The Filter
            </h2>
            <p className="text-white font-semibold leading-relaxed">
              If it doesn't transfer to your sport or protect your recovery — it's out.
            </p>
            <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
              Every session earns its place. Nothing is there just to make you tired.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
            <h2
              className="text-2xl font-black uppercase text-white mb-4"
              style={{ fontFamily: "Oswald, sans-serif" }}
            >
              What You Get
            </h2>
            <ul className="space-y-3 text-zinc-400 text-sm leading-relaxed">
              <li className="flex gap-3"><span className="text-[#C2581F] mt-0.5">—</span>Strength that transfers to your sport</li>
              <li className="flex gap-3"><span className="text-[#C2581F] mt-0.5">—</span>Durable joints and protected recovery</li>
              <li className="flex gap-3"><span className="text-[#C2581F] mt-0.5">—</span>Training built around your real schedule</li>
              <li className="flex gap-3"><span className="text-[#C2581F] mt-0.5">—</span>Progress you can sustain long-term</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA — Full bleed with sidekick photo
      ============================================================ */}
      <section className="relative overflow-hidden mx-6 md:mx-12 lg:mx-16 rounded-3xl mb-16">
        <div className="absolute inset-0">
          <Image
            src="/SidekickDG.jpeg"
            alt="Jake Peterson sidekick"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#111111]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
        </div>

        <div className="relative z-10 p-8 md:p-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#C2581F] mb-4">Built for Performance</p>
          <h3
            className="text-3xl sm:text-5xl md:text-7xl font-black uppercase text-white leading-tight"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Build capability.
            <br />
            <span className="text-[#C2581F]">Not just muscle.</span>
          </h3>

          <p className="mt-6 text-zinc-400 max-w-xl mx-auto leading-relaxed">
            This isn't about getting destroyed in the gym. It's about building a body that performs under pressure and stays durable over time.
          </p>

          <div className="mt-10">
            <Link
              href="/coaching"
              className="inline-flex items-center justify-center rounded-xl bg-[#C2581F] px-10 py-4 text-base font-bold text-white hover:bg-[#E06A28] transition-all duration-200 shadow-xl shadow-[#C2581F]/30"
            >
              Book a Call
            </Link>
          </div>

          <p className="mt-8 text-xs uppercase tracking-widest text-zinc-600">
            For athletes who train with purpose.
          </p>
        </div>
      </section>

    </main>
  );
}
