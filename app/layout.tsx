import "./globals.css";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyBookBar from "@/components/StickyBookBar";

// Self-hosted (app/fonts, latin subset) so builds never fetch from Google Fonts.
const inter = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = localFont({
  src: [
    { path: "./fonts/montserrat-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/montserrat-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/montserrat-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/montserrat-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/montserrat-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  metadataBase: new URL("https://peteyurr.com"),
  title: "Built for Performance | Strength & Conditioning with Jake Peterson",
  description:
    "Strength and conditioning coaching for athletes and everyday people. In person at Dragon Gym in Exton, PA, or online.",
  openGraph: {
    title: "Built for Performance | Strength & Conditioning with Jake Peterson",
    description:
      "Strength and conditioning coaching for athletes and everyday people. In person at Dragon Gym in Exton, PA, or online.",
    siteName: "Built for Performance",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        <Navigation />
        {children}
        <Footer />
        <StickyBookBar />
      </body>
    </html>
  );
}
