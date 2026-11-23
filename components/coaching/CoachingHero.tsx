import { eyebrowClass } from "@/components/dragon-gym/links";

export default function CoachingHero() {
  return (
    <section className="bg-cream pt-20 pb-10 text-ink lg:pt-24 lg:pb-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className={eyebrowClass}>Coaching</p>
        <h1 className="font-display mt-6 max-w-[900px] text-[40px] font-extrabold uppercase leading-[1.02] lg:text-[64px]">
          Two ways to train with Jake.
        </h1>
        <p className="mt-6 max-w-[640px] text-[17px] leading-relaxed text-stone-dark lg:text-[19px]">
          Same coaching, two formats. Near Exton, PA? Train in person. Anywhere
          else? Train online. Both start with a free consult.
        </p>
      </div>
    </section>
  );
}
