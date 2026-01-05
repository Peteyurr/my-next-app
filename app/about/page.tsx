"use client";
// app/about/page.tsx
export default function AboutLeadPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Subtle header / identity */}
        <p className="mb-6 text-sm uppercase tracking-wide text-zinc-500">
          Petyurr
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Strength & Conditioning for Combat Sports
        </h1>

        {/* Body copy */}
        <p className="mt-6 text-lg md:text-xl leading-relaxed md:leading-8 text-zinc-300">
          Your training should make your rounds easier, cleaner, and more consistent.
        </p>

        <p className="mt-4 text-lg md:text-xl leading-relaxed md:leading-8 text-zinc-300">
          Most programs add volume or intensity without asking whether the work
          survives fatigue or protects skill practice. That mismatch steals timing
          and effectiveness on fight night.
        </p>

        <p className="mt-4 text-lg md:text-xl leading-relaxed md:leading-8 text-zinc-300">
          This blueprint gives simple rules and session choices designed for
          carryover — less interference, more usable strength and conditioning.
        </p>

        {/* Signature divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        {/* What they get */}
        <h2 className="text-xl md:text-2xl font-semibold">
          Combat Strength + Conditioning Blueprint
        </h2>

        <ul className="mt-4 space-y-2 text-base md:text-lg leading-relaxed text-zinc-300 list-disc pl-5">
          <li>Strength that shows up in rounds</li>
          <li>Conditioning matched to round structure</li>
          <li>Minimal interference with skill sessions</li>
          <li>Clear keep / cut rules for every session</li>
        </ul>

        <p className="mt-3 text-sm text-zinc-400">
          Short, practical rules you can apply immediately.
        </p>

        {/* Signature divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        {/* FORM */}
        <form
  onSubmit={async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const res = await fetch("https://formspree.io/f/mpqwyyaz", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Formspree failed");

      window.location.assign("/thanks");
    } catch (err) {
      console.error(err);
      alert("Submission failed. Try again or disable adblock.");
    }
  }}
  className="mt-6 space-y-4"
>
          <div>
            <label className="block text-sm text-zinc-400">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm md:text-base text-zinc-50 placeholder-zinc-500 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your.email@example.com"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm md:text-base text-zinc-50 placeholder-zinc-500 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-700"
            />
          </div>
          <input type="hidden" name="source" value="IG Blueprint Opt-In" />

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-white py-3 md:py-4 text-sm md:text-base font-medium text-zinc-950 hover:bg-zinc-200 shadow-sm"
          >
            Send me the blueprint
          </button>
        </form>

        <p className="mt-4 text-xs text-zinc-500">No spam. One follow-up message only.</p>

        {/* Footer cue */}
        <p className="mt-10 text-xs text-zinc-500 text-center">
          For fighters who need training that actually transfers to rounds.
        </p>
      </div>
    </main>
  );
}
