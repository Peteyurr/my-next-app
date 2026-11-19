"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

function getCta(pathname: string) {
  if (pathname === "/dragon-gym") {
    return { label: "Book your session", href: "#book" };
  }
  if (pathname === "/coaching") {
    return { label: "Choose how to start", href: "#options" };
  }
  return { label: "Book a consult", href: "/dragon-gym" };
}

export default function StickyBookBar() {
  const pathname = usePathname();
  const { label, href } = getCta(pathname ?? "/");

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-stretch gap-3 border-t-2 border-ink bg-cream px-6 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden">
      <Link
        href={href}
        className="font-display flex h-[54px] flex-1 items-center justify-center bg-ink text-[13px] font-bold uppercase tracking-[0.12em] text-cream"
      >
        {label}
      </Link>
      <a
        href="tel:+17174484222"
        aria-label="Call or text Jake"
        className="flex h-[54px] w-[54px] shrink-0 items-center justify-center border-2 border-ink"
      >
        <Phone className="h-6 w-6 text-ink" aria-hidden="true" />
      </a>
    </div>
  );
}
