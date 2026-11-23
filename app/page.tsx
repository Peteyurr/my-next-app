import Hero from "@/components/home/Hero";
import CredentialStrip from "@/components/home/CredentialStrip";
import PickYourWayIn from "@/components/home/PickYourWayIn";
import AudienceSplit from "@/components/home/AudienceSplit";
import ClientStories from "@/components/home/ClientStories";
import NewsletterBand from "@/components/home/NewsletterBand";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <Hero />
      <CredentialStrip />
      <PickYourWayIn />
      <AudienceSplit />
      <ClientStories />
      <NewsletterBand />
      <ContactSection />
    </main>
  );
}
