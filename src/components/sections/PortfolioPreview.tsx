"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_IMAGES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";

export function PortfolioPreview() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="bg-sand py-20 md:py-28" aria-label="Portfolio preview">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeading
          title="Our Recent Work"
          subtitle="A glimpse into the spaces we've transformed — each one a unique reflection of its owner."
        />

        {/* Masonry-style grid */}
        <div className="mt-4 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {PORTFOLIO_IMAGES.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="mb-4 break-inside-avoid"
            >
              <button
                onClick={() => openLightbox(index)}
                className="group relative block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                aria-label={`View ${image.alt}`}
              >
                <div
                  className={`relative overflow-hidden rounded-xl ${
                    index % 3 === 0
                      ? "aspect-[3/4]"
                      : index % 3 === 1
                      ? "aspect-square"
                      : "aspect-[4/3]"
                  }`}
                >
                  {/* TODO: replace with real project photos */}
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/40" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-terracotta/90 px-3 py-1 text-xs font-medium text-white">
                      {image.category}
                    </span>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* View full portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 font-manrope text-lg font-semibold text-terracotta transition-colors hover:text-terracotta/80"
          >
            View Full Portfolio
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      <Lightbox
        images={PORTFOLIO_IMAGES}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setCurrentIndex((prev) => (prev + 1) % PORTFOLIO_IMAGES.length)
        }
        onPrev={() =>
          setCurrentIndex(
            (prev) =>
              (prev - 1 + PORTFOLIO_IMAGES.length) % PORTFOLIO_IMAGES.length
          )
        }
      />
    </section>
  );
}
