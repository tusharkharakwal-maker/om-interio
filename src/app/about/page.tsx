import type { Metadata } from "next";
import { AboutClient } from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Designco interior — our story, values, and approach to crafting warm, elegant interiors in Ranchi, Jharkhand.",
  openGraph: {
    title: "About Designco interior",
    description:
      "Our story, values, and approach to crafting warm, elegant interiors in Ranchi.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
