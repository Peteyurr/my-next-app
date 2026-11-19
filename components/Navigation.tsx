"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/coaching", label: "Coaching" },
  { href: "/dragon-gym", label: "Dragon Gym" },
  { href: "/resources", label: "Free Resources" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

const MOBILE_LINKS = [...NAV_LINKS, { href: "/contact", label: "Contact" }];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-cream text-ink">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 lg:h-24">
        <Link href="/" className="flex items-center">
          <Image
            src="/bfp-logo-ink.png"
            alt="Built for Performance"
            width={75}
            height={56}
            className="h-10 w-auto lg:h-14"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-display pb-1 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink ${
                  isActive ? "border-b-2 border-ink" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/dragon-gym"
            className="font-display flex h-11 items-center justify-center bg-ink px-6 text-[13px] font-bold uppercase tracking-[0.12em] text-cream"
          >
            Book a consult
          </Link>
        </nav>

        {/* Mobile menu trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center border-2 border-ink text-ink lg:hidden"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="top"
            showCloseButton={false}
            className="flex flex-col gap-0 border-0 bg-cream p-0 shadow-none data-[side=top]:inset-0 data-[side=top]:h-dvh data-[side=top]:w-screen data-[side=top]:max-w-none"
          >
            <SheetTitle className="sr-only">Menu</SheetTitle>

            <div className="flex h-20 shrink-0 items-center justify-between border-b-2 border-ink px-6">
              <SheetClose asChild>
                <Link href="/" className="flex items-center">
                  <Image
                    src="/bfp-logo-ink.png"
                    alt="Built for Performance"
                    width={75}
                    height={56}
                    className="h-10 w-auto"
                  />
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <button
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center border-2 border-ink"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </SheetClose>
            </div>

            <nav className="flex flex-col overflow-y-auto">
              {MOBILE_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="font-display flex min-h-[60px] items-center justify-between border-b-2 border-ink px-6 text-[22px] font-extrabold uppercase text-ink"
                  >
                    {link.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </SheetClose>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 px-6 py-6">
              <SheetClose asChild>
                <Link
                  href="/dragon-gym"
                  className="font-display flex h-[54px] w-full items-center justify-center bg-ink text-[13px] font-bold uppercase tracking-[0.12em] text-cream"
                >
                  Book a consult
                </Link>
              </SheetClose>
              <a
                href="tel:+17174484222"
                className="font-display flex h-[54px] w-full items-center justify-center border-2 border-ink text-[13px] font-bold uppercase tracking-[0.12em] text-ink"
              >
                Call or text 717-448-4222
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
