import type { Metadata } from "next";
import ShopHero from "@/components/shop/ShopHero";
import ShopPrograms from "@/components/shop/ShopPrograms";
import ShopApparel from "@/components/shop/ShopApparel";
import SomethingNow from "@/components/shop/SomethingNow";

const title = "Shop | Built for Performance";
const description =
  "Training programs and BFP apparel are coming soon. Join the list to hear first.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
};

export default function ShopPage() {
  return (
    <main className="overflow-x-clip bg-cream text-ink">
      <ShopHero />
      <ShopPrograms />
      <ShopApparel />
      <SomethingNow />
    </main>
  );
}
