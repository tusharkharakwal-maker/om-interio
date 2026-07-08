import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SHREE OM DESIGN AND CONSTRUCTION — our story, values, and approach to crafting warm, elegant interiors in Ranchi, Jharkhand.",
  openGraph: {
    title: "About SHREE OM DESIGN AND CONSTRUCTION",
    description:
      "Our story, values, and approach to crafting warm, elegant interiors in Ranchi.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
