import { eyebrowClass, h2Class } from "./links";

const FAQS = [
  {
    q: "Do I have to be a fighter?",
    a: "No. In-person coaching is for athletes and everyday people. Fit to Fight is the combat-specific option.",
  },
  {
    q: "What should I wear?",
    a: "Clothes you can move in and training shoes. Bring water.",
  },
  {
    q: "Is the session really free?",
    a: "Yes. If coaching is a fit, we'll talk options. If not, you still leave with a clearer plan.",
  },
  {
    q: "Do I need a Dragon Gym membership?",
    a: "No. You don't need a Dragon Gym membership to train with Jake.",
  },
];

export default function DragonGymFaq() {
  return (
    <section className="border-t-2 border-ink bg-cream-dark py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className={eyebrowClass}>Questions</p>
        <h2 className={h2Class}>Before you book.</h2>
        <dl className="mt-10 max-w-[840px] border-b-2 border-ink">
          {FAQS.map((f) => (
            <div key={f.q} className="border-t-2 border-ink py-6">
              <dt className="font-display text-[18px] font-bold uppercase leading-snug md:text-[20px]">
                {f.q}
              </dt>
              <dd className="mt-2 text-[17px] leading-relaxed text-stone-dark">
                {f.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
