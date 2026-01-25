/*
  ============================================================
  TESTIMONIAL COMPONENT - How to Use
  ============================================================

  Purpose: Display social proof from real clients. Testimonials are your
  most powerful conversion tool - they let others do the selling for you.

  Props explained:
  - quote: The client's words (1-2 sentences, specific results preferred)
  - name: First name + last initial (e.g., "Marcus T.") - protects privacy
  - focus: Their sport/activity/identity (e.g., "Marathon runner", "BJJ competitor")
  - result: Specific metric or outcome (e.g., "+15 lb squat PR", "Zero missed shifts")
  - variant: "default" (with stars, larger) or "compact" (smaller, inline)

  ============================================================
  PLACEHOLDER: HOW TO COLLECT GREAT TESTIMONIALS
  ============================================================

  When to ask:
  1. After 6-8 weeks of working together (enough time for results)
  2. Right after a client hits a PR or milestone
  3. When a client sends you a positive message unprompted
  4. At the end of a coaching engagement

  What to ask:
  - "What results have you noticed since we started?"
  - "What would you tell someone considering this program?"
  - "What did you struggle with before, and how is it different now?"
  - "What do you appreciate most about working with me?"

  What makes a great testimonial:
  1. Specific results (numbers, PRs, measurable outcomes)
  2. Before/after contrast ("I used to X, now I Y")
  3. Emotional payoff ("Finally found...", "Actually enjoying...")
  4. Identity match (their sport/job matches your target audience)

  How to get permission:
  - "Mind if I share this? I'd use just your first name."
  - Screenshot DMs/messages (with permission)
  - Create a simple form: "Name, Activity, Quote, Result"

  Tip: Keep a running doc of positive client feedback. When you get a
  good message, immediately ask if you can use it as a testimonial.
*/
interface TestimonialProps {
  quote: string;
  name: string;
  focus: string;
  result?: string;
  variant?: "default" | "compact";
}

export default function Testimonial({
  quote,
  name,
  focus,
  result,
  variant = "default",
}: TestimonialProps) {
  if (variant === "compact") {
    return (
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
        <p className="text-sm text-zinc-300 leading-relaxed italic">"{quote}"</p>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-white">{name}</p>
            <p className="text-xs text-zinc-500">{focus}</p>
          </div>
          {result && (
            <span className="text-xs font-medium text-emerald-400">{result}</span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
      <div className="mb-4 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote className="text-lg text-zinc-200 leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="font-medium text-white">{name}</p>
          <p className="text-sm text-zinc-500">{focus}</p>
        </div>
        {result && (
          <div className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1">
            <span className="text-sm font-medium text-emerald-400">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
}
