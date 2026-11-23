import type { Metadata } from "next";
import ResourcesHero from "@/components/resources/ResourcesHero";
import ProgramSection from "@/components/resources/ProgramSection";
import LibrarySection from "@/components/resources/LibrarySection";
import ArticlesSection from "@/components/resources/ArticlesSection";
import SignupSection from "@/components/resources/SignupSection";

const title = "Free Resources | Built for Performance";
const description =
  "A free 8-week combat sports S&C program, exercise demo videos, and training notes from Jake Peterson.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

export default function ResourcesPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <ResourcesHero />
      <ProgramSection />
      <LibrarySection />
      <ArticlesSection />
      <SignupSection />
    </main>
  );
}
