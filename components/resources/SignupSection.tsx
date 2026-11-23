import NewsletterForm from "@/components/home/NewsletterForm";
import { h2Class } from "@/components/dragon-gym/links";
import { INSTAGRAM_URL, PLAYLIST_URL, textLink } from "./links";

export default function SignupSection() {
  return (
    <section className="border-t-2 border-ink bg-cream-dark py-20 text-ink md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
        <div className="min-w-0">
          <h2 className={h2Class.replace("mt-4 ", "")}>Get new resources first.</h2>
          <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-stone-dark md:text-[18px]">
            Free programs and new articles as they drop. One email, no spam.
          </p>
          <NewsletterForm tone="light" buttonLabel="Join the list" className="mt-8" />
        </div>

        <div className="min-w-0 border-t-2 border-ink pt-6 lg:mt-2">
          <p className="font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-stone">
            Follow along
          </p>
          <ul className="mt-3 flex flex-col gap-1">
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener" className={textLink}>
                Instagram @peteyurr: quick training tips →
              </a>
            </li>
            <li>
              <a href={PLAYLIST_URL} target="_blank" rel="noopener" className={textLink}>
                YouTube: exercise demos →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
