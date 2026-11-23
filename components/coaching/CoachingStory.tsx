import TestimonialMedia from "@/components/home/TestimonialMedia";
import { STORIES } from "@/components/home/ClientStories";
import { eyebrowClass } from "@/components/dragon-gym/links";

const tyler = STORIES.find((s) => s.name === "Tyler")!;

export default function CoachingStory() {
  return (
    <section className="border-t-2 border-ink bg-cream-dark py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className={eyebrowClass}>Client story</p>
        <figure className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <TestimonialMedia label={tyler.mediaLabel} />
          <div>
            <blockquote className="text-[17px] leading-relaxed text-ink md:text-[18px] lg:text-[22px]">
              <p>“{tyler.quote}”</p>
            </blockquote>
            <figcaption className="font-display mt-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-stone">
              <span className="text-ink">{tyler.name}</span> · {tyler.descriptor}
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
