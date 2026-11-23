import Link from "next/link";
import { h2Class, primaryBtn, secondaryBtn } from "@/components/dragon-gym/links";

export default function AboutCta() {
  return (
    <section className="border-t-2 border-ink bg-cream-dark py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className={h2Class.replace("mt-4 ", "")}>Ready to train with purpose?</h2>
        <p className="mt-4 text-[17px] leading-relaxed text-stone-dark md:text-[18px]">
          Pick how you want to start. Both are free.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/dragon-gym#book" className={primaryBtn}>
            Book in person at Dragon Gym
          </Link>
          <Link href="/coaching#book-online" className={secondaryBtn}>
            Book an online consult
          </Link>
        </div>
      </div>
    </section>
  );
}
