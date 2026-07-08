"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Eye, Users, Award } from "lucide-react";
import { ABOUT_IMAGES, BUSINESS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABand } from "@/components/sections/CTABand";

const values = [
  {
    icon: Heart,
    title: "Passion for Design",
    description:
      "Every project excites us. We pour creativity and care into each space, no matter how large or small.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    description:
      "From grout colour to hinge placement — the smallest details make the biggest difference.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description:
      "Your vision leads the way. We listen, collaborate, and deliver spaces that feel truly yours.",
  },
  {
    icon: Award,
    title: "Craftsmanship",
    description:
      "We work with skilled artisans and premium materials to ensure lasting quality and beauty.",
  },
];

export function AboutClient() {
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
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-fraunces text-hero-mobile font-bold text-ivory md:text-hero"
          >
            Designing with Heart
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-ivory/70"
          >
            We&apos;re a Ranchi-based interior design studio that believes the best
            spaces tell a story — your story.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                {/* TODO: replace with real team photo */}
                <Image
                  src={ABOUT_IMAGES.team}
                  alt="The SHREE OM DESIGN AND CONSTRUCTION team collaborating on a design project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="font-fraunces text-section-mobile font-semibold text-espresso md:text-section">
                How It All Began
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-espresso/80">
                <p>
                  <strong className="text-espresso">{BUSINESS.name}</strong> was born
                  from a simple belief: that the spaces we inhabit shape how we
                  feel, think, and live. What started as a passion project in
                  Ranchi has grown into a full-service design studio trusted by
                  homeowners and businesses across Jharkhand.
                </p>
                <p>
                  Our name, Shree Om, reflects our commitment to bringing harmony,
                  balance, and positive energy into the spaces we build and design.
                  We aim to make every interior feel like an arrival —
                  a place where you truly belong.
                </p>
                <p>
                  With over eight years of experience and more than 150 projects
                  delivered, we&apos;ve honed a process that blends creative vision
                  with meticulous execution. Every material is hand-selected,
                  every detail considered, and every deadline honoured.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="What We Stand For"
            subtitle="The principles that guide every design decision we make."
          />

          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl bg-ivory p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <value.icon size={28} />
                </div>
                <h3 className="font-fraunces text-lg font-semibold text-espresso">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso/60">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workspace image */}
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[16/7] overflow-hidden rounded-2xl shadow-xl"
          >
            {/* TODO: replace with real workspace photo */}
            <Image
              src={ABOUT_IMAGES.workspace}
              alt="SHREE OM DESIGN AND CONSTRUCTION design studio workspace"
              fill
              className="object-cover"
              sizes="100vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
              <p className="font-cormorant text-xl italic text-ivory/90 md:text-2xl">
                &ldquo;Good design is not about what you see — it&apos;s about how a
                space makes you feel.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
