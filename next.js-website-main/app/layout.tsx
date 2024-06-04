import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className + "bg-primary"}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
