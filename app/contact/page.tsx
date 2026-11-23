import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";
import { eyebrowClass } from "@/components/dragon-gym/links";

const title = "Contact | Built for Performance";
const description =
  "Call, text, or email Jake Peterson, or send a message about coaching.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

export default function ContactPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <section className="bg-cream pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className={eyebrowClass}>Contact</p>
          <h1 className="font-display mt-6 text-[40px] font-extrabold uppercase leading-[1.02] lg:text-[72px]">
            Let&apos;s talk training.
          </h1>
        </div>
      </section>
      <ContactSection showHeading={false} />
    </main>
  );
}
