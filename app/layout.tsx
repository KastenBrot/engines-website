import type { Metadata } from "next";
import { Inter, Anek_Gurmukhi, Exo_2 } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const anek = Anek_Gurmukhi({
  subsets: ["gurmukhi"],
  display: "swap",
  variable: "--font-anek-gurmukhi",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo-2",
});

export const metadata: Metadata = {
  title: "Engines Stuttgart e.V.",
  description:
    "Der Engines Stuttgart e.V. ist der 1. offizielle E-Sports Verein aus der Metropolregion Stuttgart.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anek.variable} ${exo2.variable}`}
    >
      <body className="flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
