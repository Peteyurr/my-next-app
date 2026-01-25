"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Testimonial from "@/components/Testimonial";

/*
  ============================================================
  UPDATE: COACHING PAGE FAQs
  ============================================================
  Purpose: Address the top objections/questions about 1:1 coaching specifically.
  Coaching is a bigger commitment - FAQs should reduce anxiety about price,
  commitment, and what to expect.

  Common coaching questions to address:
  - Price (always the #1 question)
  - Time commitment / contract length
  - What's included
  - How communication works
  - How to know if it's right for them

  UPDATE: Pricing - Change when you adjust your coaching rates
  UPDATE: Add new FAQs based on application/sales call questions
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

export default function CoachingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    goals: "",
    instagram: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/coaching-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        <Navigation showBanner={false} ctaText="Products" ctaHref="/products" />

        <section className="mx-auto max-w-2xl px-6 pt-24 pb-24 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <svg
              className="h-10 w-10 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Application received
          </h1>

          <p className="mt-4 text-lg text-zinc-300">
            Thanks for applying. I'll review your info and get back to you
            within 24 hours.
          </p>

          <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-left">
            <h2 className="font-semibold text-white mb-3">What happens next:</h2>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                I'll review your application and training situation
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                If we're a good fit, I'll send you a link to book a strategy call
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                We start immediately with a full assessment and custom program
              </li>
            </ul>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[140px]" />
      </div>

      <Navigation ctaText="Products" ctaHref="/products" />

      {/*
        ============================================================
        UPDATE: COACHING SCARCITY BANNER
        ============================================================
        Purpose: Create urgency through real scarcity. If you only take 8-10
        clients at a time, this is TRUE scarcity - use it ethically.

        How often to update:
        - Monthly: Change the month name (e.g., "February" → "March")
        - When spots fill: Change "Limited spots" to specific number
          e.g., "2 spots remaining" or "Waitlist open for March"
        - When full: Change to "Currently full — join waitlist for [next month]"

        Scarcity options (pick based on your actual availability):
        - "Currently reviewing applications for [Month] intake"
        - "[X] spots remaining for [Month]"
        - "Accepting [X] new clients for [Month]"
        - "Waitlist open for [Month]"
        - "Currently at capacity — join waitlist"

        IMPORTANT: Only use real scarcity. Fake urgency destroys trust.
      */}
      <section className="mx-auto max-w-7xl px-6 pt-8">
        <div className="rounded-2xl border border-indigo-500/30 bg-indigo-500/10 px-6 py-4 text-center">
          <p className="text-sm text-zinc-200">
            {/* UPDATE: Change month and availability status monthly */}
            <span className="font-semibold text-indigo-400">
              Currently reviewing applications for February intake
            </span>{" "}
            — Limited spots available
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-12 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Info */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              Application Only
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
                This is your "offer stack" - make each item feel valuable.

                What to update:
                - Add/remove items as your coaching package evolves
                - Be specific: "Weekly check-ins" is better than "ongoing support"
                - Highlight unique differentiators

                Tip: Each bullet should answer "What do I actually get?"
              */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
                <h3 className="font-semibold text-white mb-3">What you get</h3>
                <ul className="space-y-3 text-zinc-300">
                  {/* UPDATE: Modify these based on your actual coaching deliverables */}
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    Custom programming synced to your training schedule
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    Weekly check-ins and program adjustments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    Direct messaging access for questions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
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
                ============================================================
                PLACEHOLDER: COACHING PAGE TESTIMONIALS
                ============================================================
                Purpose: Justify the premium price of 1:1 coaching with powerful
                transformation stories. These should be your BEST testimonials.

                What makes a great COACHING testimonial (vs product):
                - Mentions the personalization ("based on my weekly feedback")
                - Talks about the relationship ("Jake's coaching")
                - Shows significant transformation (before/after)
                - Justifies the investment ("worth every dollar")

                How to get coaching testimonials:
                1. After 8-12 weeks, ask: "What's changed since we started working together?"
                2. When a client hits a major milestone, ask for a quote
                3. During check-ins, note powerful statements they make
                4. End-of-engagement survey: "What would you tell someone considering coaching?"

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

          {/* Right Column - Application Form */}
          <div>
            <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
              <h2 className="text-2xl font-bold mb-2">Apply for coaching</h2>
              <p className="text-zinc-400 mb-6">
                This isn't for everyone. I work with serious athletes who value
                their training time and need a program that fits their life.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
                    Training experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (less than 1 year)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3-5 years)</option>
                    <option value="competitive">
                      Competitive (5+ years, active competitor)
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
                    Goals & current situation
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    rows={4}
                    value={formData.goals}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                    placeholder="What are you training for? What's your current schedule? What's not working right now?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="instagram"
                    className="block text-sm font-medium text-zinc-300 mb-2"
                  >
                    Instagram handle (optional)
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="@yourhandle"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-zinc-950 hover:bg-zinc-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting..." : "Submit application"}
                </button>
              </form>
            </div>

            {/* What Happens Next */}
            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
              <h3 className="font-semibold text-white mb-3">What happens next:</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                You'll hear back within 24 hours. If we're a good fit, we start
                immediately with a full assessment and custom program delivery.
                No long sales calls — just a quick chat to make sure this is
                right for you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
