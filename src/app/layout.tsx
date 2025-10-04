import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Rammetto_One } from "next/font/google";

const rammettoOne = Rammetto_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rammetto',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: "Onset Festival",
  description: "A festival fostering connection and community through music, art, nature, and performance.",
  icons: {
    icon: '/onset-favicon.png',
    shortcut: '/onset-favicon.png',
    apple: '/onset-favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased flex flex-col min-h-screen ${rammettoOne.variable}`} suppressHydrationWarning>
        <Navbar />
        <main className="pt-16 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
