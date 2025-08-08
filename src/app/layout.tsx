import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webster & Baytown TX Poker Room | Spades Poker House",
  description: "#1 poker room Webster TX and Baytown TX. Spades Poker House offers Texas Hold'em tournaments, cash games, PLO. Private membership poker club near Houston.",
  keywords: "poker room Webster TX, poker room Baytown TX, Webster poker, Baytown poker, Houston area poker club, Texas Hold'em Webster, poker tournaments Baytown",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  alternates: {
    canonical: "https://spades-gamma.vercel.app/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Spades Poker House",
  },
  other: {
    "google-site-verification": "e-yl_NVVAbd9mhW7h5iHZCRWiSJLrzNMoBVhQEPZpwk",
    "geo.region": "US-TX",
    "geo.placename": ["Webster, Texas", "Baytown, Texas"],
    "og:type": "business.business",
    "business:contact_data:locality": "Webster",
    "business:contact_data:region": "TX",
    "business:contact_data:country_name": "USA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-[87px]">
          {children}
        </main>
      </body>
    </html>
  );
}
