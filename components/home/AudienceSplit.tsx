const BLOCKS = [
  {
    heading: "For athletes",
    body: "Fighters, runners, court and field athletes who need strength and conditioning that supports their sport instead of competing with it.",
  },
  {
    heading: "For everyone else",
    body: "Busy adults who want to move better, get stronger, and stay capable for the long haul. Same principles, built around your life.",
  },
];

export default function AudienceSplit() {
  return (
    <section className="border-y-2 border-ink bg-cream-dark text-ink">
      <div className="mx-auto grid max-w-[1200px] px-6 md:grid-cols-2">
        {BLOCKS.map((block, i) => (
          <div
            key={block.heading}
            className={`py-20 md:py-24 ${
              i === 0
                ? "md:pr-12"
                : "border-t-2 border-ink md:border-t-0 md:border-l-2 md:pl-12"
            }`}
          >
            <h2 className="font-display text-[26px] font-extrabold uppercase leading-tight md:text-[34px]">
              {block.heading}
            </h2>
            <p className="mt-4 max-w-[480px] text-[17px] leading-relaxed text-stone-dark md:text-[18px]">
              {block.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
