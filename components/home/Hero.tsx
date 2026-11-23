"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";

const PHOTOS = [
  { src: "/HIGH_TEEP.jpeg", alt: "Jake Peterson throwing a high teep kick" },
  { src: "/Cross.jpeg", alt: "Jake Peterson throwing a cross punch" },
  {
    src: "/SidekickDG.jpeg",
    alt: "Jake Peterson throwing a sidekick at Dragon Gym",
  },
  { src: "/Jiujitsu.jpeg", alt: "Jake Peterson training jiujitsu" },
  {
    src: "/HERO.jpeg",
    alt: "Jake Peterson coaching a strength and conditioning session",
  },
];

function FrameControls() {
  const { scrollPrev, scrollNext } = useCarousel();

  return (
    <div className="absolute bottom-4 right-4 z-10 flex gap-2">
      <button
        type="button"
        aria-label="Previous photo"
        onClick={scrollPrev}
        className="flex h-11 w-11 items-center justify-center bg-ink text-cream"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={scrollNext}
        className="flex h-11 w-11 items-center justify-center bg-ink text-cream"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
}

function DotIndicators({ count }: { count: number }) {
  const { api } = useCarousel();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="mt-4 flex items-center justify-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <button
          type="button"
          key={i}
          aria-label={`Photo ${i + 1}`}
          onClick={() => api?.scrollTo(i)}
          className="flex h-11 w-11 items-center justify-center"
        >
          <span
            className={
              i === selected ? "h-1 w-8 bg-ink" : "h-1 w-3 bg-line"
            }
          />
        </button>
      ))}
    </div>
  );
}

function PhotoCarousel() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const autoplay = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const plugins = useMemo(
    () => (prefersReducedMotion ? [] : [autoplay.current]),
    [prefersReducedMotion]
  );

  return (
    <Carousel opts={{ loop: true }} plugins={plugins}>
      <div className="relative border-2 border-ink">
        <CarouselContent className="ml-0 h-full">
          {PHOTOS.map((photo, i) => (
            <CarouselItem
              key={photo.src}
              className="relative aspect-[4/5] basis-full pl-0 lg:aspect-auto lg:h-[560px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <FrameControls />
      </div>
      <DotIndicators count={PHOTOS.length} />
    </Carousel>
  );
}

export default function Hero() {
  return (
    <section className="bg-cream py-20 text-ink lg:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <p className="font-display text-[12px] font-medium uppercase tracking-[0.38em] text-stone">
            <span className="md:hidden">Strength &amp; Conditioning</span>
            <span className="hidden md:inline">
              Strength · Conditioning · Performance
            </span>
          </p>

          <h1 className="font-display text-[40px] uppercase leading-[1.02] font-extrabold lg:text-[76px]">
            Build capability. Perform.
          </h1>

          <p className="max-w-[520px] font-sans text-[17px] leading-relaxed text-stone-dark lg:text-[19px]">
            Human performance coaching for those who want to become more than
            capable of handling life&apos;s demands.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dragon-gym"
              className="font-display flex h-[54px] flex-1 items-center justify-center bg-ink text-[13px] font-bold uppercase tracking-[0.12em] text-cream"
            >
              Book an in-person consult
            </Link>
            <Link
              href="/coaching"
              className="font-display flex h-[54px] flex-1 items-center justify-center border-2 border-ink text-[13px] font-bold uppercase tracking-[0.12em] text-ink"
            >
              Explore online coaching
            </Link>
          </div>
        </div>

        <PhotoCarousel />
      </div>
    </section>
  );
}
