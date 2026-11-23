import Image from "next/image";
import { eyebrowClass } from "@/components/dragon-gym/links";

export default function AboutHero({ intro }: { intro: string }) {
  return (
    <section className="bg-cream py-20 text-ink lg:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative h-[400px] border-2 border-ink bg-sand lg:h-[560px]">
          <Image
            src="/about/headshot.jpg"
            alt="Jake Peterson"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>

        <div className="min-w-0">
          <p className={eyebrowClass}>About</p>
          <h1 className="font-display mt-6 text-[40px] font-extrabold uppercase leading-[1.02] lg:text-[72px]">
            Jake Peterson
          </h1>
          <p className="font-display mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone lg:text-[12px]">
            CSCS · NASM-CPT · NASM-CNC · Exercise Science · Muay Thai athlete
          </p>
          <p className="mt-6 text-[19px] font-medium leading-[1.5] text-ink lg:text-[24px]">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}
