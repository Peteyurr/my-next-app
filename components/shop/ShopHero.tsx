import NewsletterForm from "@/components/home/NewsletterForm";
import { eyebrowClass } from "@/components/dragon-gym/links";

export default function ShopHero() {
  return (
    <section className="bg-cream py-20 text-ink lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className={eyebrowClass}>Shop</p>
        <h1 className="font-display mt-6 text-[40px] font-extrabold uppercase leading-[1.02] lg:text-[72px]">
          Coming soon.
        </h1>
        <p className="mt-6 max-w-[600px] text-[17px] leading-relaxed text-stone-dark lg:text-[19px]">
          Training programs and BFP apparel are in the works. Join the list and
          you&apos;ll hear first when they drop.
        </p>
        <NewsletterForm tone="light" buttonLabel="Notify me" className="mt-8" />
      </div>
    </section>
  );
}
