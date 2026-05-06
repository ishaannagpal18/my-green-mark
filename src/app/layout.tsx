import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Green Mark — Building a Transparent Future Through Sustainability",
  description: "India's first integrated ESG & sustainability platform. GPS plantation tracking, carbon exchange, BRSR reporting, ESG consulting & gamified sustainability challenges.",
  keywords: "ESG, sustainability, carbon credits, plantation tracking, BRSR, India, green, environment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F7EDE2]">
        <ScrollProgress />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
