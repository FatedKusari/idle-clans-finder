import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./modal-styles.css";
import "react-tooltip/dist/react-tooltip.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import { Providers } from "./providers";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Idle Clans Hub | Player Search, Stats & Guides",
  description:
    "Your go-to resource for Idle Clans - search player statistics, track skill levels, browse market upgrades, and read comprehensive guides written by experienced players.",
  keywords:
    "Idle Clans, player finder, game stats, skills tracker, local market upgrades, MMORPG stats, Idle Clans guides, skill guides, beginner tutorials, boss strategies, clan management",
  authors: [{ name: "Idle Clans Hub" }],
  openGraph: {
    title: "Idle Clans Hub | Player Search, Stats & Guides",
    description:
      "Search player statistics, track skill levels, browse market upgrades and read comprehensive Idle Clans guides",
    type: "website",
    siteName: "Idle Clans Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Idle Clans Hub | Player Search, Stats & Guides",
    description:
      "Search player statistics, track skill levels, browse market upgrades and read comprehensive Idle Clans guides",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-6722789074992707"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Cookie&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${roboto.variable} font-sans bg-[#031111] min-h-screen text-white flex flex-col`}
      >
        <Providers>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
        <CookieBanner />
      </body>
    </html>
  );
}
