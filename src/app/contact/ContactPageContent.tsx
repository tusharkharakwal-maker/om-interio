"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactPageContent() {
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
            Let&apos;s Connect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 font-fraunces text-hero-mobile font-bold text-ivory md:text-hero"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg text-ivory/70"
          >
            Ready to start your interior design journey? We&apos;d love to hear
            from you.
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <h2 className="font-fraunces text-2xl font-semibold text-espresso">
                Send Us a Message
              </h2>
              <p className="mt-2 text-espresso/60">
                Fill out the form and we&apos;ll respond within 24 hours.
              </p>
              <ContactForm className="mt-8" />
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-2xl bg-sand p-8">
                <h3 className="font-fraunces text-xl font-semibold text-espresso">
                  Contact Information
                </h3>

                <ul className="mt-6 space-y-5">
                  <li>
                    <a
                      href={BUSINESS.telLink}
                      className="group flex items-start gap-4 transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-terracotta/10 text-terracotta">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-espresso/50">
                          Phone
                        </p>
                        <p className="mt-0.5 font-medium text-espresso group-hover:text-terracotta">
                          {BUSINESS.phone}
                        </p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      href={BUSINESS.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 transition-colors"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sage/10 text-sage">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-espresso/50">
                          WhatsApp
                        </p>
                        <p className="mt-0.5 font-medium text-espresso group-hover:text-sage">
                          Chat with us
                        </p>
                      </div>
                    </a>
                  </li>

                  <li>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brass/10 text-brass">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-espresso/50">
                          Email
                        </p>
                        {/* TODO: replace with real email */}
                        <p className="mt-0.5 font-medium text-espresso">
                          abc@gmail.com
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-terracotta/10 text-terracotta">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-espresso/50">
                          Address
                        </p>
                        <p className="mt-0.5 text-sm leading-relaxed text-espresso">
                          {BUSINESS.address}
                        </p>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brass/10 text-brass">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-espresso/50">
                          Business Hours
                        </p>
                        <p className="mt-0.5 text-sm text-espresso">
                          {BUSINESS.hours}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="bg-sand py-16" aria-label="Our location">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeading
            title="Find Us"
            subtitle="Visit our studio in Ranchi — we'd love to meet you in person."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-4 overflow-hidden rounded-2xl shadow-lg"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.5!2d85.309!3d23.344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(BUSINESS.address)}!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin`}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Google Map showing ${BUSINESS.name} location`}
              className="w-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
