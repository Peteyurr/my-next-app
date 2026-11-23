"use client";

import { useId, type FormEvent } from "react";

type Props = {
  tone?: "dark" | "light";
  buttonLabel?: string;
  className?: string;
};

export default function NewsletterForm({
  tone = "dark",
  buttonLabel = "Subscribe",
  className = "",
}: Props) {
  const inputId = useId();
  const dark = tone === "dark";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO(3c): send to Kit
  }

  return (
    <form onSubmit={handleSubmit} className={`max-w-[640px] ${className}`}>
      <label
        htmlFor={inputId}
        className={`font-display block text-[12px] font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        Email
      </label>
      <div className="mt-2 flex flex-col gap-3 md:flex-row">
        <input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          className={`min-h-[52px] w-full flex-1 rounded-none border-2 bg-white px-4 font-sans text-[16px] text-ink ${
            dark ? "border-cream" : "border-ink"
          }`}
        />
        <button
          type="submit"
          className={`font-display min-h-[52px] px-8 text-[13px] font-bold uppercase tracking-[0.12em] ${
            dark ? "bg-cream text-ink" : "bg-ink text-cream"
          }`}
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
