import Navigation from "@/components/Navigation";
import Image from "next/image";


export default function CoachingPage() {
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

      <Navigation ctaText="Book a Call" ctaHref="/coaching" />

      {/* Availability banner */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pt-8">
        <div className="rounded-2xl border border-[#C2581F]/30 bg-[#C2581F]/10 px-6 py-4 text-center">
          <p className="text-sm text-zinc-200">
            <span className="font-bold text-[#C2581F]">Limited spots available for February</span>
            {" "}— Book your call to secure yours
          </p>
        </div>
      </section>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pt-16 pb-8">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2581F] font-semibold mb-6">
          <span className="h-px w-8 bg-[#C2581F]" />
          1:1 Coaching
        </p>
        <h1
          className="text-6xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight text-white"
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Built around<br />
          <span className="text-[#C2581F]">your life.</span>
        </h1>
        <p className="mt-6 text-lg text-zinc-400 max-w-xl leading-relaxed">
          Custom programming that adapts to your schedule, your sport, and your recovery. Not a template. A direct line to training that actually fits.
        </p>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 py-12">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left — Info */}
          <div className="space-y-6">

            {/* What you get */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3
                className="text-2xl font-black uppercase text-white mb-6"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                What's included
              </h3>
              <ul className="space-y-4">
                {[
                  "Custom programming synced to your training schedule",
                  "Weekly check-ins and program adjustments",
                  "Direct messaging access — ask anything, anytime",
                  "Video movement analysis and form feedback",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-300">
                    <span className="mt-1 h-px w-4 bg-[#C2581F] flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What the call looks like */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h3
                className="text-2xl font-black uppercase text-white mb-6"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                The call
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                30 minutes. No pitch, no pressure. We'll talk about your training, your goals, and whether custom programming actually makes sense for where you're at.
              </p>
              <ul className="space-y-3">
                {[
                  "Review your current schedule and recovery",
                  "Identify what's holding you back",
                  "Walk through how the programming works",
                  "If it's a fit — we can start immediately",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                    <span className="text-[#C2581F] font-bold flex-shrink-0">0{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Testimonials */}
            <div className="space-y-4">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-[#C2581F] text-sm">★</span>)}
                </div>
                <p className="text-zinc-300 leading-relaxed text-sm">
                  "Before this program I had no end goal in sight. Jake's program let me focus on joint health and mobility — it's helped my runs and overall performance significantly. Great mentor."
                </p>
                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <p className="font-bold text-white text-sm">Tyler</p>
                  <p className="text-xs text-[#C2581F] uppercase tracking-wider mt-1">Runner — VO2 47 → 53 in 3 months</p>
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-[#C2581F] text-sm">★</span>)}
                </div>
                <p className="text-zinc-300 leading-relaxed text-sm">
                  "The lifts are specifically tailored to build strength for Muay Thai. Real improvements in mobility, power, and conditioning. Everything feels purposeful."
                </p>
                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <p className="font-bold text-white text-sm">Will</p>
                  <p className="text-xs text-[#C2581F] uppercase tracking-wider mt-1">Muay Thai Competitor</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right — Calendar */}
          <div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 sticky top-8">
              <h2
                className="text-3xl font-black uppercase text-white mb-2"
                style={{ fontFamily: "Oswald, sans-serif" }}
              >
                Book your call
              </h2>
              <p className="text-zinc-500 text-sm mb-6">Free. 30 minutes. No obligation.</p>

              <div style={{ minWidth: "320px", height: "700px" }}>
                <iframe
                  src="https://calendly.com/jake24peterson/30min?embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Book a Strategy Call"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16 pb-24">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10 text-center">
          <p className="text-zinc-500 text-sm uppercase tracking-widest mb-3">Have questions?</p>
          <h3
            className="text-3xl font-black uppercase text-white mb-4"
            style={{ fontFamily: "Oswald, sans-serif" }}
          >
            Let's talk about your training.
          </h3>
          <p className="text-zinc-400 max-w-md mx-auto text-sm leading-relaxed mb-8">
            30 minutes. No pressure. We'll figure out if custom coaching is the right move for you.
          </p>
          <a
            href="/coaching"
            className="inline-flex items-center justify-center rounded-xl bg-[#C2581F] px-8 py-4 text-base font-bold text-white hover:bg-[#E06A28] transition-all duration-200 shadow-lg shadow-[#C2581F]/20"
          >
            Book a Call →
          </a>
        </div>
      </section>

    </main>
  );
}
