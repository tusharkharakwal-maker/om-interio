"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_IMAGES } from "@/lib/constants";
import { Lightbox } from "@/components/ui/Lightbox";
import { CTABand } from "@/components/sections/CTABand";

export function PortfolioPageContent() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(PORTFOLIO_IMAGES.map((img) => img.category)));
    return ["All", ...cats];
  }, []);

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return PORTFOLIO_IMAGES;
    return PORTFOLIO_IMAGES.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

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
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-fraunces text-hero-mobile font-bold text-ivory md:text-hero"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-ivory/70"
          >
            Every project is a collaboration — here are some of the spaces
            we&apos;ve had the privilege to design.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-terracotta text-white shadow-md"
                    : "bg-sand text-espresso/70 hover:bg-sand/80 hover:text-espresso"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="mb-4 break-inside-avoid"
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="group relative block w-full overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                  aria-label={`View ${image.alt}`}
                >
                  <div
                    className={`relative overflow-hidden rounded-xl ${
                      index % 4 === 0
                        ? "aspect-[3/4]"
                        : index % 4 === 1
                        ? "aspect-square"
                        : index % 4 === 2
                        ? "aspect-[4/3]"
                        : "aspect-[3/2]"
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
        </div>
      </section>

      <Lightbox
        images={filteredImages.map((img) => ({ src: img.src, alt: img.alt }))}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setCurrentIndex((prev) => (prev + 1) % filteredImages.length)
        }
        onPrev={() =>
          setCurrentIndex(
            (prev) =>
              (prev - 1 + filteredImages.length) % filteredImages.length
          )
        }
      />

      <CTABand />
    </>
  );
}
