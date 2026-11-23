import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StickyBookBar from "@/components/StickyBookBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
