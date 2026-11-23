"use client";

import { useEffect, useRef, useState } from "react";
import { primaryBtn } from "@/components/dragon-gym/links";

export const CALENDLY_URL = "https://calendly.com/jake24peterson/30min";
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const LOAD_TIMEOUT_MS = 15000;

type CalendlyGlobal = {
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
  }
}

function loadScript(): Promise<CalendlyGlobal> {
  if (window.Calendly) return Promise.resolve(window.Calendly);
  return new Promise((resolve, reject) => {
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );
    if (!script) {
      script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", () =>
      window.Calendly ? resolve(window.Calendly) : reject()
    );
    script.addEventListener("error", () => reject());
  });
}

export default function CalendlyEmbed() {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "failed">(
    "loading"
  );

  useEffect(() => {
    let done = false;
    const onMessage = (e: MessageEvent) => {
      if (
        e.origin === "https://calendly.com" &&
        typeof e.data?.event === "string" &&
        e.data.event.startsWith("calendly.")
      ) {
        done = true;
        setStatus("ready");
      }
    };
    window.addEventListener("message", onMessage);
    const timer = window.setTimeout(() => {
      if (!done) setStatus("failed");
    }, LOAD_TIMEOUT_MS);

    loadScript()
      .then((calendly) => {
        if (!ref.current) return;
        // Brand color comes from the theme's --foreground (ink); Calendly wants it without "#".
        const ink = getComputedStyle(document.documentElement)
          .getPropertyValue("--foreground")
          .trim()
          .replace("#", "");
        const params = new URLSearchParams({ hide_gdpr_banner: "1" });
        if (ink) params.set("primary_color", ink.toLowerCase());
        ref.current.innerHTML = "";
        calendly.initInlineWidget({
          url: `${CALENDLY_URL}?${params.toString()}`,
          parentElement: ref.current,
        });
      })
      .catch(() => {
        done = true;
        setStatus("failed");
      });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  if (status === "failed") {
    return (
      <div className="flex min-h-[240px] flex-col items-start justify-center gap-4 border-2 border-ink bg-cream p-6">
        <p className="text-[17px] leading-relaxed text-stone-dark">
          The calendar didn&apos;t load here.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener"
          className={primaryBtn}
        >
          Open the booking page
        </a>
      </div>
    );
  }

  return (
    <div className="w-full border-2 border-ink bg-cream">
      <div ref={ref} className="h-[700px] w-full min-w-0" />
    </div>
  );
}
