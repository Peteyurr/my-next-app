import Link from "next/link";
import { h2Class, primaryBtn, secondaryBtn } from "@/components/dragon-gym/links";

export default function SomethingNow() {
  return (
    <section className="border-t-2 border-ink bg-cream-dark py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className={h2Class.replace("mt-4 ", "")}>Want something now?</h2>
        <p className="mt-4 max-w-[600px] text-[17px] leading-relaxed text-stone-dark md:text-[18px]">
          The free 8-week combat sports program is ready today. Or work with Jake directly.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/resources#program" className={primaryBtn}>
            Get the free program
          </Link>
          <Link href="/coaching" className={secondaryBtn}>
            See coaching options
          </Link>
        </div>
      </div>
    </section>
  );
}
