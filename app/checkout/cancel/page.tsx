import Link from "next/link";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Checkout Cancelled — Built for Performance",
  description: "Your checkout was cancelled.",
};

export default function CheckoutCancelPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[140px]" />
      </div>

      <Navigation ctaText="Book a Call" ctaHref="/coaching" />

      <section className="mx-auto max-w-2xl px-6 pt-24 pb-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Changed your mind?
        </h1>

        <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
          No worries — your cart wasn't charged. Feel free to browse or come
          back when you're ready.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/coaching"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-medium text-zinc-950 hover:bg-zinc-200 transition"
          >
            Book a Call
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 px-8 py-4 text-base font-medium text-white hover:bg-zinc-900 transition"
          >
            Back to home
          </Link>
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
          <h2 className="text-lg font-semibold mb-2">Have questions?</h2>
          <p className="text-zinc-400">
            Check out the{" "}
            <Link href="/coaching" className="text-[#C2581F] hover:underline">
              coaching page
            </Link>{" "}
            to learn more about personalized programs.
          </p>
        </div>
      </section>
    </main>
  );
}
