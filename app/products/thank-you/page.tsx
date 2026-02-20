import Link from "next/link";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "You're All Set! — Built for Performance",
  description: "Your purchase is complete. Check your email for your download.",
};

export default function ProductThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-indigo-400/10 blur-[140px]" />
      </div>

      <Navigation showBanner={false} ctaText="Book a Call" ctaHref="/coaching" />

      <section className="mx-auto max-w-2xl px-6 pt-20 pb-24">
        {/* Success Icon */}
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

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center">
          You're all set!
        </h1>

        <p className="mt-4 text-lg text-zinc-300 text-center leading-relaxed">
          Check your email (including spam) for your download link. You'll
          receive it within 5 minutes.
        </p>

        {/* What's Next */}
        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="font-semibold text-white mb-4">What's next:</h2>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              Download your program from the email link
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              Read through the framework before starting
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              Access the exercise video library
            </li>
          </ul>
        </div>

        {/* Coaching Upsell */}
        <div className="mt-10 rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-transparent p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-3">
            Take It Further
          </p>
          <h2 className="text-2xl font-bold text-white">
            Want this customized to your exact schedule and goals?
          </h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            The program gives you the framework. 1:1 coaching gives you a custom
            build — programming designed around your training schedule, recovery
            capacity, and specific goals. Weekly check-ins, direct messaging, and
            ongoing adjustments as you progress.
          </p>
          <Link
            href="/coaching"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-semibold text-zinc-950 hover:bg-zinc-200 transition"
          >
            Apply for coaching
          </Link>
        </div>

        {/* Support */}
        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">
            Questions?{" "}
            <a
              href="mailto:jake24peterson@gmail.com"
              className="text-zinc-300 hover:text-white transition-colors"
            >
              jake24peterson@gmail.com
            </a>
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
