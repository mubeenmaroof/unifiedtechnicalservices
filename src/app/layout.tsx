import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Unified Technical Services",

    template: "%s | Unified Technical Services",
  },

  description:
    "Professional GIS, Fiber Optic, GPON Planning, CCTV, Electrical, Fire Alarm and Solar Installation services.",

  keywords: [
    "Unified Technical Services",
    "GIS",
    "ArcGIS",
    "QGIS",
    "GPON Planning",
    "FTTH",
    "FTTB",
    "FTTX",
    "Fiber Optic",
    "CCTV",
    "Electrical Works",
    "Fire Alarm",
    "Solar Installation",
  ],
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
        <Navbar />

        {children}

        <Footer />

        <FloatingContact />
      </body>
    </html>
  );
}
