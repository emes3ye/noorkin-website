import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noorkin.dev — Enlightened tech solutions",
  description: "Illuminating Your Business with Ethical Tech Solutions. Custom software development, cloud architecture, and IT consulting with integrity.",
  metadataBase: new URL("https://noorkin.dev"),
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Noorkin.dev — Enlightened tech solutions",
    description: "Illuminating Your Business with Ethical Tech Solutions",
    url: "https://noorkin.dev",
    siteName: "Noorkin.dev",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-pattern min-h-screen flex flex-col">
        <a 
          href="#content" 
          className="sr-only focus:not-sr-only focus-ring fixed z-50 top-4 left-4 px-4 py-2 bg-accent text-white rounded-md font-medium"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
