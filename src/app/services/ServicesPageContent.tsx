"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Refrigerator,
  Bath,
  Bed,
  DoorOpen,
  Shirt,
  Building2,
  Palette,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/sections/CTABand";

const iconMap: Record<string, React.ElementType> = {
  Refrigerator,
  Bath,
  Bed,
  DoorOpen,
  Shirt,
  Building2,
  Palette,
};

export function ServicesPageContent() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-charcoal pb-20 pt-32 md:pt-40">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-cormorant text-lg italic text-brass"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-fraunces text-hero-mobile font-bold text-ivory md:text-hero"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-ivory/70"
          >
            Comprehensive interior design services tailored to your space,
            style, and budget.
          </motion.p>
        </div>
      </section>

      {/* Service Detail Sections */}
      {SERVICES.map((service, index) => {
        const Icon = iconMap[service.icon] || Palette;
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-20 md:py-24 ${
              isEven ? "bg-ivory" : "bg-sand"
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={isEven ? "" : "lg:col-start-2"}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    {/* TODO: replace with real project photos */}
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-terracotta/10 text-terracotta">
                    <Icon size={28} />
                  </div>
                  <h2 className="font-fraunces text-section-mobile font-semibold text-espresso md:text-section">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-espresso/75">
                    {service.longDesc}
                  </p>
                  <Button href="/contact" className="mt-8" variant="primary">
                    Enquire About This Service
                    <ArrowRight size={18} />
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      <CTABand />
    </>
  );
}
