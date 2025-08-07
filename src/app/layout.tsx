import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karravula Chandra - Professional Software Solutions",
  description: "Expert software development, web applications, and digital solutions. Professional services for international clients with 20+ years of design excellence.",
  keywords: ["software development", "web applications", "digital solutions", "professional services"],
  authors: [{ name: "Karravula Chandra" }],
  creator: "Karravula Chandra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karravulachandra.com",
    title: "Karravula Chandra - Professional Software Solutions",
    description: "Expert software development, web applications, and digital solutions. Professional services for international clients.",
    siteName: "Karravula Chandra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karravula Chandra - Professional Software Solutions",
    description: "Expert software development, web applications, and digital solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900 selection:bg-blue-600 selection:text-white`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
