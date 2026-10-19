import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteUrl } from "@/lib/site";

// ============================================
// 📌 SITE METADATA - UPDATE THESE
// This controls what shows in browser tabs
// and search engine results
// ============================================
const description =
  "Official website of T The Pharaoh - Music, Production, Multimedia Services";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "T The Pharaoh | Official Site",
    template: "%s | T The Pharaoh",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "T The Pharaoh",
    title: "T The Pharaoh | Official Site",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "T The Pharaoh | Official Site",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* ================================
            GLOBAL BACKGROUND
            Sits behind EVERY page
            ================================ */}
        <div className="relative min-h-screen">

          {/* Egyptian Background Image */}
          <div
            className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/Ancient_Egypt.jpg')" }}
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
