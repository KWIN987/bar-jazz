import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteLock from "@/components/site-lock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jazz Bar - Musique Live & Cocktails",
  description: "Le meilleur bar jazz de la ville. Musique live tous les soirs.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout() {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteLock />
      </body>
    </html>
  );
}
