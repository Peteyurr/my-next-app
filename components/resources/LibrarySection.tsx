import { eyebrowClass, h2Class, primaryBtn } from "@/components/dragon-gym/links";
import { PLAYLIST_EMBED_URL, PLAYLIST_URL } from "./links";

export default function LibrarySection() {
  return (
    <section
      id="library"
      className="border-b-2 border-ink bg-cream-dark py-20 text-ink md:py-24"
    >
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="min-w-0">
          <p className={eyebrowClass}>Exercise library</p>
          <h2 className={h2Class}>See every lift done right.</h2>
          <p className="mt-4 max-w-[480px] text-[17px] leading-relaxed text-stone-dark md:text-[18px]">
            Short demo videos of the exercises in my programs, all in one
            YouTube playlist.
          </p>
          <div className="mt-8">
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener"
              className={primaryBtn}
            >
              Watch on YouTube
            </a>
          </div>
        </div>

        <div className="relative aspect-video w-full min-w-0 border-2 border-ink bg-sand">
          <iframe
            src={PLAYLIST_EMBED_URL}
            title="BFP exercise library"
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
