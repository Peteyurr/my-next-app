import Image from "next/image";
import Link from "next/link";
import { KIT_PROGRAM_URL } from "./links";

const ROWS = [
  {
    label: "Who it's for",
    value: "Muay Thai, BJJ, MMA and other combat athletes",
  },
  {
    label: "You should have",
    value:
      "Some weightlifting experience: you know your way around a squat, deadlift and press",
  },
  {
    label: "You get",
    value:
      "3 strength days a week, well-rounded conditioning, and optional mobility work. A full 8-week PDF, sent to your inbox.",
  },
];

export default function ProgramSection() {
  return (
    <section id="program" className="bg-ink py-20 text-cream md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:gap-16">
        <div className="min-w-0">
          <p className="font-display inline-block border-2 border-cream px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.2em]">
            Free program
          </p>
          <h2 className="font-display mt-6 text-[32px] font-extrabold uppercase leading-[1.05] md:text-[48px]">
            8-Week Combat Sports S&amp;C Program
          </h2>
          <p className="mt-4 max-w-[600px] text-[17px] leading-relaxed text-on-ink-muted md:text-[18px]">
            An 8-week program carefully constructed for combat athletes to
            develop strength, power, and cardiovascular adaptation. Get more
            growth out of less volume, so you&apos;re always fresh for your
            sport.
          </p>

          <dl className="mt-8 border-b border-ink-line">
            {ROWS.map((r) => (
              <div
                key={r.label}
                className="grid gap-1 border-t border-ink-line py-4 md:grid-cols-[180px_minmax(0,1fr)] md:gap-6"
              >
                <dt className="font-display pt-1 text-[12px] font-semibold uppercase tracking-[0.2em] text-line">
                  {r.label}
                </dt>
                <dd className="text-[17px] leading-relaxed text-cream">
                  {r.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="border-2 border-cream">
          <div className="relative h-[240px] w-full">
            <Image
              src="/HIGH_TEEP.jpeg"
              alt="Jake throwing a high teep kick"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
          <div className="border-t-2 border-cream p-6">
            <a
              href={KIT_PROGRAM_URL}
              target="_blank"
              rel="noopener"
              className="font-display flex min-h-[54px] w-full items-center justify-center bg-cream px-7 text-center text-[13px] font-bold uppercase tracking-[0.12em] text-ink"
            >
              Get the free program
            </a>
            <p className="mt-4 text-[14px] leading-relaxed text-on-ink-muted">
              Opens the signup page (name, email, phone). New to lifting?{" "}
              <Link
                href="/coaching"
                className="font-semibold text-cream underline decoration-2 underline-offset-4"
              >
                Start with coaching
              </Link>{" "}
              instead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
