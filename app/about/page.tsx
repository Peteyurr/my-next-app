// app/about/page.tsx
export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <p className="mb-6 text-sm uppercase tracking-wide text-zinc-500">
          Peteyurr
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Strength &amp; Conditioning for Combat Sports
        </h1>

        <p className="mt-6 text-lg md:text-xl leading-relaxed md:leading-8 text-zinc-300">
          Your training should make your rounds easier, cleaner, and more consistent.
        </p>

        <p className="mt-4 text-lg md:text-xl leading-relaxed md:leading-8 text-zinc-300">
          Most programs add volume or intensity without asking whether the work survives fatigue
          or protects skill practice. That mismatch steals timing and effectiveness on fight night.
        </p>

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        <h2 className="text-xl md:text-2xl font-semibold">
          Get the Blueprint (free PDF)
        </h2>

        <p className="mt-3 text-base md:text-lg text-zinc-300">
          Drop your name + email and I’ll send you to the download page.
        </p>

<form action="/thanks" method="GET">
          <div>
            <label className="block text-sm text-zinc-400" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm md:text-base text-zinc-50 placeholder-zinc-500 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="your.email@example.com"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm md:text-base text-zinc-50 placeholder-zinc-500 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          <input type="hidden" name="source" value="About Page Opt-In" />
          <input type="hidden" name="_subject" value="New Blueprint Lead" />

          <button
            type="submit"
            className="mt-4 w-full rounded-2xl bg-white py-3 md:py-4 text-sm md:text-base font-medium text-zinc-950 hover:bg-zinc-200 shadow-sm"
          >
            Get the PDF
          </button>
        </form>

        <p className="mt-4 text-xs text-zinc-500">
          No spam. One follow-up message only.
        </p>

        <p className="mt-10 text-xs text-zinc-500 text-center">
          For fighters who need training that actually transfers to rounds.
        </p>
      </div>
    </main>
  );
}
