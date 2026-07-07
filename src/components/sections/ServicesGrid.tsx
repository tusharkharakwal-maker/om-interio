"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Refrigerator,
  Bath,
  Bed,
  DoorOpen,
  Shirt,
  Building2,
  Palette,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  Refrigerator,
  Bath,
  Bed,
  DoorOpen,
  Shirt,
  Building2,
  Palette,
};

export function ServicesGrid() {
  return (
    <section className="bg-sand py-20 md:py-28" aria-label="Our services">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="From concept to completion, we cover every aspect of interior design to create spaces that are beautiful, functional, and uniquely yours."
        />

        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Palette;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="group block h-full rounded-xl border border-transparent bg-ivory p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-fraunces text-lg font-semibold text-espresso">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/60">
                    {service.shortDesc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
