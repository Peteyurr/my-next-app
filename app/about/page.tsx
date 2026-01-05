"use client";
// app/about/page.tsx
export default function AboutLeadPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 px-5 py-14">
      <div className="mx-auto max-w-md">
        {/* Subtle header / identity */}
        <p className="mb-6 text-xs uppercase tracking-widest text-zinc-500">
          Petyurr
        </p>

        {/* Headline */}
        <h1 className="text-3xl font-semibold leading-tight">
          Strength & Conditioning for Combat Sports
        </h1>

        {/* Body copy */}
        <p className="mt-4 text-[15.5px] leading-relaxed text-zinc-300">
          If you train a combat sport seriously, strength work should support your
          training — not compete with it.
        </p>

        <p className="mt-3 text-[15.5px] leading-relaxed text-zinc-300">
          Most people don’t struggle because they aren’t working hard enough.
          They struggle because different parts of their training pull in
          different directions.
        </p>

        <p className="mt-3 text-[15.5px] leading-relaxed text-zinc-300">
          This blueprint exists to fix that.
        </p>

        {/* Signature divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        {/* What they get */}
        <h2 className="text-lg font-medium">
          Combat Strength + Conditioning Blueprint
        </h2>

        <ul className="mt-4 space-y-3 text-[15.5px] leading-relaxed text-zinc-300">
          <li>• Strength that actually carries over</li>
          <li>• Conditioning that matches rounds</li>
          <li>• Fewer mistakes with recovery</li>
          <li>• Clear keep / cut rules</li>
        </ul>

        <p className="mt-4 text-sm text-zinc-400">
          Short. Practical. Built to reduce interference.
        </p>

        {/* Signature divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

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
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-4 text-base text-zinc-50 outline-none focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your.email@example.com"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-4 text-base text-zinc-50 outline-none focus:border-zinc-500"
            />
          </div>
          <input type="hidden" name="source" value="IG Blueprint Opt-In" />

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-white py-4 text-base font-medium text-zinc-950 hover:bg-zinc-200"
          >
            Send me the blueprint
          </button>
        </form>

        <p className="mt-5 text-xs text-zinc-500">
          No spam. One follow-up message only.
        </p>

        {/* Footer cue */}
        <p className="mt-14 text-xs text-zinc-500 text-center">
          Built for people who take training seriously.
        </p>
      </div>
    </main>
  );
}
