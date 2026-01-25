import Link from "next/link";
import Navigation from "@/components/Navigation";
import Testimonial from "@/components/Testimonial";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients - No updates needed (decorative) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[140px]" />
      </div>

      {/*
        UPDATE: NAVIGATION CTA BUTTON
        Purpose: Primary call-to-action that follows user through the site
        What to update: Change ctaText and ctaHref when running different campaigns
        - During launches: "Get [Product Name]" → "/products/[slug]"
        - Default: "Get the Blueprint" → "/start" (lead magnet)
        - When coaching is priority: "Apply for Coaching" → "/coaching"
      */}
      <Navigation ctaText="Get the Blueprint" ctaHref="/start" />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Strength That Fits Your Life
          </p>

          <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Get stronger
            <br />
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              without wrecking your week
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl leading-8 text-zinc-300 max-w-2xl">
            You train with purpose. Your gym work should support that — not leave
            you too sore, too tired, or too beat up for what actually matters.
          </p>

          <Link
            href="/start"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-zinc-950 hover:bg-zinc-200 transition"
          >
            Get the free blueprint + weekly training insights
          </Link>
        </div>
      </section>

      {/*
        ============================================================
        PLACEHOLDER: SOCIAL PROOF METRICS
        ============================================================
        Purpose: Build instant credibility through numbers - visitors decide
        in seconds whether you're legit. Real metrics make you trustworthy.

        UPDATE: How to calculate each number:

        1. "200+" Athletes helped
           - Count: Total unique clients (1:1 coaching + program buyers)
           - Source: Your payment processor (Stripe dashboard) + coaching roster
           - Update frequency: Quarterly, or when you hit a new milestone (50, 100, 200, 500)
           - Tip: Round down to nearest 50 to stay conservative

        2. "500+" Programs delivered
           - Count: Total product sales + (coaching clients × weeks coached)
           - Example: 20 program sales + (8 clients × 12 weeks each) = 116
           - Source: Stripe transactions + coaching client weeks
           - Update frequency: Monthly

        3. "87%" Hit PRs within 8 weeks
           - Calculate: (Clients who reported PRs ÷ Total clients) × 100
           - Source: Client check-in data, progress photos, messages
           - How to track: Ask every client after 8 weeks "Did you hit any PRs?"
           - Update frequency: When you have new data (every 3-6 months)
           - Tip: If you don't have data yet, use "X of Y clients" instead of percentage

        PLACEHOLDER: Mini-testimonials under each metric
        - Replace with real 1-liner quotes from clients
        - Get these from: Text messages, DMs, email replies, check-in feedback
        - Format: Short (under 15 words), specific to that metric
      */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
            {/* UPDATE: Replace "200+" with your actual client count */}
            <p className="text-3xl font-bold text-white">200+</p>
            <p className="mt-1 text-sm text-zinc-400">
              Athletes building strength without missing training sessions
            </p>
            {/* PLACEHOLDER: Replace with real client quote about not missing sessions */}
            <p className="mt-4 text-xs text-zinc-500 italic">
              "Finally found training that doesn't wreck me for practice."
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
            {/* UPDATE: Replace "500+" with actual programs delivered count */}
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="mt-1 text-sm text-zinc-400">Digital programs delivered</p>
            {/* PLACEHOLDER: Replace with real quote about program quality */}
            <p className="mt-4 text-xs text-zinc-500 italic">
              "Clear, no-fluff programming. Exactly what I needed."
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-center">
            {/* UPDATE: Replace "87%" with your calculated PR percentage */}
            <p className="text-3xl font-bold text-white">87%</p>
            <p className="mt-1 text-sm text-zinc-400">
              Of clients hit PRs within first 8 weeks
            </p>
            {/* PLACEHOLDER: Replace with real quote about getting stronger */}
            <p className="mt-4 text-xs text-zinc-500 italic">
              "Stronger than ever, and I'm recovering better too."
            </p>
          </div>
        </div>
      </section>

      {/*
        ============================================================
        UPDATE: WHO THIS IS FOR - IDEAL CLIENT AVATARS
        ============================================================
        Purpose: Help visitors self-identify ("That's me!") - this increases
        conversion by making people feel understood before you pitch anything.

        What to update: Replace these 4 avatars with your ACTUAL client types

        How to identify your avatars:
        1. Look at your last 10 clients - what sports/activities do they do?
        2. What's their lifestyle situation? (job, family, schedule constraints)
        3. What's the common thread? (busy, can't afford to be sore, etc.)

        Format: "The [identity] who [specific pain point or desire]"

        Examples based on real clients:
        - "The BJJ competitor training 5x/week who can't afford to gas out"
        - "The marathon runner who wants to squat heavy without killing mileage"
        - "The busy parent who only has 3 hours/week to train"
        - "The first responder who needs to perform under fatigue"

        Update frequency: When your client base shifts or you want to attract
        a different audience. Review every 6 months.
      */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* PLACEHOLDER: Replace with your actual client avatar #1 */}
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-4">
            <p className="text-sm text-zinc-300">
              The BJJ athlete who needs to stay fresh for mat time
            </p>
          </div>
          {/* PLACEHOLDER: Replace with your actual client avatar #2 */}
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-4">
            <p className="text-sm text-zinc-300">
              The runner who wants to lift without killing their mileage
            </p>
          </div>
          {/* PLACEHOLDER: Replace with your actual client avatar #3 */}
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-4">
            <p className="text-sm text-zinc-300">
              The parent who hikes with their kids on weekends
            </p>
          </div>
          {/* PLACEHOLDER: Replace with your actual client avatar #4 */}
          <div className="rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-5 py-4">
            <p className="text-sm text-zinc-300">
              The firefighter who needs functional strength without fatigue
            </p>
          </div>
        </div>
      </section>

      {/*
        ============================================================
        UPDATE: THREE PATHS / PRODUCT LADDER
        ============================================================
        Purpose: Guide visitors to the right offer based on their commitment level.
        Builds a clear ascension: Free → Paid Products → Premium Coaching

        UPDATE: When to modify these cards:
        - Change "Free Blueprint" description when you update your lead magnet
        - Update "Full Programs" when you launch new products
        - Adjust "1:1 Coaching" availability text based on current roster
      */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {/*
            UPDATE: FREE LEAD MAGNET CARD
            Purpose: Entry point to your funnel - captures emails
            What to update:
            - Title: Match your current lead magnet name
            - Description: Summarize what they get
            - When messaging should change: If you create a new lead magnet
              or want to test different angles (e.g., "The 3-Day Strength Reset")
          */}
          <Link
            href="/start"
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-emerald-500/50 hover:bg-zinc-900/70 transition-all"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <svg
                className="h-6 w-6 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              Free
            </p>
            <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              The Blueprint
            </h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              The framework for strength training that protects your recovery and
              transfers to real life. Plus weekly training insights.
            </p>
            <p className="mt-4 text-sm text-zinc-500 group-hover:text-emerald-400 transition-colors">
              Get it free →
            </p>
          </Link>

          {/*
            UPDATE: PREMIUM PRODUCTS CARD
            Purpose: Middle tier of your product ladder
            What to update:
            - Description: Update when you add new product categories
            - Link: Can point to specific product during launches
            When to change: When launching a new flagship product, temporarily
            point this directly to that product page for focused traffic
          */}
          <Link
            href="/products"
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-indigo-500/50 hover:bg-zinc-900/70 transition-all"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20">
              <svg
                className="h-6 w-6 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
              Programs
            </p>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
              Full Programs
            </h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              Complete systems with programming, video guides, and progression
              built for people who train with purpose.
            </p>
            <p className="mt-4 text-sm text-zinc-500 group-hover:text-indigo-400 transition-colors">
              Browse programs →
            </p>
          </Link>

          {/*
            UPDATE: 1:1 COACHING CARD
            Purpose: Premium offer - highest price point
            What to update:
            - "Limited Spots" label: Change to specific number when nearly full
              e.g., "2 Spots Left" creates more urgency
            - Description: Adjust based on your current coaching format
            How often: Check weekly when actively taking new clients
          */}
          <Link
            href="/coaching"
            className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700">
              <svg
                className="h-6 w-6 text-zinc-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
              Limited Spots
            </p>
            <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors">
              1:1 Coaching
            </h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              Custom programming built around your life, schedule, and
              priorities. Weekly check-ins and direct access.
            </p>
            <p className="mt-4 text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors">
              Apply now →
            </p>
          </Link>
        </div>
      </section>

      {/*
        ============================================================
        PLACEHOLDER: TESTIMONIAL SECTION
        ============================================================
        Purpose: Build trust through social proof - real results from real people.
        Testimonials are your #1 conversion tool. They do the selling for you.

        What makes a GREAT testimonial:
        1. Specific result (numbers, PRs, measurable outcomes)
        2. Relatable identity (their sport/job so visitors see themselves)
        3. Before/after contrast ("I used to X, now I Y")
        4. Emotional payoff ("Finally found...", "Actually enjoying...")

        How to collect testimonials:
        1. Text/DM clients after 6-8 weeks: "Hey, what results have you noticed
           since we started? And what do you appreciate most about the programming?"
        2. Screenshot positive DMs and feedback (with permission)
        3. After a PR, ask: "Mind if I share this? What would you tell someone
           considering working with me?"

        Format for each testimonial:
        - quote: 1-2 sentences, specific result + emotional benefit
        - name: First name + last initial (e.g., "Marcus T.")
        - focus: Their sport/activity/identity (e.g., "Marathon runner", "BJJ competitor")
        - result: Specific metric or outcome (e.g., "+15 lb squat PR", "Zero missed shifts")

        UPDATE: Replace these 3 placeholder testimonials with real client feedback
        Tip: Rotate testimonials seasonally to keep content fresh
      */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
          What clients are saying
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* PLACEHOLDER: Testimonial #1 - Ideally from your most common client type */}
          <Testimonial
            quote="I used to dread leg day because it would wreck my runs for the rest of the week. Now I'm lifting heavier than ever and actually running faster."
            name="Marcus T."
            focus="Marathon runner"
            result="+15 lb squat PR"
          />
          {/* PLACEHOLDER: Testimonial #2 - Different client type for variety */}
          <Testimonial
            quote="As a firefighter, I can't afford to be sore on shift. This approach finally gave me a system that makes sense for my life."
            name="James R."
            focus="Firefighter / EMT"
            result="Zero missed shifts"
          />
          {/* PLACEHOLDER: Testimonial #3 - Combat sports/BJJ (your core audience) */}
          <Testimonial
            quote="BJJ 5x a week plus lifting was destroying me. Jake's programming fixed that. I'm actually recovering and still getting stronger."
            name="Sarah K."
            focus="BJJ competitor"
            result="Competed at 100%"
          />
        </div>
      </section>

      {/*
        ============================================================
        UPDATE: VALUE PROPOSITION SECTION
        ============================================================
        Purpose: Problem-Agitate-Solution framework. Show you understand their
        pain, present your unique approach, then show the outcome.

        This section rarely needs updating unless:
        1. You pivot your coaching philosophy
        2. You discover new pain points from client conversations
        3. You want to emphasize different benefits

        Tip: The "problems" should come from real client intake forms.
        Ask yourself: "What were clients struggling with before working with me?"
      */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          {/* UPDATE: "The Problem" - Pull from client intake pain points */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7">
            <h2 className="text-xl font-semibold">The problem</h2>
            <ul className="mt-4 space-y-3 text-base text-zinc-300 leading-7">
              <li>• Gym sessions that leave you wrecked for days</li>
              <li>• Programs that ignore your other training</li>
              <li>• Strength work that doesn't show up in real life</li>
            </ul>
            <p className="mt-4 text-sm text-zinc-400 leading-7">
              When recovery is limited, the wrong training takes more than it
              gives.
            </p>
          </div>

          {/* UPDATE: "The Filter" - Your unique methodology/philosophy */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7">
            <h2 className="text-xl font-semibold">The filter</h2>
            <p className="mt-4 text-base text-zinc-300">
              <span className="font-medium text-white">
                If it doesn't transfer to real life or protect your recovery,
                cut it.
              </span>
            </p>
            <p className="mt-3 text-sm text-zinc-400 leading-7">
              Every exercise earns its place. Nothing is there just to make you
              tired.
            </p>
          </div>

          {/* UPDATE: "What You Get" - The transformation/outcomes */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7">
            <h2 className="text-xl font-semibold">What you get</h2>
            <ul className="mt-4 space-y-3 text-base text-zinc-300 leading-7">
              <li>• Strength that transfers outside the gym</li>
              <li>• Training that fits your real schedule</li>
              <li>• Protected recovery for everything else</li>
              <li>• Sustainable progress you can maintain</li>
            </ul>
          </div>
        </div>

        {/*
          UPDATE: FINAL CTA SECTION
          Purpose: Last chance to convert before they leave the page.
          This should reinforce your core message and remove friction.

          What to update:
          - Tagline: "Train hard. Recover harder." - Change if you develop a new slogan
          - CTA button text: Should match your current lead magnet offer
          - Link: Point to /start for lead magnet, or /products during launches
        */}
        <div className="mt-16 rounded-[2rem] border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 p-10 text-center">
          <p className="mx-auto max-w-2xl text-sm text-zinc-300">
            <span className="font-medium text-white">Straight talk:</span> This
            isn't about getting destroyed in the gym. It's about building
            strength that supports your life — not competes with it.
          </p>

          {/* UPDATE: Your core tagline/slogan */}
          <h3 className="mt-8 text-3xl font-semibold tracking-tight">
            Train hard. Recover harder.
          </h3>

          {/* UPDATE: CTA button - match your current primary offer */}
          <Link
            href="/start"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-10 py-4 text-base font-medium text-zinc-950 hover:bg-zinc-200 transition"
          >
            Get the free blueprint + weekly insights
          </Link>

          <p className="mt-6 text-xs uppercase tracking-widest text-zinc-500">
            For people who value their time.
          </p>
        </div>
      </section>
    </main>
  );
}
