import type { Metadata } from "next";
import { Inter, Anek_Gurmukhi } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const anek = Anek_Gurmukhi({
  subsets: ["gurmukhi"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-anek-gurmukhi",
});

export const metadata: Metadata = {
  title: "Engines Stuttgart e.V.",
  description:
    "Der Engines Stuttgart e.V. ist der 1. offizielle E-Sports Verein aus der Metropolregion Stuttgart.",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anek.variable}`}
    >
      <body className="flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
