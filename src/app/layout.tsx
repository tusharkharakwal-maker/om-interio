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
    default: "Seven Palm Interio — Interior Design in Ranchi",
    template: "%s | Seven Palm Interio",
  },
  description:
    "Seven Palm Interio crafts warm, elegant interior spaces in Ranchi, Jharkhand. From bedroom and bathroom design to commercial interiors — book a free consultation today.",
  keywords: [
    "interior design",
    "interior designer Ranchi",
    "home design Jharkhand",
    "Seven Palm Interio",
    "bedroom design",
    "bathroom design",
    "commercial interiors",
    "wardrobe design",
    "Ranchi",
  ],
  openGraph: {
    title: "Seven Palm Interio — Interior Design in Ranchi",
    description:
      "Crafting warm, elegant interiors that transform houses into homes. Based in Ranchi, serving Jharkhand and beyond.",
    url: "https://sevenpalm.in",
    siteName: "Seven Palm Interio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven Palm Interio — Interior Design in Ranchi",
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
  name: "Seven Palm Interio",
  description:
    "Interior design company specialising in residential and commercial spaces in Ranchi, Jharkhand.",
  url: "https://sevenpalm.in",
  telephone: "+918521888983",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Fun Cinema, Kilburn Colony, Shivpuri, Hinoo",
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
