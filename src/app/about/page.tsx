import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Spades Poker House | Top Poker Club Webster & Baytown TX",
  description: "Learn how Spades Poker House became Texas's top poker club. Leading poker experience with Webster and Baytown locations since 2020. Premium poker destination.",
  keywords: "Spades Poker House story, top poker club Texas, Webster Baytown poker history, leading poker experience Texas, premium poker destination",
  robots: "index, follow",
  alternates: {
    canonical: "https://spades-gamma.vercel.app/about",
  },
  other: {
    "geo.region": "US-TX",
  },
};

export default function About() {
  return <AboutClient />;
}