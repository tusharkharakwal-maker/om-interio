"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ABOUT_IMAGES, BUSINESS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutPreview() {
  return (
    <section className="bg-ivory py-20 md:py-28" aria-label="About us preview">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              {/* TODO: replace with real company photo */}
              <Image
                src={ABOUT_IMAGES.main}
                alt="Shree Om Design workspace showcasing design materials and samples"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border-2 border-brass/20" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SectionHeading
              title="Who We Are"
              subtitle=""
              centered={false}
              showDivider={false}
            />
            <p className="text-lg leading-relaxed text-espresso/80">
              At <strong className="text-espresso">{BUSINESS.name}</strong>, we
              believe great design begins with listening. Founded in Ranchi, our
              team brings together creativity, craftsmanship, and a deep
              understanding of how people live in their spaces.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-espresso/80">
              Whether it&apos;s a cosy bedroom makeover or a full-scale commercial
              fit-out, we approach every project with the same care — as though
              we&apos;re designing for our own home.
            </p>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 font-manrope font-semibold text-terracotta transition-colors hover:text-terracotta/80"
            >
              Learn more about our story
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
