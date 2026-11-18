import "./globals.css";
import { Inter, Oswald, Montserrat } from "next/font/google";

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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-montserrat",
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
    <html lang="en" className={montserrat.variable}>
      <body className={`${inter.variable} ${oswald.variable} ${inter.className} bg-[#111111] text-zinc-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
