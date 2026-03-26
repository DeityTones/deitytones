import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ============================================
// 📌 SITE METADATA - UPDATE THESE
// This controls what shows in browser tabs
// and search engine results
// ============================================
export const metadata: Metadata = {
  title: "T The Pharaoh | Official Site",
  description: "Official website of T The Pharaoh - Music, Production, Multimedia Services",
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
        {/* ================================
            GLOBAL BACKGROUND
            Sits behind EVERY page
            ================================ */}
        <div className="relative min-h-screen">

          {/* Egyptian Background Image */}
          <div
            className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Ancient_Egypt.png')" }}
          >
            {/* Dark overlay on top of background */}
            <div className="absolute inset-0 bg-black/60" />
          </div>

          {/* ================================
              NAVBAR
              Appears on top of every page
              ================================ */}
          <div className="relative z-50">
            <Navbar />
          </div>

          {/* ================================
              PAGE CONTENT
              Each page loads here
              ================================ */}
          <div className="relative z-10">
            {children}
          </div>

          {/* ================================
              FOOTER
              Appears at bottom of every page
              ================================ */}
          <div className="relative z-10">
            <Footer />
          </div>

        </div>
      </body>
    </html>
  );
}