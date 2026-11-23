"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CAL_LINK, CAL_URL, primaryBtn } from "./links";

const NAMESPACE = "dragon-gym";
const LOAD_TIMEOUT_MS = 15000;

export default function CalEmbed() {
  const [status, setStatus] = useState<"loading" | "ready" | "failed">(
    "loading"
  );

  useEffect(() => {
    let done = false;
    const timer = window.setTimeout(() => {
      if (!done) setStatus("failed");
    }, LOAD_TIMEOUT_MS);

    getCalApi({ namespace: NAMESPACE })
      .then((cal) => {
        // Brand color comes from the theme's --foreground (ink) so no raw hex lives here.
        const ink = getComputedStyle(document.documentElement)
          .getPropertyValue("--foreground")
          .trim();
        cal("ui", {
          theme: "light",
          hideEventTypeDetails: false,
          layout: "month_view",
          ...(ink
            ? {
                cssVarsPerTheme: {
                  light: { "cal-brand": ink },
                  dark: { "cal-brand": ink },
                },
              }
            : {}),
        });
        cal("on", {
          action: "linkReady",
          callback: () => {
            done = true;
            setStatus("ready");
          },
        });
        cal("on", {
          action: "linkFailed",
          callback: () => {
            done = true;
            setStatus("failed");
          },
        });
      })
      .catch(() => {
        done = true;
        setStatus("failed");
      });

    return () => window.clearTimeout(timer);
  }, []);

  if (status === "failed") {
    return (
      <div className="flex min-h-[240px] flex-col items-start justify-center gap-4 border-2 border-ink bg-cream p-6">
        <p className="text-[17px] leading-relaxed text-stone-dark">
          The calendar didn&apos;t load here.
        </p>
        <a href={CAL_URL} target="_blank" rel="noopener" className={primaryBtn}>
          Open the booking page
        </a>
      </div>
    );
  }

  return (
    <div className="w-full border-2 border-ink bg-cream">
      <Cal
        namespace={NAMESPACE}
        calLink={CAL_LINK}
        style={{ width: "100%", minHeight: 650, overflow: "auto" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
