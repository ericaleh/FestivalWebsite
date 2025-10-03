import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rammetto_One } from "next/font/google";

const rammettoOne = Rammetto_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rammetto',
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
      <body className={`antialiased flex flex-col min-h-screen ${rammettoOne.variable}`}>
        <Navbar />
        <main className="pt-16 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
