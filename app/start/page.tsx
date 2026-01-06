"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// keep static rendering preference, but page is a client component
export const dynamic = "force-static";

export default function StartPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/start-form", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        const data = await res.json().catch(() => null);
        if (data && data.redirect) {
          router.push(data.redirect);
          return;
        }
        // fallback: if no json redirect, try a generic thanks page
        router.push("/start/thanks");
        return;
      }

      const text = await res.text().catch(() => null);
      setError(text || "Submission failed");
    } catch (err: any) {
      setError(err?.message || String(err));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 px-6 py-16 flex items-center">
      <div className="mx-auto w-full max-w-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Round-Ready Blueprint
        </h1>

        <p className="mt-4 text-lg text-zinc-300">
          Strength and conditioning that transfers to rounds.
        </p>

        <p className="mt-3 text-sm text-zinc-400 max-w-xl">
          Short rules and session plans that protect your skill work and keep strength useful when the rounds start.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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

          <input type="hidden" name="source" value="IG Blueprint Opt-In" />
          <input type="hidden" name="_subject" value="New Blueprint Lead" />

          <button
            type="submit"
            disabled={submitting}
            className="mt-4 w-full rounded-2xl bg-white py-3 text-base font-medium text-zinc-950 hover:bg-zinc-200 shadow-sm disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send me the blueprint"}
          </button>
        </form>

        {error ? (
          <p className="mt-4 text-sm text-red-400">{error}</p>
        ) : (
          <p className="mt-4 text-xs text-zinc-500">No spam. One follow-up message only.</p>
        )}
      </div>
    </main>
  );
}
