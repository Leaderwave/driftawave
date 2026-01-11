import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header, Footer, PostcardCTA } from "@/components/shared";

export const metadata: Metadata = {
  title: "Driftawave - Team Retreats, Workations & Epic Offsites",
  description:
    "Turnkey travel experiences for remote teams, distributed companies and online communities. Discover your next handpicked journey.",
  keywords: [
    "team retreats",
    "company offsites",
    "workations",
    "remote team events",
    "corporate retreats",
    "team building",
  ],
  openGraph: {
    title: "Driftawave - Team Retreats, Workations & Epic Offsites",
    description:
      "Turnkey travel experiences for remote teams, distributed companies and online communities.",
    type: "website",
    locale: "en_US",
    siteName: "Driftawave",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driftawave - Team Retreats, Workations & Epic Offsites",
    description:
      "Turnkey travel experiences for remote teams, distributed companies and online communities.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Warmly.ai - Website Visitor Tracking */}
        <Script
          id="warmly-script-loader"
          src="https://opps-widget.getwarmly.com/warmly.js?clientId=09354f15eb932891ff9ffe4b6ffe009b"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="min-h-screen pt-24 md:pt-28">{children}</main>
        <PostcardCTA />
        <Footer />
      </body>
    </html>
  );
}
