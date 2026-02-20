import Navigation from "@/components/Navigation";
import Testimonial from "@/components/Testimonial";

/*
  ============================================================
  UPDATE: COACHING PAGE FAQs
  ============================================================
  Purpose: Address the top objections/questions about 1:1 coaching specifically.
  Coaching is a bigger commitment - FAQs should reduce anxiety about price,
  commitment, and what to expect.

  UPDATE: Pricing - Change when you adjust your coaching rates
  UPDATE: Add new FAQs based on sales call questions
*/
const coachingFaqs = [
  {
    // UPDATE: Change the starting price when you adjust rates
    question: "How much does coaching cost?",
    answer:
      "Investment starts at $150/month. Exact pricing is discussed during your strategy call based on your needs and goals.",
  },
  {
    // UPDATE: Modify if you change your commitment structure
    question: "How long is the commitment?",
    answer:
      "Month-to-month. No long-term contracts. Stay as long as it's working for you.",
  },
];

/*
  UPDATE: GOOGLE CALENDAR EMBED URL
  To change your booking calendar:
  1. Go to Google Calendar → Settings → Appointment scheduling
  2. Copy the booking page URL
  3. Replace the URL below
*/
const CALENDAR_URL = "https://calendar.app.google/T7XXfZ9tHHXdyZ8W7";

export default function CoachingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--bfp-orange)]/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-[var(--bfp-orange-light)]/10 blur-[140px]" />
      </div>

      <Navigation ctaText="Products" ctaHref="/products" />

      {/*
        ============================================================
        UPDATE: COACHING SCARCITY BANNER
        ============================================================
        How often to update:
        - Monthly: Change the month name (e.g., "February" → "March")
        - When spots fill: Change to specific number e.g., "2 spots remaining"
        - When full: Change to "Currently full — join waitlist for [next month]"

        IMPORTANT: Only use real scarcity. Fake urgency destroys trust.
      */}
      <section className="mx-auto max-w-7xl px-6 pt-8">
        <div className="rounded-2xl border border-[var(--bfp-orange)]/30 bg-[var(--bfp-orange)]/10 px-6 py-4 text-center">
          <p className="text-sm text-zinc-200">
            {/* UPDATE: Change month and availability status monthly */}
            <span className="font-semibold text-[var(--bfp-orange-light)]">
              Limited spots available for February
            </span>{" "}
            — Book your call to secure your spot
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-12 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)]" />
              1:1 Coaching
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
              1:1 Custom Coaching
            </h1>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              Fully personalized programming built around your schedule,
              recovery capacity, and goals. This isn't a template — it's a
              direct line to programming that adapts as you do.
            </p>

            <div className="mt-10 space-y-6">
              {/*
                UPDATE: COACHING INCLUSIONS
                Purpose: Clearly communicate what's included in coaching.
                Tip: Each bullet should answer "What do I actually get?"
              */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="font-semibold text-white mb-3">What you get</h3>
                <ul className="space-y-3 text-zinc-300">
                  {/* UPDATE: Modify these based on your actual coaching deliverables */}
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)] flex-shrink-0" />
                    Custom programming synced to your training schedule
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)] flex-shrink-0" />
                    Weekly check-ins and program adjustments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)] flex-shrink-0" />
                    Direct messaging access for questions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)] flex-shrink-0" />
                    Video movement analysis and feedback
                  </li>
                </ul>
              </div>

              {/* FAQ */}
              <div className="space-y-4">
                {coachingFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5"
                  >
                    <h3 className="font-medium text-white text-sm">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">{faq.answer}</p>
                  </div>
                ))}
              </div>

              {/*
                PLACEHOLDER: COACHING PAGE TESTIMONIALS
                Purpose: Justify the premium price with transformation stories.
                UPDATE: Replace with testimonials from actual 1:1 coaching clients
              */}
              <div className="space-y-4 pt-4">
                {/* PLACEHOLDER: Coaching testimonial #1 - transformation story */}
                <Testimonial
                  quote="Jake's coaching changed everything. I went from constantly feeling beat up to actually enjoying training again. And I'm stronger than I've ever been."
                  name="Derek P."
                  focus="BJJ + strength training"
                  result="20 lb deadlift PR"
                  variant="compact"
                />
                {/* PLACEHOLDER: Coaching testimonial #2 - value/investment focus */}
                <Testimonial
                  quote="Worth every dollar. The personalized adjustments based on my weekly feedback made all the difference. No more guessing."
                  name="Rachel T."
                  focus="Marathon runner"
                  result="BQ'd while lifting"
                  variant="compact"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Calendar Booking */}
          <div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h2 className="text-2xl font-bold mb-2">
                Book Your Free Strategy Call
              </h2>
              <p className="text-zinc-400 mb-6">
                30 minutes to discuss your training, goals, and whether custom
                programming is right for you. No pressure, no obligation.
              </p>

              {/*
                CALENDAR EMBED
                The iframe embeds your Google Calendar booking page directly.
                If this doesn't display well, the fallback button below will work.
              */}
              <div className="rounded-2xl overflow-hidden border border-zinc-700 bg-white">
                <iframe
                  src={CALENDAR_URL}
                  className="w-full h-[500px] md:h-[550px]"
                  frameBorder="0"
                  title="Book a Strategy Call"
                />
              </div>

              {/* Fallback button in case iframe doesn't work well */}
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-800 px-8 py-4 text-base font-semibold text-white hover:bg-zinc-700 transition"
              >
                Open calendar in new tab →
              </a>
            </div>

            {/* What Happens on the Call */}
            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="font-semibold text-white mb-3">
                What happens on the call:
              </h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)] flex-shrink-0" />
                  We'll review your current training schedule and goals
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)] flex-shrink-0" />
                  I'll explain how custom programming works
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--bfp-orange-light)] flex-shrink-0" />
                  If it's a fit, we can start immediately
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
