// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[140px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 border-b border-zinc-800/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-sm font-semibold">
              P
            </span>
            <span className="font-semibold tracking-tight">Petyurr</span>
          </Link>

          <nav className="flex items-center gap-6 text-sm text-zinc-300">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/task" className="hover:text-white transition-colors">
              Start Here
            </Link>
            <Link
              href="/task"
              className="rounded-xl bg-white px-4 py-2 font-medium text-zinc-950 hover:bg-zinc-200 transition"
            >
              Get the System
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            The Transfer Filter
          </p>

          <h1 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Strength training
            <br />
            <span className="bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              shouldn’t steal
            </span>{" "}
            from your combat training.
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-zinc-300 md:text-xl">
            If you train a combat sport seriously — alongside work, school, or life —
            you don’t have room for training that competes with itself.
            <br />
            <span className="text-zinc-100">
              This system removes decisions that quietly drain recovery, timing, and
              expression under fatigue.
            </span>
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/task"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-base font-medium text-zinc-950 hover:bg-zinc-200 transition"
            >
              Train without interference
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/40 px-8 py-4 text-base font-medium text-white hover:bg-zinc-900 transition"
            >
              Why this exists
            </Link>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
              <p className="font-medium text-white">Time-aware</p>
              <p className="mt-1 text-sm text-zinc-400">
                Built for limited recovery and busy weeks.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
              <p className="font-medium text-white">High transfer</p>
              <p className="mt-1 text-sm text-zinc-400">
                Strength that survives fatigue.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
              <p className="font-medium text-white">Protected recovery</p>
              <p className="mt-1 text-sm text-zinc-400">
                Combat practice stays the priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rule + Value */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7">
            <h2 className="text-lg font-semibold">The tension</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• You want strength without lingering soreness</li>
              <li>• You want conditioning that supports rounds</li>
              <li>• You can’t afford junk volume</li>
            </ul>
            <p className="mt-4 text-sm text-zinc-400">
              When time and recovery are limited, alignment matters more than volume.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7">
            <h2 className="text-lg font-semibold">The rule</h2>
            <p className="mt-4 text-sm text-zinc-300">
              <span className="font-medium text-white">
                If it doesn’t survive fatigue and skill expression, it doesn’t belong.
              </span>
            </p>
            <p className="mt-3 text-sm text-zinc-400">
              It’s not exciting. That’s why it works.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7">
            <h2 className="text-lg font-semibold">What you get</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li>• Combat-aligned strength structure</li>
              <li>• Recovery-aware exercise selection</li>
              <li>• Clear keep / cut rules</li>
              <li>• Fewer mistakes, better weeks</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-zinc-800 bg-gradient-to-b from-zinc-900/70 to-zinc-950/70 p-10 text-center">
          <p className="mx-auto max-w-2xl text-sm text-zinc-300">
            <span className="font-medium text-white">Disclaimer:</span> This isn’t about credentials or outcomes.
            It’s a decision-making system designed to keep training from working against itself.
          </p>

          <h3 className="mt-8 text-3xl font-semibold tracking-tight">
            Train with clarity instead of guesswork.
          </h3>

          <Link
            href="/task"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-10 py-4 text-base font-medium text-zinc-950 hover:bg-zinc-200 transition"
          >
            Start here
          </Link>

          <p className="mt-6 text-xs uppercase tracking-widest text-zinc-500">
            Not more work. Fewer conflicts.
          </p>
        </div>
      </section>
    </main>
  );
}
