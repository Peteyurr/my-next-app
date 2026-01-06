"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export const dynamic = "force-static";

export default function ThanksPage() {
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    // Delay slightly so page renders first (avoids Safari issues)
    const timer = setTimeout(() => {
      downloadRef.current?.click();
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50">
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-sm text-zinc-200">
          Submission received
        </p>

        <h1 className="mt-5 text-4xl font-bold tracking-tight">
          You’re in. Here’s your blueprint.
        </h1>

        {/* Hidden auto-download link */}
        <a
          ref={downloadRef}
          href="/combat-blueprint.pdf"
          download
          className="hidden"
        >
          Download
        </a>

        <div className="mt-10 flex flex-wrap gap-3">
          {/* Manual fallback */}
          <a
            href="/combat-blueprint.pdf"
            className="rounded-xl bg-zinc-50 px-5 py-3 font-semibold text-zinc-950"
            target="_blank"
            rel="noreferrer"
          >
            Download again
          </a>

          <Link
            href="/"
            className="rounded-xl border border-zinc-800 px-5 py-3 font-semibold text-zinc-50"
          >
            Back to site
          </Link>
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="text-lg font-semibold">Want help implementing it?</h2>
          <p className="mt-2 text-sm text-zinc-300">
            Reply “ROUND-READY” with your sport (MMA/boxing/BJJ/wrestling) and I’ll tell you the
            fastest way to apply this to your week.
          </p>
        </div>

        <footer className="mt-14 border-t border-zinc-800 pt-8 text-sm text-zinc-400">
          © 2026 Peteyurr. No-BS training you can actually follow.
        </footer>
      </section>
    </main>
  );
}
