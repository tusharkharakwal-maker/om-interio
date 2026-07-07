"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export function CTABand() {
  return (
    <section className="relative bg-charcoal py-16 md:py-20" aria-label="Call to action">
      {/* Thin brass accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />

      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="font-fraunces text-section-mobile font-bold text-ivory md:text-section"
        >
          Ready to Transform{" "}
          <span className="text-brass">Your Space?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-xl text-lg text-ivory/70"
        >
          Let&apos;s start with a free consultation. Share your vision and we&apos;ll
          bring it to life — one room at a time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" size="lg" variant="primary">
            Get a Free Quote
          </Button>
          <Button
            href={BUSINESS.telLink}
            size="lg"
            variant="secondary"
            className="border-ivory/40 text-ivory hover:bg-ivory hover:text-espresso"
          >
            <Phone size={18} />
            Call Us
          </Button>
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-sage px-6 py-3.5 font-manrope text-lg font-semibold text-white transition-all duration-300 hover:bg-sage/90 hover:shadow-lg"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Bottom brass accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/50 to-transparent" />
    </section>
  );
}
