import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Spades Poker House | Webster Baytown TX Poker Locations",
  description: "Contact Spades Poker House Webster and Baytown locations. Elite-level poker events near Houston. Get directions, hours, membership info for Texas's premier poker club.",
  keywords: "contact Spades Poker House, Webster poker location, Baytown poker address, Houston area poker contact, elite poker events Texas",
  robots: "index, follow",
  alternates: {
    canonical: "https://spades-gamma.vercel.app/contact",
  },
  other: {
    "geo.region": "US-TX",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}