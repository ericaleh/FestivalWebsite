import type { Metadata } from "next";
import { PT_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-pt-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flights & Sounds Festival",
  description: "A festival fostering connection and community through music, art, nature, and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSerif.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="pt-16 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
