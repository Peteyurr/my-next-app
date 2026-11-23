import Link from "next/link";
import { eyebrowClass, h2Class, primaryBtn } from "@/components/dragon-gym/links";

export type ShopProgram = {
  name: string;
  length?: string;
  blurb: string;
  status: string;
  price?: string;
  /** When set (with `slug`), the card shows a Buy button to /products/[slug], which runs the existing Stripe checkout. */
  stripePriceId?: string;
  slug?: string;
};

export const SHOP_PROGRAMS: ShopProgram[] = [
  {
    name: "Hip Mobility",
    length: "6 weeks",
    blurb: "Open up tight hips for deeper squats, higher kicks, and easier everyday movement.",
    status: "In development",
  },
  {
    name: "Increase Your Vert",
    blurb: "A jump-training program built to add inches to your vertical.",
    status: "In development",
  },
  {
    name: "Plyos Like a Pro",
    blurb: "Learn to jump, land, and bound with power and control.",
    status: "In development",
  },
];

const tagClass =
  "font-display inline-block border-2 border-ink px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em]";

export default function ShopPrograms() {
  return (
    <section className="border-y-2 border-ink bg-cream-dark py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className={eyebrowClass}>Programs</p>
        <h2 className={h2Class}>In the works.</h2>

        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {SHOP_PROGRAMS.map((p) => (
            <li key={p.name} className="flex flex-col border-2 border-ink bg-cream p-6">
              <div className="flex flex-wrap gap-2">
                <span className={tagClass}>{p.status}</span>
                {p.length && <span className={tagClass}>{p.length}</span>}
              </div>
              <div className="font-display mt-5 flex h-[180px] items-center justify-center bg-sand text-[12px] font-semibold uppercase tracking-[0.2em] text-stone">
                Program image
              </div>
              <h3 className="font-display mt-5 text-[22px] font-extrabold uppercase leading-tight md:text-[26px]">
                {p.name}
              </h3>
              <p className="mt-2 text-[17px] leading-relaxed text-stone-dark">{p.blurb}</p>
              <div className="mt-auto pt-5">
                <p className="font-semibold text-stone">{p.price ?? "Price TBA"}</p>
                {p.stripePriceId && p.slug && (
                  <Link href={`/products/${p.slug}`} className={`${primaryBtn} mt-4 sm:w-full`}>
                    Buy {p.name}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
