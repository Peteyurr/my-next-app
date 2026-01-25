"use client";

import Link from "next/link";

/*
  ============================================================
  LEAD MAGNET / OPT-IN PAGE
  ============================================================

  Purpose: This is your primary email capture page. The goal is to exchange
  valuable free content for an email address, starting your relationship
  with potential customers.

  Conversion goal: Email signup → Nurture sequence → Product/coaching sale
*/

export default function StartPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 px-6 py-16 flex items-center">
      {/* Back link */}
      <Link
        href="/"
        className="absolute top-6 left-6 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        ← Back
      </Link>

      <div className="mx-auto w-full max-w-xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs text-zinc-300 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Free Download
        </p>

        {/*
          UPDATE: LEAD MAGNET TITLE & DESCRIPTION
          Purpose: Communicate the value of your free offer

          When to update:
          - When you create a new lead magnet
          - When testing different angles/hooks
          - Seasonally if relevant (e.g., "New Year Reset Blueprint")

          Title should: Name the deliverable clearly
          Description should: Promise a specific outcome
        */}
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          The Strength Blueprint
        </h1>

        <p className="mt-4 text-lg text-zinc-300">
          Get the framework for building strength that transfers to real life —
          without wrecking your recovery.
        </p>

        <form action="/api/start-form" method="POST" className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-zinc-400">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm md:text-base text-zinc-50 placeholder-zinc-500 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-zinc-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.email@example.com"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm md:text-base text-zinc-50 placeholder-zinc-500 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          {/* Metadata */}
          <input type="hidden" name="source" value="Blueprint Opt-In" />
          <input type="hidden" name="_subject" value="New Blueprint Lead" />

          <button
            type="submit"
            className="mt-4 w-full rounded-2xl bg-white py-4 text-base font-semibold text-zinc-950 hover:bg-zinc-200 transition shadow-sm"
          >
            Get the free blueprint + weekly insights
          </button>
        </form>

        {/*
          UPDATE: LEAD MAGNET INCLUSIONS
          Purpose: Show the value stack - everything they get for free.
          This reduces friction by showing exactly what they're signing up for.

          What to update:
          - Match these bullets to what's actually in your lead magnet
          - Mention the email sequence so they expect it (reduces unsubscribes)
          - Be specific: "50+ page PDF" > "comprehensive guide"

          When messaging should change:
          - When you update the lead magnet content
          - When you change your email sequence topics
          - When you add bonuses to the free offer
        */}
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h3 className="text-sm font-semibold text-white mb-3">
            What you'll get:
          </h3>
          <ul className="space-y-2 text-sm text-zinc-400">
            {/* UPDATE: Match these to your actual lead magnet deliverables */}
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400 flex-shrink-0" />
              Instant PDF download with the core framework
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400 flex-shrink-0" />
              Weekly emails with programming principles
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400 flex-shrink-0" />
              Exercise technique breakdowns
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-emerald-400 flex-shrink-0" />
              Recovery strategies that actually work
            </li>
          </ul>
        </div>

        <p className="mt-6 text-xs text-zinc-500 text-center">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </main>
  );
}
