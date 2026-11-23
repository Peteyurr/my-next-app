import Link from "next/link";
import DetailsList from "@/components/dragon-gym/DetailsList";
import { eyebrowClass, h2Class } from "@/components/dragon-gym/links";
import CalendlyEmbed from "./CalendlyEmbed";

const DETAILS = [
  { label: "Length", value: "30 minutes" },
  { label: "Cost", value: "Free" },
  { label: "Where", value: "Video call, from anywhere" },
];

export default function BookOnline() {
  return (
    <section
      id="book-online"
      className="scroll-mt-20 bg-cream py-20 text-ink md:py-24 lg:scroll-mt-24"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
        <div className="min-w-0">
          <p className={eyebrowClass}>Book online</p>
          <h2 className={h2Class}>Free 30-minute consult.</h2>
          <DetailsList items={DETAILS} />
        </div>

        <div className="min-w-0">
          <CalendlyEmbed />
          <p className="mt-4">
            <Link
              href="/dragon-gym#book"
              className="inline-flex min-h-11 items-center text-[17px] font-semibold text-ink underline decoration-2 underline-offset-4"
            >
              Live near Exton? Book in person instead.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
