import Link from "next/link";
import Navigation from "@/components/Navigation";
import Testimonial from "@/components/Testimonial";
import { getAllProducts } from "@/lib/products";

export const metadata = {
  title: "Programs — Built for Performance",
  description: "Strength programs for people who train with purpose.",
};

/*
  ============================================================
  UPDATE: PRODUCTS PAGE FAQs
  ============================================================
  Purpose: Overcome objections and answer common questions to reduce friction
  before purchase. Good FAQs address the silent doubts buyers have.

  When to update these FAQs:
  1. When you get the same question 3+ times from customers
  2. When you change your product format (PDF → app, etc.)
  3. When you add new product categories
  4. After each launch - note what questions came up

  How to find new FAQ content:
  - Check your email inbox for customer questions
  - Review DMs and comments asking about products
  - Note objections from sales conversations

  Good FAQ format:
  - Question: The exact way customers phrase it
  - Answer: Direct, confident, removes the concern

  PLACEHOLDER: Replace/expand these based on actual customer questions
*/
const faqs = [
  {
    // UPDATE: Modify if your target audience changes
    question: "Who are these programs for?",
    answer:
      "Athletes training 3-6 days/week who need strength that doesn't interfere with their main training. Whether you're doing BJJ, running, playing a sport, or have a physically demanding job — these programs are built to enhance your performance, not compete with it.",
  },
  {
    // UPDATE: Change when you modify delivery format
    question: "What format do I receive them in?",
    answer:
      "You'll get a downloadable PDF guide plus access to an exercise video library. Everything is designed to work on your phone so you can reference it at the gym.",
  },
  {
    // UPDATE: Adjust based on what equipment your programs actually require
    question: "Do I need special equipment?",
    answer:
      "Most programs are designed for a standard gym setup: barbell, dumbbells, pull-up bar, and cable machine. Home gym alternatives are included where possible.",
  },
  {
    // UPDATE: Change email if you set up a support address
    question: "What if I have questions after purchasing?",
    answer:
      "Email me directly at jake24peterson@gmail.com. I respond to every question personally, usually within 24 hours.",
  },
  {
    // UPDATE: Modify refund policy terms as needed
    question: "Can I get a refund?",
    answer:
      "If you're not satisfied within 30 days, email me and I'll refund you — no questions asked. But honestly, if you follow the program, you won't need it.",
  },
];

/*
  ============================================================
  UPDATE: ADDING NEW PRODUCTS
  ============================================================
  When launching a new product, you don't edit this file directly.
  Products are managed in: lib/products.ts

  To add a new product:
  1. Open lib/products.ts
  2. Add a new product object to the products array with:
     - id: unique string (e.g., "runner-strength")
     - name: display name (e.g., "Runner's Strength Blueprint")
     - slug: URL slug (e.g., "runner-strength")
     - description: 1-2 sentence hook
     - price: number in cents (e.g., 4700 for $47)
     - priceDisplay: formatted price (e.g., "$47")
     - category: product type (e.g., "program", "guide", "template")
     - features: array of 4-6 bullet points
     - stripeProductId: from your Stripe dashboard

  Featured product: The first product in the array becomes the featured product
  shown prominently at the top. Reorder the array to change featured product.
*/
export default function ProductsPage() {
  const products = getAllProducts();
  const featuredProduct = products[0]; // Combat Blueprint

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[140px]" />
      </div>

      <Navigation ctaText="Get Started" ctaHref="/start" />

      <section className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Programs & Guides
          </p>
          <h1 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight">
            Training that transfers
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Programs built for people who train with purpose and can't afford to
            be wrecked by their gym sessions.
          </p>
        </div>
      </section>

      {/* Featured Product */}
      {featuredProduct && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <Link
            href={`/products/${featuredProduct.slug}`}
            className="group block rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-transparent p-8 md:p-10 hover:border-indigo-500/50 transition-all"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
              {/* Product Image */}
              <div className="lg:w-1/3">
                <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                  <span className="text-6xl font-bold text-zinc-700 group-hover:text-zinc-600 transition-colors">
                    {featuredProduct.name.charAt(0)}
                  </span>
                  {/* Most Popular Badge */}
                  <span className="absolute top-4 left-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                    MOST POPULAR
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:w-2/3">
                <span className="inline-block rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400 capitalize mb-3">
                  {featuredProduct.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {featuredProduct.name}
                </h2>
                <p className="mt-3 text-zinc-300 leading-relaxed">
                  For athletes training 3-6 days/week who need strength that
                  doesn't interfere with their main training. A complete system
                  for building strength that actually shows up when it matters.
                </p>

                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {featuredProduct.features.slice(0, 4).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-zinc-400"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-6">
                  <span className="text-3xl font-bold text-white">
                    {featuredProduct.priceDisplay}
                  </span>
                  <span className="text-sm text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    View details →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/*
        ============================================================
        PLACEHOLDER: PRODUCT PAGE TESTIMONIALS
        ============================================================
        Purpose: Social proof specific to PRODUCT purchases (not coaching).
        These should reference the programs directly and mention value/price.

        Ideal testimonial for products page:
        - Mentions the specific product or program type
        - Talks about value for money ("worth every penny")
        - References ease of use / clarity of the program
        - Shows a tangible result

        How to get product testimonials:
        1. Email buyers 4-6 weeks after purchase:
           "Hey [name], how's the program going? What results have you seen?"
        2. Follow up on positive Stripe purchase confirmations
        3. Ask in DMs: "Would you mind sharing what you liked about [product]?"

        UPDATE: Replace with real testimonials from product buyers
      */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* PLACEHOLDER: Product testimonial #1 - focus on value */}
          <Testimonial
            quote="This isn't some generic program. It's exactly what I needed to keep lifting heavy without destroying my mat time. Worth every penny."
            name="Chris M."
            focus="BJJ purple belt"
            result="Training 6x/week"
            variant="compact"
          />
          {/* PLACEHOLDER: Product testimonial #2 - focus on clarity/usability */}
          <Testimonial
            quote="Finally, someone who understands that gym work needs to support your real training, not compete with it. Clear, actionable, no BS."
            name="Amanda L."
            focus="CrossFit + running"
            result="PR'd both"
            variant="compact"
          />
        </div>
      </section>

      {/* Other Products Grid */}
      {products.length > 1 && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
            More Programs
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(1).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all"
              >
                <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center mb-5">
                  <span className="text-4xl font-bold text-zinc-700 group-hover:text-zinc-600 transition-colors">
                    {product.name.charAt(0)}
                  </span>
                </div>

                <span className="inline-block rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400 capitalize mb-3">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between pt-4 border-t border-zinc-800">
                  <span className="text-xl font-bold text-white">
                    {product.priceDisplay}
                  </span>
                  <span className="text-sm text-zinc-400 group-hover:text-indigo-400 transition-colors">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="text-2xl font-bold text-center mb-10">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <h3 className="font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-400 mb-4">Still have questions?</p>
          <a
            href="mailto:jake24peterson@gmail.com"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Email me directly →
          </a>
        </div>
      </section>
    </main>
  );
}
