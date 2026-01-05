// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-semibold">
          Thanks! — it's ready.
        </h1>

        <a
  href="/combat-blueprint.pdf"
  download
  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-zinc-950 hover:bg-zinc-200"
>
  Download Here
</a>


        <Link href="/about">← Back</Link>

      </div>
    </main>
  );
}
