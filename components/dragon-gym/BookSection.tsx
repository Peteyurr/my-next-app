import CalEmbed from "./CalEmbed";
import DetailsList from "./DetailsList";
import { eyebrowClass, h2Class } from "./links";

const DETAILS = [
  { label: "Length", value: "35 minutes" },
  { label: "Cost", value: "Free" },
  {
    label: "Where",
    value: "Dragon Gym, 267 South Whitford Road, Exton, PA 19341",
  },
  { label: "Membership", value: "Not needed" },
  { label: "Confirmed", value: "Instantly, by email" },
];

export default function BookSection() {
  return (
    <section
      id="book"
      className="bg-cream py-20 text-ink md:py-24"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-16">
        <div className="min-w-0">
          <p className={eyebrowClass}>Book it</p>
          <h2 className={h2Class}>Pick a time.</h2>
          <DetailsList items={DETAILS} />
        </div>

        <div className="min-w-0">
          <CalEmbed />
          <p className="mt-4 text-[17px] leading-relaxed text-stone-dark">
            None of the times work? Text{" "}
            <a
              href="tel:+17174484222"
              className="inline-flex min-h-11 items-center font-semibold text-ink underline decoration-2 underline-offset-4"
            >
              717-448-4222
            </a>{" "}
            and we&apos;ll find one.
          </p>
        </div>
      </div>
    </section>
  );
}
