/*
  ============================================================
  PRODUCT DETAIL PAGE (Dynamic)
  ============================================================

  This page is automatically generated for each product in lib/products.ts
  You don't edit this file to change product content - edit lib/products.ts instead.

  What this page displays (all pulled from lib/products.ts):
  - product.name → Title
  - product.longDescription → Main description
  - product.priceDisplay → Price
  - product.features → "What you'll learn" bullets
  - product.includes → "What's included" box

  To add a product image:
  1. Add an 'image' field to the Product interface in lib/products.ts
  2. Replace the placeholder letter with an <Image> component here
  3. Store product images in /public/products/

  NOTE: Product content is managed in lib/products.ts, not here.
  See lib/products.ts for instructions on adding/editing products.
*/

import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import { CheckoutButton } from "./CheckoutButton";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} — Peteyurr`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[140px]" />
      </div>

      <Navigation ctaText="Get Started" ctaHref="/start" />

      <section className="mx-auto max-w-7xl px-6 pt-12 pb-24">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-zinc-400">
            <li>
              <Link href="/products" className="hover:text-white transition-colors">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="text-zinc-200">{product.name}</li>
          </ol>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2">
          {/*
            PLACEHOLDER: PRODUCT IMAGE
            Purpose: Visual representation of the product. Currently shows
            a placeholder letter - replace with actual product mockup.

            To add real product images:
            1. Create product mockups (PDF cover, program preview, etc.)
            2. Save to /public/products/[product-slug].png
            3. Add 'image' field to Product interface in lib/products.ts
            4. Replace this div with: <Image src={product.image} ... />

            Recommended image specs:
            - Square aspect ratio (1:1) works best with current layout
            - 800x800px minimum for crisp display
            - PNG or WebP format
          */}
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
            <span className="text-8xl font-bold text-zinc-700">
              {product.name.charAt(0)}
            </span>
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block rounded-full bg-zinc-800 px-3 py-1.5 text-xs text-zinc-400 capitalize mb-4">
              {product.category}
            </span>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {product.name}
            </h1>

            <p className="mt-4 text-lg text-zinc-300 leading-relaxed">
              {product.longDescription}
            </p>

            <div className="mt-8 flex items-baseline gap-4">
              <span className="text-4xl font-bold text-white">
                {product.priceDisplay}
              </span>
              <span className="text-zinc-500">one-time purchase</span>
            </div>

            <CheckoutButton productId={product.id} />

            {/* Features */}
            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                What you'll learn
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-zinc-200">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="mt-10 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                What's included
              </h3>
              <ul className="space-y-3">
                {product.includes.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 text-emerald-400 flex-shrink-0"
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
                    <span className="text-zinc-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
