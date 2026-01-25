/*
  ============================================================
  PRODUCT CATALOG - Add New Products Here
  ============================================================

  This file is the single source of truth for all products.
  Edit this file to add, remove, or update products.

  The FIRST product in the array becomes the "featured" product
  on /products page. Reorder to change which product is featured.
*/

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number; // in cents
  priceDisplay: string;
  category: "program" | "guide";
  features: string[];
  includes: string[];
  stripePriceId?: string;
}

/*
  ============================================================
  UPDATE: HOW TO ADD A NEW PRODUCT
  ============================================================

  1. Copy the template below
  2. Fill in all fields
  3. Add it to the products array
  4. Create the product in Stripe and add the stripePriceId

  Template to copy:
  {
    id: "your-product-id",           // Unique ID, lowercase with hyphens
    slug: "your-product-slug",       // URL slug (same as id usually)
    name: "Your Product Name",       // Display name
    description: "Short 1-sentence description for cards and previews.",
    longDescription: "Longer 2-3 sentence description for the product detail page.",
    price: 4900,                     // Price in CENTS (4900 = $49.00)
    priceDisplay: "$49",             // Formatted price string
    category: "program",             // "program" or "guide"
    features: [                      // 4-6 bullet points for product cards
      "Feature 1",
      "Feature 2",
    ],
    includes: [                      // What's physically included in purchase
      "PDF guide",
      "Video library access",
    ],
    stripePriceId: "price_xxx",      // From Stripe Dashboard → Products → Price ID
  },

  PRODUCT DESCRIPTION TIPS:
  - description: Hook that creates curiosity (1 sentence)
  - longDescription: Expand on the transformation/outcome (2-3 sentences)
  - features: Benefits, not features ("Round-ready strength" not "12 exercises")
  - includes: Tangible deliverables ("50+ page PDF" not "comprehensive guide")

  PRICING TIPS:
  - price is in CENTS (multiply dollars by 100)
  - priceDisplay should match but formatted nice ("$49" not "$49.00")
  - Use .99 endings sparingly - round numbers feel more premium
*/

export const products: Product[] = [
  /*
    PLACEHOLDER: COMBAT BLUEPRINT
    UPDATE: Modify this product's details as the program evolves
    - Update features when you add new content
    - Update price in both 'price' and 'priceDisplay' when changing pricing
    - Update 'includes' when you add bonuses or change deliverables
  */
  {
    id: "combat-blueprint",
    slug: "combat-blueprint",
    name: "Combat Blueprint",
    description:
      "The complete strength & conditioning system for combat athletes who want training that transfers to rounds.",
    longDescription:
      "A comprehensive guide to building strength and conditioning that actually shows up when you're fighting. No fluff, no gym-bro programs — just battle-tested methods that protect your skill work while building real, usable power.",
    price: 4900, // $49.00
    priceDisplay: "$49",
    category: "program",
    features: [
      "Round-ready strength programming",
      "Conditioning protocols matched to fight demands",
      "Recovery management for high training loads",
      "Keep/cut decision framework",
      "Exercise selection criteria",
    ],
    includes: [
      "Complete PDF guide (50+ pages)",
      "Exercise video library access",
      "Sample 8-week program template",
      "Movement screening checklist",
    ],
    // UPDATE: Add stripePriceId when you create this in Stripe
    // stripePriceId: "price_xxxxxxxxxxxxx",
  },

  /*
    UPDATE: ADD NEW PRODUCTS BELOW
    Copy the template from the comment above and paste here.
    Example future products:
    - Runner's Strength Blueprint
    - Firefighter Fitness Guide
    - BJJ Strength Fundamentals
  */
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProductsByCategory(
  category: Product["category"]
): Product[] {
  return products.filter((p) => p.category === category);
}
