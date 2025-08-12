import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baytown TX Poker Room | Real Poker Vibes Southeast Texas",
  description: "Discover real poker vibes in Baytown, Texas. Exceptional service, friendly atmosphere, and professional poker action. Trusted venue for Southeast Texas players.",
  keywords: "Baytown TX poker room, Baytown poker, Southeast Texas poker, real poker vibes Baytown, East Houston poker, poker tournaments Baytown",
  robots: "index, follow",
  alternates: {
    canonical: "https://spades-gamma.vercel.app/baytown",
  },
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Baytown, Texas",
    "geo.position": "29.7355;-94.9774",
    "ICBM": "29.7355,-94.9774",
  },
};

export default function BaytownLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}