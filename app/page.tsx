import Link from "next/link";
import Navigation from "@/components/Navigation";
import Testimonial from "@/components/Testimonial";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--bfp-orange)]/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-[var(--bfp-orange-light)]/10 blur-[140px]" />
      </div>

      <Navigation ctaText="Book a Call" ctaHref="/coaching" />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)]" />
            Strength & Conditioning for Athletes
          </p>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Build capability.
            <br />
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Perform under pressure.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-8 text-zinc-300 max-w-2xl">
            Strength and conditioning for athletes who can't afford to be
            wrecked by their gym sessions.
          </p>

          <Link
            href="/start"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-[var(--bfp-orange)] px-8 py-4 text-base font-semibold text-white hover:bg-[var(--bfp-orange-light)] transition"
          >
            Get the free blueprint →
          </Link>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-4">
            <p className="text-sm text-zinc-300">
              The combat athlete who needs strength without being too sore to spar
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-4">
            <p className="text-sm text-zinc-300">
              The runner who wants to lift without killing their mileage
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-4">
            <p className="text-sm text-zinc-300">
              The desk worker who refuses to let a 9-to-5 wreck their body
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-4">
            <p className="text-sm text-zinc-300">
              The competitor who trains with purpose and can't afford to wing it
            </p>
          </div>
        </div>
      </section>

      {/* Three Paths */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Free Blueprint */}
          <Link
            href="/start"
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-[var(--bfp-orange)]/50 hover:bg-zinc-900/70 transition-all"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bfp-orange)]/10 border border-[var(--bfp-orange)]/20">
              <svg
                className="h-6 w-6 text-[var(--bfp-orange-light)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--bfp-orange-light)] mb-2">
              Free
            </p>
            <h3 className="text-xl font-bold text-white group-hover:text-[var(--bfp-orange-light)] transition-colors">
              The Blueprint
            </h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              The framework for strength training that protects your recovery and
              transfers to real life. Plus weekly training insights.
            </p>
            <p className="mt-4 text-sm text-zinc-500 group-hover:text-[var(--bfp-orange-light)] transition-colors">
              Get it free →
            </p>
          </Link>

          {/* Full Programs */}
          <Link
            href="/products"
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-[var(--bfp-orange)]/50 hover:bg-zinc-900/70 transition-all"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--bfp-orange)]/10 border border-[var(--bfp-orange)]/20">
              <svg
                className="h-6 w-6 text-[var(--bfp-orange-light)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--bfp-orange-light)] mb-2">
              Programs
            </p>
            <h3 className="text-xl font-bold text-white group-hover:text-[var(--bfp-orange-light)] transition-colors">
              Full Programs
            </h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              Complete systems with programming, video guides, and progression
              built for people who train with purpose.
            </p>
            <p className="mt-4 text-sm text-zinc-500 group-hover:text-[var(--bfp-orange-light)] transition-colors">
              Browse programs →
            </p>
          </Link>

          {/* 1:1 Coaching */}
          <Link
            href="/coaching"
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700">
              <svg
                className="h-6 w-6 text-zinc-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Limited Spots
            </p>
            <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">
              1:1 Coaching
            </h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              Custom programming built around your life, schedule, and
              priorities. Weekly check-ins and direct access.
            </p>
            <p className="mt-4 text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
              Apply now →
            </p>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
          What clients are saying
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Testimonial
            quote="The lifts are specifically tailored to build strength for Muay Thai. I've noticed real improvements in my mobility, overall power, and conditioning. Everything feels purposeful and directly translates to better performance."
            name="Will"
            focus="Muay Thai Competitor"
            result="Strength & power gains"
          />
          <Testimonial
            quote="Before this program I was just doing my usual routine with no end goal. Jake's program allowed me to focus on joint health and mobility — it's helped my runs and overall performance."
            name="Tyler"
            focus="Runner"
            result="VO2 max 47 → 53 in 3 months"
          />
          <Testimonial
            quote="Jake helped me realize that the heaviest weight is the door."
            name="Jasmyn"
            focus="Corporate Professional"
            result="Consistent training habit built"
          />
        </div>
      </section>

      {/* Value Proposition */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7">
            <h2 className="text-xl font-semibold">The problem</h2>
            <ul className="mt-4 space-y-3 text-base text-zinc-300 leading-7">
              <li>• Gym sessions that leave you wrecked for days</li>
              <li>• Programs that ignore your other training</li>
              <li>• Strength work that doesn't show up in real life</li>
            </ul>
            <p className="mt-4 text-sm text-zinc-400 leading-7">
              When recovery is limited, the wrong training takes more than it
              gives.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7">
            <h2 className="text-xl font-semibold">The filter</h2>
            <p className="mt-4 text-base text-zinc-300">
              <span className="font-medium text-white">
                If it doesn't transfer to real life or protect your recovery,
                cut it.
              </span>
            </p>
            <p className="mt-3 text-sm text-zinc-400 leading-7">
              Every exercise earns its place. Nothing is there just to make you
              tired.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7">
            <h2 className="text-xl font-semibold">What you get</h2>
            <ul className="mt-4 space-y-3 text-base text-zinc-300 leading-7">
              <li>• Strength that transfers outside the gym</li>
              <li>• Training that fits your real schedule</li>
              <li>• Protected recovery for everything else</li>
              <li>• Sustainable progress you can maintain</li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 rounded-[2rem] border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 p-10 text-center">
          <p className="mx-auto max-w-2xl text-sm text-zinc-300">
            <span className="font-medium text-white">Straight talk:</span> This
            isn't about getting destroyed in the gym. It's about building
            strength that supports your life — not competes with it.
          </p>

          <h3 className="mt-8 text-3xl font-semibold tracking-tight">
            Build capability. Not just muscle.
          </h3>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--bfp-orange)] px-10 py-4 text-base font-medium text-white hover:bg-[var(--bfp-orange-light)] transition"
            >
              Get the free blueprint
            </Link>

            <Link
              href="/coaching"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-600 bg-transparent px-10 py-4 text-base font-medium text-white hover:bg-zinc-800 transition"
            >
              Book a call instead
            </Link>
          </div>

          <p className="mt-6 text-xs uppercase tracking-widest text-zinc-500">
            For people who value their time.
          </p>
        </div>
      </section>
    </main>
  );
}
