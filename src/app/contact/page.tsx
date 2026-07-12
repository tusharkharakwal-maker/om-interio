import type { Metadata } from "next";
import { ContactPageContent } from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Designco interior for a free interior design consultation in Ranchi. Call, WhatsApp, or fill out our contact form.",
  openGraph: {
    title: "Contact Designco interior",
    description:
      "Book a free consultation — call, WhatsApp, or send us a message.",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
