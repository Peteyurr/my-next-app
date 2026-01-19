"use client";

import Link from "next/link";

export const dynamic = "force-static";

export default function StartThanksPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 px-6 py-16 flex items-center">
      <div className="mx-auto w-full max-w-xl">
        <p className="text-sm uppercase tracking-wide text-zinc-400">
          Submission received
        </p>

        <h1 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
          You’re on the list.
        </h1>

        <p className="mt-4 text-lg text-zinc-300">
          Thanks for signing up. I’ll send your Round-Ready Blueprint shortly.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/start"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
          >
            Back to start
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-50"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
