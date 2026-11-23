"use client";

import { useId, useState, type FormEvent } from "react";

const KIT_FORM_ID = process.env.NEXT_PUBLIC_KIT_FORM_ID;

type Props = {
  tone?: "dark" | "light";
  buttonLabel?: string;
  className?: string;
};

type Status = "idle" | "joining" | "joined" | "error";

/**
 * Email signup that subscribes to the Kit form (NEXT_PUBLIC_KIT_FORM_ID).
 * Kit's endpoint sends no CORS headers, so we post with mode "no-cors" and
 * treat a resolved fetch as success (the response body is unreadable).
 */
export default function NewsletterForm({
  tone = "dark",
  buttonLabel = "Subscribe",
  className = "",
}: Props) {
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const dark = tone === "dark";
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    if (!email || !KIT_FORM_ID) {
      setStatus("error");
      return;
    }

    setStatus("joining");
    try {
      await fetch(`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email_address: email }).toString(),
      });
      setStatus("joined");
    } catch {
      setStatus("error");
    }
  }

  const textColor = dark ? "text-cream" : "text-ink";

  if (status === "joined") {
    return (
      <p
        role="status"
        className={`max-w-[640px] text-[19px] font-semibold leading-relaxed ${textColor} ${className}`}
      >
        You&apos;re in. Check your inbox.
      </p>
    );
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className={`max-w-[640px] ${className}`}
    >
      <label
        htmlFor={inputId}
        className={`font-display block text-[12px] font-semibold uppercase tracking-[0.2em] ${textColor}`}
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
          maxLength={200}
          aria-describedby={status === "error" ? errorId : undefined}
          className={`min-h-[52px] w-full flex-1 rounded-none border-2 bg-white px-4 font-sans text-[16px] text-ink ${
            dark ? "border-cream" : "border-ink"
          }`}
        />
        <button
          type="submit"
          disabled={status === "joining"}
          className={`font-display min-h-[52px] px-8 text-[13px] font-bold uppercase tracking-[0.12em] disabled:cursor-wait disabled:opacity-70 ${
            dark ? "bg-cream text-ink" : "bg-ink text-cream"
          }`}
        >
          {status === "joining" ? "Joining…" : buttonLabel}
        </button>
      </div>
      {status === "error" && (
        <p id={errorId} role="alert" className={`mt-3 text-[16px] font-semibold ${textColor}`}>
          Couldn&apos;t sign you up. Try again or email{" "}
          <a
            href="mailto:jake24peterson@gmail.com"
            className="break-all underline decoration-2 underline-offset-4"
          >
            jake24peterson@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}
