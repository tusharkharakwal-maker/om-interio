"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  }, []);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  return (
    <section
      className="bg-ivory py-20 md:py-28"
      aria-label="Client testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real stories from homeowners and businesses who trusted us with their spaces."
        />

        {/* Carousel */}
        <div className="relative mt-8">
          <div className="overflow-hidden rounded-2xl bg-sand">
            <motion.div
              className="flex"
              style={{ width: `${TESTIMONIALS.length * 100}%` }}
              animate={{ x: `-${current * (100 / TESTIMONIALS.length)}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-8 md:p-12 text-center"
                  style={{ width: `${100 / TESTIMONIALS.length}%` }}
                >
                  {/* Stars */}
                  <div className="mb-6 flex items-center justify-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < testimonial.rating
                            ? "fill-brass text-brass"
                            : "text-brass/30"
                        }
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-cormorant text-xl italic leading-relaxed text-espresso md:text-2xl">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Name */}
                  <p className="mt-6 font-manrope text-sm font-semibold uppercase tracking-wider text-terracotta">
                    — {testimonial.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-ivory p-2 text-espresso shadow-md transition-all hover:bg-sand hover:shadow-lg md:-left-5"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-ivory p-2 text-espresso shadow-md transition-all hover:bg-sand hover:shadow-lg md:-right-5"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-terracotta"
                  : "w-2 bg-brass/30 hover:bg-brass/60"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
