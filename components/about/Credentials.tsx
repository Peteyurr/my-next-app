import { eyebrowClass, h2Class } from "@/components/dragon-gym/links";

const CREDENTIALS = [
  { title: "Certified Strength & Conditioning Specialist (CSCS)", sub: "NSCA, 2026" },
  { title: "NASM Certified Personal Trainer", sub: "2025" },
  { title: "NASM Certified Nutrition Coach", sub: "2026" },
  { title: "B.S. Exercise Science, West Chester University", sub: "2026" },
  {
    title: "M.S. student, Applied Sports Performance",
    sub: "West Chester University, accelerated program",
  },
  { title: "Head S&C Coach, Dragon Gym", sub: "Exton, PA" },
  { title: "PT Aide, Kinetic Reimagined", sub: "2 years under Dr. Christopher Sands" },
  { title: "Muay Thai athlete", sub: "Preparing for a sanctioned amateur debut" },
];

export default function Credentials() {
  return (
    <section className="bg-cream py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className={eyebrowClass}>Credentials</p>
        <h2 className={h2Class}>The background.</h2>
        <ul className="mt-10 grid border-b-2 border-ink lg:grid-cols-2 lg:gap-x-16">
          {CREDENTIALS.map((c) => (
            <li key={c.title} className="border-t-2 border-ink py-5">
              <p className="font-display text-[17px] font-extrabold uppercase leading-snug md:text-[18px]">
                {c.title}
              </p>
              <p className="mt-1 text-[16px] text-stone">{c.sub}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
