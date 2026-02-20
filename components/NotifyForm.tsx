"use client";

import { useState } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/mpqwyyaz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#C2581F]/30 bg-[#C2581F]/10 p-5">
        <p className="text-[#C2581F] font-semibold text-sm">You're on the list!</p>
        <p className="text-zinc-400 text-xs mt-1">We'll let you know when it drops.</p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#C2581F] transition-colors"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-xl bg-[#C2581F] px-6 py-3 text-sm font-bold text-white hover:bg-[#E06A28] transition-all duration-200 shadow-lg shadow-[#C2581F]/20 whitespace-nowrap disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Notify Me"}
        </button>
      </form>
      {status === "error" && (
        <p className="mt-2 text-xs text-red-400">Something went wrong, try again.</p>
      )}
    </div>
  );
}
