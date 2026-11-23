import { FIT_TO_FIGHT_URL } from "./links";

const POINTS = [
  "2 small-group sessions a week, 1 hour each",
  "Baseline and final testing, with a PDF report",
  "Built for a bout or tournament in the next 90 days",
];

export default function FitToFight() {
  return (
    <section className="bg-ink py-20 text-cream md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[720px]">
          <p className="font-display text-[12px] font-medium uppercase tracking-[0.38em] text-line">
            For combat athletes
          </p>
          <h2 className="font-display mt-4 text-[32px] font-extrabold uppercase leading-[1.05] md:text-[48px]">
            Fit to Fight.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-on-ink-muted md:text-[18px]">
            A 6-week strength and conditioning program at Dragon Gym. Small
            cohorts, velocity-based testing, and sport-specific programming.
          </p>

          <ul className="mt-8 border-b border-ink-line">
            {POINTS.map((p) => (
              <li
                key={p}
                className="border-t border-ink-line py-4 text-[17px] leading-relaxed text-cream"
              >
                {p}
              </li>
            ))}
          </ul>

          <a
            href={FIT_TO_FIGHT_URL}
            target="_blank"
            rel="noopener"
            className="font-display mt-8 flex min-h-[54px] w-full items-center justify-center bg-cream px-7 text-[13px] font-bold uppercase tracking-[0.12em] text-ink sm:inline-flex sm:w-auto"
          >
            Request a spot
          </a>
          <p className="mt-3 text-[14px] text-on-ink-muted">
            Opens Dragon Gym&apos;s Fit to Fight page
          </p>
        </div>
      </div>
    </section>
  );
}
