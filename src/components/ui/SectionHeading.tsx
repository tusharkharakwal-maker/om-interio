"use client";

import React from "react";
import { motion } from "framer-motion";
import { PalmDivider } from "./PalmMotif";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  showDivider?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  showDivider = true,
  className = "",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
    >
      {showDivider && <PalmDivider className="mb-6" />}
      <h2
        className={`font-fraunces text-section-mobile md:text-section font-semibold ${
          light ? "text-ivory" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-ivory/80" : "text-espresso/70"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
