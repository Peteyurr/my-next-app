import { eyebrowClass, h2Class } from "./links";

const STEPS = [
  {
    title: "Movement screen",
    body: "A quick look at how you move, so training starts from where you actually are.",
  },
  {
    title: "Goals and history",
    body: "What you want to get better at, what's held you back, and any injuries or health history.",
  },
  {
    title: "Your next step",
    body: "You leave knowing which option fits: 1:1 coaching, a small group, or Fit to Fight.",
  },
];

export default function FirstSession() {
  return (
    <section className="border-y-2 border-ink bg-cream-dark py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className={eyebrowClass}>Your first session</p>
        <h2 className={h2Class}>35 minutes. No pressure.</h2>

        <ol className="mt-10 grid border-b-2 border-ink lg:grid-cols-3 lg:gap-8 lg:border-b-0">
          {STEPS.map((step, i) => (
            <li key={step.title} className="border-t-2 border-ink py-6 lg:pb-0">
              <span
                aria-hidden="true"
                className="font-display block text-[40px] font-extrabold leading-none lg:text-[56px]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-4 text-[22px] font-extrabold uppercase leading-tight md:text-[26px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[17px] leading-relaxed text-stone-dark">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
