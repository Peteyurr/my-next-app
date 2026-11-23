import type { ReactNode } from "react";
import Image from "next/image";

type Props = {
  meta: string;
  title: string;
  tone?: "cream" | "cream-dark";
  children: ReactNode;
};

/** A story chapter: meta + H2 in a 320px left column at lg, text column (max 700px) on the right. */
export default function Chapter({ meta, title, tone = "cream", children }: Props) {
  return (
    <section
      className={`border-t-2 border-ink py-20 text-ink md:py-24 ${
        tone === "cream-dark" ? "bg-cream-dark" : "bg-cream"
      }`}
    >
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-stone">
            {meta}
          </p>
          <h2 className="font-display mt-4 text-[32px] font-extrabold uppercase leading-[1.05] lg:text-[44px]">
            {title}
          </h2>
        </div>
        <div className="min-w-0 max-w-[700px] space-y-6 text-[17px] leading-[1.7] text-stone-dark md:text-[18px]">
          {children}
        </div>
      </div>
    </section>
  );
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="font-display border-y-2 border-ink py-6 text-[21px] font-extrabold uppercase leading-[1.2] text-ink md:text-[26px]">
      <p>{children}</p>
    </blockquote>
  );
}

export function Emphasis({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export function FramedPhoto({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative border-2 border-ink bg-sand ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
