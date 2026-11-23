import type { Metadata } from "next";
import CoachingHero from "@/components/coaching/CoachingHero";
import CoachingOptions from "@/components/coaching/CoachingOptions";
import FirstSession from "@/components/dragon-gym/FirstSession";
import BookOnline from "@/components/coaching/BookOnline";
import CoachingStory from "@/components/coaching/CoachingStory";

const title = "Coaching | In Person or Online | Built for Performance";
const description =
  "Train with Jake in person at Dragon Gym in Exton, PA, or online from anywhere. Both start with a free consult.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

const ONLINE_STEPS = [
  {
    title: "Book a free consult",
    body: "30 minutes on video. Your training, your goals, your schedule.",
  },
  {
    title: "Get your program",
    body: "Built around your sport, your week, and your recovery.",
  },
  {
    title: "Train and send video",
    body: "Log your sessions and send lifts for form feedback.",
  },
  {
    title: "Check in, adjust",
    body: "A call every two weeks to review progress and update the plan.",
  },
];

export default function CoachingPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <CoachingHero />
      <CoachingOptions />
      <FirstSession
        eyebrow="Online coaching"
        heading="How it works."
        steps={ONLINE_STEPS}
        columns={4}
      />
      <BookOnline />
      <CoachingStory />
    </main>
  );
}
