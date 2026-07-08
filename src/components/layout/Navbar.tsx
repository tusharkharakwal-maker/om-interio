"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";
import { PalmMotif } from "@/components/ui/PalmMotif";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-ivory/90 shadow-md backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <PalmMotif
              size={28}
              color={scrolled ? "#B08D57" : "#B08D57"}
              opacity={0.9}
            />
            <span
              className={`font-fraunces text-xl font-semibold transition-colors duration-300 ${
                scrolled ? "text-espresso" : "text-white"
              }`}
            >
              Shree Om<span className="text-brass"> Design</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative font-manrope text-sm font-medium tracking-wide transition-colors duration-200 ${
                    scrolled
                      ? pathname === link.href
                        ? "text-terracotta"
                        : "text-espresso hover:text-terracotta"
                      : pathname === link.href
                      ? "text-brass"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Underline draw animation */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-terracotta transition-all duration-300 ${
                      pathname === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={BUSINESS.telLink}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-espresso hover:text-terracotta"
                  : "text-white/90 hover:text-white"
              }`}
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <Phone size={16} />
              <span className="hidden xl:inline">{BUSINESS.phone}</span>
            </a>
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-sage/90 px-3.5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-sage"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={16} />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`relative z-[60] rounded-lg p-2 transition-colors lg:hidden ${
              scrolled || mobileOpen
                ? "text-espresso hover:bg-sand"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-charcoal/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-ivory shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-full flex-col px-6 pt-20">
                <ul className="space-y-1">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        className={`block rounded-lg px-4 py-3 font-manrope text-lg font-medium transition-colors ${
                          pathname === link.href
                            ? "bg-terracotta/10 text-terracotta"
                            : "text-espresso hover:bg-sand hover:text-terracotta"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-brass/20 pt-6">
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    href={BUSINESS.telLink}
                    className="flex items-center gap-3 rounded-lg px-4 py-3 text-espresso transition-colors hover:bg-sand"
                  >
                    <Phone size={20} className="text-terracotta" />
                    <span className="font-medium">{BUSINESS.phone}</span>
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    href={BUSINESS.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center gap-3 rounded-lg bg-sage px-4 py-3 text-white transition-colors hover:bg-sage/90"
                  >
                    <MessageCircle size={20} />
                    <span className="font-medium">Chat on WhatsApp</span>
                  </motion.a>
                </div>

                <div className="mt-auto pb-8">
                  <p className="text-xs text-espresso/50">
                    © {new Date().getFullYear()} {BUSINESS.name}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
