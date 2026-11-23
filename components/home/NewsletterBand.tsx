"use client";

import type { FormEvent } from "react";

export default function NewsletterBand() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(3c): send to Kit
  }

  return (
    <section className="bg-ink py-20 text-cream md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-display text-[26px] font-extrabold uppercase leading-tight md:text-[36px]">
          Training notes, straight to your inbox.
        </h2>
        <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-on-ink-muted md:text-[18px]">
          Programs, breakdowns, and new free resources as they drop.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 max-w-[640px]">
          <label
            htmlFor="newsletter-email"
            className="font-display block text-[12px] font-semibold uppercase tracking-[0.2em] text-cream"
          >
            Email
          </label>
          <div className="mt-2 flex flex-col gap-3 md:flex-row">
            <input
              id="newsletter-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              className="min-h-[52px] w-full flex-1 rounded-none border-2 border-cream bg-white px-4 font-sans text-[16px] text-ink"
            />
            <button
              type="submit"
              className="font-display min-h-[52px] bg-cream px-8 text-[13px] font-bold uppercase tracking-[0.12em] text-ink"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
