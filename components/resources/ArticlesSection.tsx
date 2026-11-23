import { eyebrowClass, h2Class } from "@/components/dragon-gym/links";

type Article = { label: string; title: string; href?: string };

// Placeholders until the Substack posts are live; swap in real titles and links.
export const ARTICLES: Article[] = [
  { label: "Coming soon", title: "[First article title]" },
  { label: "Coming soon", title: "[Second article title]" },
  { label: "Coming soon", title: "[Third article title]" },
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="bg-cream py-20 text-ink md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className={eyebrowClass}>Articles</p>
        <h2 className={h2Class}>Long-form training notes.</h2>
        <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-stone-dark md:text-[18px]">
          Deeper breakdowns on programming, conditioning, and recovery. Coming
          soon on Substack.
        </p>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a) => (
            <li
              key={a.title}
              className="flex min-h-[180px] flex-col border-2 border-dashed border-stone p-6"
            >
              <p className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-stone">
                {a.label}
              </p>
              <h3 className="font-display mt-4 text-[22px] font-extrabold uppercase leading-tight md:text-[26px]">
                {a.href ? (
                  <a href={a.href} className="underline decoration-2 underline-offset-4">
                    {a.title}
                  </a>
                ) : (
                  a.title
                )}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
