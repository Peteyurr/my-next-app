import type { Metadata } from "next";
import DragonGymHero from "@/components/dragon-gym/DragonGymHero";
import FirstSession from "@/components/dragon-gym/FirstSession";
import BookSection from "@/components/dragon-gym/BookSection";
import FitToFight from "@/components/dragon-gym/FitToFight";
import Location from "@/components/dragon-gym/Location";
import DragonGymFaq from "@/components/dragon-gym/DragonGymFaq";

const description =
  "Book a free 35-minute Training Strategy Session with Jake at Dragon Gym in Exton, PA. No gym membership needed.";

export const metadata: Metadata = {
  title: "Train at Dragon Gym | Built for Performance",
  description,
  openGraph: { title: "Train at Dragon Gym | Built for Performance", description },
};

export default function DragonGymPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <DragonGymHero />
      <FirstSession />
      <BookSection />
      <FitToFight />
      <Location />
      <DragonGymFaq />
    </main>
  );
}
