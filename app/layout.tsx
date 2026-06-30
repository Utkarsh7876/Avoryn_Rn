import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avoryn.in"),
  title: "Avoryn - Influencer Marketing Agency India",
  description:
    "Avoryn is an influencer marketing agency connecting brands with creators for campaigns that drive real engagement and results.",
  keywords: [
    "influencer marketing agency india",
    "creator marketing",
    "influencer campaigns",
    "brand partnerships india",
  ],
  openGraph: {
    title: "Avoryn - Influencer Marketing Agency",
    description: "We connect brands with creators that move the needle.",
    url: "https://avoryn.in",
    siteName: "Avoryn",
    type: "website",
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
        className={`${inter.variable} ${syne.variable} bg-canvas font-body text-textPrimary antialiased`}
      >
        <ScrollProgressBar />
        <div className="relative min-h-screen overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
