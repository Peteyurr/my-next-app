"use client";
// app/start/page.tsx — focused opt-in for the Round-Ready Blueprint
import React, { useState } from "react";

export default function StartPage() {
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

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

        <form
          onSubmit={async (e: any) => {
            e.preventDefault();
            setError(null);
            setSubmitting(true);

            const form: HTMLFormElement = e.currentTarget;

            try {
              const payload = Object.fromEntries(new FormData(form).entries());

              // 1) Try your API first
              let res = await fetch("/api/start-form", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
              });

              // 2) If API fails (e.g., 405), fallback to Formspree direct
              if (!res.ok) {
                const fd = new FormData();
                for (const [k, v] of Object.entries(payload)) {
                  if (typeof v === "string") fd.append(k, v);
                }

                res = await fetch("https://formspree.io/f/mpqwyyaz", {
                  method: "POST",
                  body: fd,
                  headers: { Accept: "application/json" },
                });
              }

              // 3) Redirect only on success
              if (res.ok) {
                window.location.assign("/start/thanks");
                return;
              }

              // 4) Error handling (keep UI visible, no white screen)
              const json = await res.json().catch(() => ({}));
              try {
                // @ts-ignore
                window.__formspreeLastResponse = json;
              } catch {}

              try {
                form.dataset.submitted = "error";
              } catch {}

              setError("Submission failed. Please try again.");
            } catch (err) {
              console.error(err);
              try {
                (e.currentTarget as HTMLFormElement).dataset.submitted = "error";
              } catch {}
              setError("Submission failed. Please try again.");
            } finally {
              setSubmitting(false);
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
          {/* No native _next fallback — JS handler performs navigation. */}

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
