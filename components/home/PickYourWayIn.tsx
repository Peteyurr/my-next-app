import Link from "next/link";

type Offer = {
  meta: string;
  title: string;
  body: string;
  link: string;
  href: string;
  featured?: boolean;
};

const OFFERS: Offer[] = [
  {
    meta: "01 — In person",
    title: "Train at Dragon Gym",
    body: "Book a free in-person consult with Jake, or join a Fit to Fight cohort for combat athletes.",
    link: "Book a consult →",
    href: "/dragon-gym",
    featured: true,
  },
  {
    meta: "02 — Online",
    title: "1:1 Online Coaching",
    body: "Custom programming built around your sport, schedule, and recovery, with check-ins.",
    link: "See how it works →",
    href: "/coaching",
  },
  {
    meta: "03 — Groups",
    title: "Group Training",
    body: "Small groups of 3–6, clubs, or teams that need in-season or off-season performance work.",
    link: "Ask about groups →",
    href: "/contact",
  },
];

export default function PickYourWayIn() {
  return (
    <section className="bg-cream py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="font-display text-[12px] font-medium uppercase tracking-[0.38em] text-stone">
          Three ways to start
        </p>
        <h2 className="font-display mt-4 text-[32px] font-extrabold uppercase leading-[1.05] md:text-[48px]">
          Pick your way in.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <article
              key={offer.title}
              className={`flex h-full flex-col p-6 md:p-8 ${
                offer.featured
                  ? "border-2 border-ink bg-ink text-cream"
                  : "border-2 border-ink bg-cream text-ink"
              }`}
            >
              <p
                className={`font-display text-[12px] font-semibold uppercase tracking-[0.2em] ${
                  offer.featured ? "text-line" : "text-stone"
                }`}
              >
                {offer.meta}
              </p>
              <h3 className="font-display mt-4 text-[22px] font-extrabold uppercase leading-tight md:text-[26px]">
                {offer.title}
              </h3>
              <p
                className={`mt-3 text-[16px] leading-relaxed md:text-[17px] ${
                  offer.featured ? "text-on-ink-muted" : "text-stone-dark"
                }`}
              >
                {offer.body}
              </p>
              <div className="mt-auto pt-6">
                <Link
                  href={offer.href}
                  className="inline-flex min-h-11 items-center font-semibold underline decoration-current decoration-2 underline-offset-4"
                >
                  {offer.link}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
