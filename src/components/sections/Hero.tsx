"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PalmMotif } from "@/components/ui/PalmMotif";
import { BUSINESS, HERO_IMAGE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Image with slow zoom */}
      <div className="absolute inset-0 animate-zoom-slow">
        {/* TODO: replace with real hero image */}
        <Image
          src={HERO_IMAGE}
          alt="Beautifully designed interior living room"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          unoptimized
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />

      {/* Faint palm watermark */}
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2">
        <PalmMotif size={280} color="#B08D57" opacity={0.05} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 font-cormorant text-lg italic tracking-wide text-brass md:text-xl"
        >
          Welcome to {BUSINESS.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-fraunces text-hero-mobile font-bold leading-tight text-white md:text-hero"
        >
          Designing Interiors
          <br />
          That Feel Like{" "}
          <span className="text-brass">Home</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/80 md:text-xl"
        >
          We craft warm, elegant spaces that reflect your personality —
          thoughtfully designed, beautifully executed, right here in Ranchi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" size="lg" variant="primary">
            Book a Free Consultation
          </Button>
          <Button href="/portfolio" size="lg" variant="secondary" className="border-white/60 text-white hover:bg-white hover:text-espresso">
            View Our Work
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-ivory/50">
            Scroll
          </span>
          <div className="h-8 w-5 rounded-full border-2 border-ivory/30 p-0.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-brass"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
