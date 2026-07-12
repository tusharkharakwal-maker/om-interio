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
    default: "Designco interior — Interior Design in Ranchi",
    template: "%s | Designco interior",
  },
  description:
    "Designco interior crafts warm, elegant interior spaces in Ranchi, Jharkhand. From bedroom and bathroom design to commercial interiors — book a free consultation today.",
  keywords: [
    "interior design",
    "interior designer Ranchi",
    "home design Jharkhand",
    "Designco interior",
    "bedroom design",
    "bathroom design",
    "commercial interiors",
    "wardrobe design",
    "Ranchi",
  ],
  openGraph: {
    title: "Designco interior — Interior Design in Ranchi",
    description:
      "Crafting warm, elegant interiors that transform houses into homes. Based in Ranchi, serving Jharkhand and beyond.",
    url: "https://sevenpalm.in",
    siteName: "Designco interior",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Designco interior — Interior Design in Ranchi",
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
  name: "Designco interior",
  description:
    "Interior design company specialising in residential and commercial spaces in Ranchi, Jharkhand.",
  url: "https://sevenpalm.in",
  telephone: "+917631111171",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Digambar Jain Bhawan, Harmu Road Near, Dwarka Path",
    addressLocality: "Ranchi",
    addressRegion: "Jharkhand",
    postalCode: "834001",
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
