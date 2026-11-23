import { DIRECTIONS_URL, MAP_EMBED_URL, eyebrowClass, h2Class, secondaryBtn } from "./links";

export default function Location() {
  return (
    <section className="bg-cream py-20 text-ink md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="min-w-0">
          <p className={eyebrowClass}>Location</p>
          <h2 className={h2Class}>Find the gym.</h2>
          <address className="mt-6 text-[17px] not-italic leading-relaxed text-stone-dark md:text-[18px]">
            Dragon Gym Martial Arts
            <br />
            267 South Whitford Road
            <br />
            Exton, PA 19341
          </address>
          <div className="mt-8">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener"
              className={secondaryBtn}
            >
              Get directions
            </a>
          </div>
        </div>

        <iframe
          title="Map to Dragon Gym"
          src={MAP_EMBED_URL}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[260px] w-full border-2 border-ink lg:h-[320px]"
        />
      </div>
    </section>
  );
}
