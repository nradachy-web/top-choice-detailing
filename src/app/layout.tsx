import type { Metadata } from "next";
import { Inter, Catamaran } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const catamaran = Catamaran({
  variable: "--font-catamaran",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Top Choice Detailing | Veteran Owned Auto Detailing in Avon, IN",
    template: "%s | Top Choice Detailing",
  },
  description:
    "Top Choice Detailing is a veteran owned and operated auto detailing business in Avon, Indiana. We offer interior detailing, exterior detailing, ceramic coating, window tinting, paint correction, and more. Serving Avon, Plainfield, Brownsburg, Mooresville, Indianapolis, Camby, and Danville.",
  keywords: [
    "auto detailing",
    "car detailing",
    "Avon Indiana",
    "veteran owned",
    "ceramic coating",
    "window tinting",
    "paint correction",
    "interior detailing",
    "exterior detailing",
    "motorcycle detailing",
    "fleet detailing",
    "Plainfield",
    "Brownsburg",
    "Mooresville",
    "Indianapolis",
  ],
  openGraph: {
    title: "Top Choice Detailing | Veteran Owned Auto Detailing in Avon, IN",
    description:
      "Veteran owned and operated auto detailing in Avon, Indiana. Premium interior & exterior detailing, ceramic coating, window tinting, and more.",
    type: "website",
    locale: "en_US",
    siteName: "Top Choice Detailing",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${catamaran.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
