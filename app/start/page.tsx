"use client";
// app/start/page.tsx — focused opt-in for the Round-Ready Blueprint
export default function StartPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 px-6 py-16 flex items-center">
      <div className="mx-auto w-full max-w-xl">
        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Round-Ready Blueprint
        </h1>

        <p className="mt-4 text-lg text-zinc-300">
          Strength and conditioning that transfers to rounds.
        </p>

        <p className="mt-3 text-sm text-zinc-400 max-w-xl">
          Short rules and session plans that protect your skill work and keep
          strength useful when the rounds start.
        </p>

        <form
          onSubmit={async (e: any) => {
            e.preventDefault();
            const form = e.currentTarget;

            try {
              const res = await fetch("https://formspree.io/f/mpqwyyaz", {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" },
              });

              if (!res.ok) throw new Error("Formspree failed");

              window.location.assign("/thanks");
            } catch (err) {
              console.error(err);
              alert("Submission failed. Try again or disable adblock.");
            }
          }}
          className="mt-6 space-y-4"
        >
          <div>
            <label className="block text-sm text-zinc-400">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm md:text-base text-zinc-50 placeholder-zinc-500 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-400">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="your.email@example.com"
              className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm md:text-base text-zinc-50 placeholder-zinc-500 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-700"
            />
          </div>

          <input type="hidden" name="source" value="IG Blueprint Opt-In" />

          <button
            type="submit"
            className="mt-4 w-full rounded-2xl bg-white py-3 text-base font-medium text-zinc-950 hover:bg-zinc-200 shadow-sm"
          >
            Send me the blueprint
          </button>
        </form>

        <p className="mt-4 text-xs text-zinc-500">No spam. One follow-up message only.</p>
      </div>
    </main>
  );
}
