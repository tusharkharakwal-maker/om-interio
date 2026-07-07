"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function OurProcess() {
  return (
    <section className="bg-ivory py-20 md:py-28" aria-label="Our process">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHeading
          title="How We Work"
          subtitle="A clear, collaborative process that takes your project from first conversation to final reveal."
        />

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden md:block">
          <div className="relative mt-16">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-terracotta/20 via-brass/40 to-terracotta/20" />

            <div className="grid grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-brass/40 bg-ivory font-fraunces text-xl font-bold text-terracotta shadow-md">
                    {step.step}
                  </div>
                  <h3 className="mt-6 font-fraunces text-lg font-semibold text-espresso">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso/60">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden">
          <div className="relative mt-8">
            {/* Vertical line */}
            <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-gradient-to-b from-terracotta/20 via-brass/40 to-terracotta/20" />

            <div className="space-y-10">
              {PROCESS_STEPS.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Step circle */}
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-brass/40 bg-ivory font-fraunces text-xl font-bold text-terracotta shadow-md">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-fraunces text-lg font-semibold text-espresso">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-espresso/60">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
