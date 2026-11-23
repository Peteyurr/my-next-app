import Image from "next/image";
import { FIT_TO_FIGHT_URL, eyebrowClass, primaryBtn, secondaryBtn } from "./links";

export default function DragonGymHero() {
  return (
    <section className="bg-cream py-20 text-ink lg:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className={eyebrowClass}>In person · Exton, PA</p>
          <h1 className="font-display text-[40px] font-extrabold uppercase leading-[1.02] lg:text-[64px]">
            Train with Jake at Dragon Gym.
          </h1>
          <p className="max-w-[520px] text-[17px] leading-relaxed text-stone-dark lg:text-[19px]">
            Start with a free 35-minute Training Strategy Session: a movement
            screen and a real conversation about your goals and health history.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#book" className={primaryBtn}>
              Book your session
            </a>
            <a
              href={FIT_TO_FIGHT_URL}
              target="_blank"
              rel="noopener"
              className={secondaryBtn}
            >
              Combat athlete? Fit to Fight
            </a>
          </div>
        </div>

        <div className="relative h-[280px] border-2 border-ink lg:h-[500px]">
          <Image
            src="/SidekickDG.jpeg"
            alt="Jake throwing a sidekick at Dragon Gym"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
