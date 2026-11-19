import Link from "next/link";
import Image from "next/image";

const SITE_LINKS = [
  { href: "/coaching", label: "Coaching" },
  { href: "/dragon-gym", label: "Dragon Gym" },
  { href: "/resources", label: "Free Resources" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

const labelClass =
  "font-display text-[12px] font-semibold uppercase tracking-[0.2em] text-line";
const linkClass =
  "flex min-h-11 items-center font-sans text-[15px] text-cream md:min-h-0";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-line">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-3 md:gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/bfp-logo-cream.png"
              alt="Built for Performance"
              width={75}
              height={56}
              className="h-14 w-auto"
            />
          </Link>
          <p className="max-w-xs font-sans text-sm leading-relaxed text-line">
            Strength and conditioning for athletes and everyday people. In
            person at Dragon Gym, or online.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className={labelClass}>Site</span>
          <nav className="flex flex-col">
            {SITE_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <span className={labelClass}>Contact</span>
          <div className="flex flex-col">
            <a href="tel:+17174484222" className={linkClass}>
              717-448-4222
            </a>
            <a href="mailto:jake24peterson@gmail.com" className={linkClass}>
              jake24peterson@gmail.com
            </a>
            <a
              href="https://instagram.com/peteyurr"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              Instagram @peteyurr
            </a>
            <a
              href="https://youtube.com/playlist?list=PLHYA2heaGlAVX7gO-qyNemXJm8bebxBFX"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-line px-6 pt-6 pb-[calc(90px+env(safe-area-inset-bottom))] lg:pb-6">
        <p className="mx-auto max-w-[1200px] text-center font-sans text-xs text-line md:text-left">
          © {year} Built for Performance LLC · Build capability. Perform.
        </p>
      </div>
    </footer>
  );
}
