import type { Metadata } from "next";
import { Inter, Anek_Gurmukhi } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const anek = Anek_Gurmukhi({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anek-gurmukhi",
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
    <html lang="en" className={`${inter.variable} ${anek.variable}`}>
      <body className="flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
