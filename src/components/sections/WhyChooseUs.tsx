"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Fingerprint,
  Clock,
  Gem,
  BadgeIndianRupee,
  Layers,
  MapPin,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Fingerprint,
  Clock,
  Gem,
  BadgeIndianRupee,
  Layers,
  MapPin,
};

export function WhyChooseUs() {
  return (
    <section className="bg-sand py-20 md:py-28" aria-label="Why choose us">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Why Choose Shree Om"
          subtitle="We hold ourselves to the highest standards — here's what sets us apart."
        />

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Fingerprint;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-xl bg-ivory p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brass/10 text-brass transition-colors group-hover:bg-brass group-hover:text-white">
                  <Icon size={24} />
                </div>
                <h3 className="font-fraunces text-lg font-semibold text-espresso">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
