import type { Metadata } from "next";
import '../styles/globals.css';
import { Inter } from "next/font/google";
import '@/globals.css';
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: ["Smart Infrastructure", "AI BMS India", "Solar Rooftops", "EV Infrastructure"],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="bg-[#F8FAFC] text-[#0B132B] antialiased selection:bg-[#00D2FF]/20 selection:text-[#0072CE]">
        {children}
      </body>
    </html>
  );
}