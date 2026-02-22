import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Jay Concept - Branding & Printing Services",
  description: "Premium printing, souvenirs, corporate branding, awards, and customized gifts. Bringing your vision to life.",
  icons: {
    icon: "/images/logo1.jpg",
    apple: "/images/logo1.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${montserrat.variable} bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100 min-h-screen text-slate-900`}>{children}</body>
    </html>
  );
}
