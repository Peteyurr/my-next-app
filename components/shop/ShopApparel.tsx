import Image from "next/image";
import { eyebrowClass, h2Class } from "@/components/dragon-gym/links";

export default function ShopApparel() {
  return (
    <section className="bg-cream py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className={eyebrowClass}>Apparel</p>
        <h2 className={h2Class}>BFP gear.</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-stone-dark md:text-[18px]">
          Built for Performance apparel is on the way.
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <li
              key={i}
              className={`relative flex aspect-[4/5] flex-col items-center justify-center gap-4 border-2 border-ink bg-sand ${
                i === 2 ? "hidden lg:flex" : ""
              }`}
            >
              <div className="relative h-1/3 w-2/3 opacity-35">
                <Image
                  src="/bfp-logo-ink.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="(min-width: 1024px) 260px, 33vw"
                />
              </div>
              <p className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-stone">
                Coming soon
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
