import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jay Concept - Branding & Printing Services",
  description: "Premium printing, souvenirs, corporate branding, awards, and customized gifts. Bringing your vision to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100 min-h-screen text-slate-900`}>{children}</body>
    </html>
  );
}
