import type { Metadata } from "next";
import { ServicesPageContent } from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Designco interior's interior design services — appliance selection, bathroom design, bedroom design, cabinetry, wardrobes, commercial interiors, and custom art.",
  openGraph: {
    title: "Interior Design Services — Designco interior",
    description:
      "Full-service interior design: bedrooms, bathrooms, kitchens, wardrobes, commercial spaces, and more.",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
