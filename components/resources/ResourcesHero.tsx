import { eyebrowClass } from "@/components/dragon-gym/links";

const JUMPS = [
  { label: "Free 8-week program", href: "#program" },
  { label: "Exercise library", href: "#library" },
  { label: "Articles", href: "#articles" },
];

export default function ResourcesHero() {
  return (
    <section className="bg-cream py-20 text-ink lg:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end lg:gap-16">
        <div className="min-w-0">
          <p className={eyebrowClass}>Free resources</p>
          <h1 className="font-display mt-6 text-[40px] font-extrabold uppercase leading-[1.02] lg:text-[64px]">
            Train smarter for free.
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-stone-dark lg:text-[19px]">
            Programs, exercise demos, and training breakdowns you can use today.
          </p>
        </div>

        <nav aria-label="On this page">
          <ul className="border-b-2 border-ink">
            {JUMPS.map((j) => (
              <li key={j.href} className="border-t-2 border-ink">
                <a
                  href={j.href}
                  className="font-display flex min-h-[52px] items-center justify-between gap-4 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-ink"
                >
                  {j.label}
                  <span aria-hidden="true" className="text-[18px]">
                    ↓
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
