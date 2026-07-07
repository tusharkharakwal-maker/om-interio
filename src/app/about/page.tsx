import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Seven Palm Interio — our story, values, and approach to crafting warm, elegant interiors in Ranchi, Jharkhand.",
  openGraph: {
    title: "About Seven Palm Interio",
    description:
      "Our story, values, and approach to crafting warm, elegant interiors in Ranchi.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
