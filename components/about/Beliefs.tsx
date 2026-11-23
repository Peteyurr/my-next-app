import type { ReactNode } from "react";

type Props = {
  statement: string;
  paragraphs: string[];
  philosophy: string;
};

export default function Beliefs({ statement, paragraphs, philosophy }: Props): ReactNode {
  return (
    <section className="bg-ink py-20 text-cream md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[900px]">
          <p className="font-display text-[12px] font-medium uppercase tracking-[0.38em] text-line">
            What I believe
          </p>
          <p className="font-display mt-6 text-[26px] font-extrabold uppercase leading-[1.1] lg:text-[44px]">
            {statement}
          </p>
          {paragraphs.map((p) => (
            <p
              key={p}
              className="mt-6 max-w-[700px] text-[17px] leading-[1.7] text-on-ink-muted md:text-[18px]"
            >
              {p}
            </p>
          ))}

          <figure className="mt-12 max-w-[760px] border-t border-ink-line pt-8">
            <blockquote className="text-[19px] leading-[1.6] text-cream md:text-[22px]">
              <p>{philosophy}</p>
            </blockquote>
            <figcaption className="font-display mt-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-line">
              — Jake&apos;s philosophy
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
