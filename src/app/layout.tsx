import type { Metadata } from "next";
import { Fraunces, Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SHREE OM DESIGN AND CONSTRUCTION — Interior Design in Ranchi",
    template: "%s | SHREE OM DESIGN AND CONSTRUCTION",
  },
  description:
    "SHREE OM DESIGN AND CONSTRUCTION crafts warm, elegant interior spaces in Ranchi, Jharkhand. From bedroom and bathroom design to commercial interiors — book a free consultation today.",
  keywords: [
    "interior design",
    "interior designer Ranchi",
    "home design Jharkhand",
    "SHREE OM DESIGN AND CONSTRUCTION",
    "bedroom design",
    "bathroom design",
    "commercial interiors",
    "wardrobe design",
    "Ranchi",
  ],
  openGraph: {
    title: "SHREE OM DESIGN AND CONSTRUCTION — Interior Design in Ranchi",
    description:
      "Crafting warm, elegant interiors that transform houses into homes. Based in Ranchi, serving Jharkhand and beyond.",
    url: "https://sevenpalm.in",
    siteName: "SHREE OM DESIGN AND CONSTRUCTION",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SHREE OM DESIGN AND CONSTRUCTION — Interior Design in Ranchi",
    description:
      "Crafting warm, elegant interiors that transform houses into homes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD LocalBusiness structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SHREE OM DESIGN AND CONSTRUCTION",
  description:
    "Interior design company specialising in residential and commercial spaces in Ranchi, Jharkhand.",
  url: "https://sevenpalm.in",
  telephone: "+917061130724",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New Pipra, Bandi Oraon Chowk, Chetan Toli Rd, near Ayurvedic Jain Store, Harmu",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    postalCode: "834002",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.3441",
    longitude: "85.3096",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  image: "https://sevenpalm.in/og-image.jpg",
  priceRange: "$$",
  "@id": "https://sevenpalm.in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ivory font-manrope text-espresso antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
