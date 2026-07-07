"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { BUSINESS, NAV_LINKS, SERVICES } from "@/lib/constants";
import { PalmMotif } from "@/components/ui/PalmMotif";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80" role="contentinfo">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <PalmMotif size={24} color="#B08D57" opacity={0.8} />
              <span className="font-fraunces text-xl font-semibold text-ivory">
                Seven Palm<span className="text-brass"> Interio</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ivory/60">
              Crafting warm, elegant interiors that transform houses into homes.
              Based in Ranchi, serving clients across Jharkhand and beyond.
            </p>
            {/* Social icons — TODO: Replace with real social links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="rounded-full border border-brass/30 p-2 text-brass transition-colors hover:bg-brass/10"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className="rounded-full border border-brass/30 p-2 text-brass transition-colors hover:bg-brass/10"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-fraunces text-lg font-semibold text-ivory">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/60 transition-colors hover:text-terracotta"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-fraunces text-lg font-semibold text-ivory">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-ivory/60 transition-colors hover:text-terracotta"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-fraunces text-lg font-semibold text-ivory">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brass" />
                <span className="text-sm text-ivory/60">{BUSINESS.address}</span>
              </li>
              <li>
                <a
                  href={BUSINESS.telLink}
                  className="flex items-center gap-3 text-sm text-ivory/60 transition-colors hover:text-terracotta"
                >
                  <Phone size={18} className="shrink-0 text-brass" />
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-ivory/60 transition-colors hover:text-terracotta"
                >
                  <MessageCircle size={18} className="shrink-0 text-brass" />
                  WhatsApp Us
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-brass" />
                <span className="text-sm text-ivory/60">{BUSINESS.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brass/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row lg:px-8">
          <p className="text-xs text-ivory/40">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-ivory/40">
            Designed with care in Ranchi, Jharkhand
          </p>
        </div>
      </div>
    </footer>
  );
}
