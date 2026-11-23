import NewsletterForm from "@/components/home/NewsletterForm";

export default function NewsletterBand() {
  return (
    <section className="bg-ink py-20 text-cream md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="font-display text-[26px] font-extrabold uppercase leading-tight md:text-[36px]">
          Training notes, straight to your inbox.
        </h2>
        <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-on-ink-muted md:text-[18px]">
          Programs, breakdowns, and new free resources as they drop.
        </p>
        <NewsletterForm tone="dark" className="mt-8" />
      </div>
    </section>
  );
}
