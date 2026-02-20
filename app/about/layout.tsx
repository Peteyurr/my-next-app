import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jake Peterson — Exercise Science Student & Strength Coach",
  description:
    "From childhood arthritis to Muay Thai athlete. How I learned to build strength that transfers without stealing recovery.",
  openGraph: {
    title: "About Jake Peterson — Exercise Science Student & Strength Coach",
    description:
      "From childhood arthritis to Muay Thai athlete. How I learned to build strength that transfers without stealing recovery.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
