import type { Metadata } from "next";
import { PortfolioPageContent } from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse SHREE OM DESIGN AND CONSTRUCTION's portfolio of interior design projects — living rooms, bedrooms, bathrooms, kitchens, commercial spaces, and more.",
  openGraph: {
    title: "Portfolio — SHREE OM DESIGN AND CONSTRUCTION",
    description: "Explore our latest interior design projects in Ranchi and beyond.",
  },
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
