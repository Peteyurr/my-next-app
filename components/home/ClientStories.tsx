import TestimonialMedia from "@/components/home/TestimonialMedia";

export const STORIES = [
  {
    name: "Tyler",
    descriptor: "Runner and recreational athlete",
    quote:
      "Before this program I had no end goal in sight. Jake's program let me focus on joint health and mobility — it's helped my runs and overall performance significantly.",
    mediaLabel: "Training video — Tyler",
  },
  {
    name: "Will",
    descriptor: "Muay Thai competitor",
    quote:
      "The lifts are specifically tailored to build strength for Muay Thai. Real improvements in mobility, power, and conditioning.",
    mediaLabel: "Training video — Will",
  },
];

export default function ClientStories() {
  return (
    <section className="bg-cream py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="font-display text-[12px] font-medium uppercase tracking-[0.38em] text-stone">
          Client stories
        </p>
        <h2 className="font-display mt-4 text-[32px] font-extrabold uppercase leading-[1.05] md:text-[48px]">
          Real people. Real results.
        </h2>

        <div className="mt-10 grid gap-16 md:grid-cols-2 md:gap-8">
          {STORIES.map((story) => (
            <figure key={story.name} className="flex flex-col">
              <TestimonialMedia label={story.mediaLabel} />
              <blockquote className="mt-6 text-[17px] leading-relaxed text-ink md:text-[18px]">
                <p>“{story.quote}”</p>
              </blockquote>
              <figcaption className="font-display mt-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-stone">
                <span className="text-ink">{story.name}</span> ·{" "}
                {story.descriptor}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
