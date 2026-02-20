import Link from "next/link";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Purchase Complete — Built for Performance",
  description: "Thank you for your purchase!",
};

export default function CheckoutSuccessPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-indigo-400/10 blur-[140px]" />
      </div>

      <Navigation ctaText="Book a Call" ctaHref="/coaching" />

      <section className="mx-auto max-w-2xl px-6 pt-24 pb-24 text-center">
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

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          You're all set!
        </h1>

        <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
          Thanks for your purchase. Check your email for a confirmation and
          download link.
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <h2 className="text-lg font-semibold mb-2">What's next?</h2>
          <ul className="text-left text-zinc-300 space-y-3 mt-4">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              Check your inbox for the download link
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              Download your program and start reading
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              Follow along with the exercise videos
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/coaching"
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 px-8 py-4 text-base font-medium text-white hover:bg-zinc-900 transition"
          >
            Book a Call
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-medium text-zinc-950 hover:bg-zinc-200 transition"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
