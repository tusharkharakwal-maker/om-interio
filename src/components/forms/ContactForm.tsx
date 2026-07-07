"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schema";
import { SERVICES } from "@/lib/constants";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm({ className = "" }: { className?: string }) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const inputStyles =
    "w-full rounded-lg border border-brass/30 bg-ivory px-4 py-3 font-manrope text-espresso placeholder:text-espresso/40 transition-all duration-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 focus:outline-none";
  const errorStyles = "mt-1 text-sm text-red-600";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`space-y-5 ${className}`}
      noValidate
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-espresso">
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          placeholder="Your full name"
          className={inputStyles}
          {...register("name")}
        />
        {errors.name && <p className={errorStyles}>{errors.name.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-espresso">
          Phone Number *
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          className={inputStyles}
          {...register("phone")}
        />
        {errors.phone && <p className={errorStyles}>{errors.phone.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-espresso">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className={inputStyles}
          {...register("email")}
        />
        {errors.email && <p className={errorStyles}>{errors.email.message}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-espresso">
          Service Interested In *
        </label>
        <select
          id="service"
          className={`${inputStyles} cursor-pointer`}
          defaultValue=""
          {...register("service")}
        >
          <option value="" disabled>
            Select a service…
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other">Other / Not Sure</option>
        </select>
        {errors.service && (
          <p className={errorStyles}>{errors.service.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-espresso">
          Your Message *
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell us about your project…"
          className={`${inputStyles} resize-y`}
          {...register("message")}
        />
        {errors.message && (
          <p className={errorStyles}>{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitStatus === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-terracotta px-6 py-3.5 font-manrope font-semibold text-white shadow-md transition-all duration-300 hover:bg-terracotta/90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitStatus === "loading" ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Sending…
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>

      {/* Status messages */}
      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-lg bg-sage/20 px-4 py-3 text-sm text-sage"
          >
            <CheckCircle size={18} />
            Thank you! We&apos;ll get back to you within 24 hours.
          </motion.div>
        )}
        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600"
          >
            <AlertCircle size={18} />
            Something went wrong. Please try again or call us directly.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
