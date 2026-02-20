import "./globals.css";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata = {
  title: "Built for Performance — Combat Strength & Conditioning",
  description: "Strength + conditioning built for athletes who train with purpose.",
  icons: { icon: "/B_-_8.PNG" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} ${inter.className} bg-[#111111] text-zinc-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
