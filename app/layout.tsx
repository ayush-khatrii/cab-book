import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"
import { Suspense } from "react";
import Footer from "@/components/Footer";
import Head from "next/head";
import { siteMetadata } from "@/lib/sitemetadata";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800",]
});


export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.className} ${sora.className} antialiased`}
      >
        <main>
          <Navbar />
          <Suspense>
            {children}
          </Suspense>
          <Footer />
        </main>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
