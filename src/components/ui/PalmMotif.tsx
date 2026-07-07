"use client";

import React from "react";

/**
 * Minimal single-line palm-frond SVG motif.
 * Used as section divider, watermark, and brand element.
 */
export function PalmMotif({
  className = "",
  size = 48,
  color = "currentColor",
  opacity = 0.15,
}: {
  className?: string;
  size?: number;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Main stem */}
      <path
        d="M32 58 C32 58 32 32 32 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Left fronds */}
      <path
        d="M32 18 C26 14 18 10 10 12 C18 14 24 18 32 22"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 26 C26 22 16 18 8 22 C16 22 24 26 32 30"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 34 C28 32 20 28 14 32 C20 32 26 34 32 38"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Right fronds */}
      <path
        d="M32 18 C38 14 46 10 54 12 C46 14 40 18 32 22"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 26 C38 22 48 18 56 22 C48 22 40 26 32 30"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M32 34 C36 32 44 28 50 32 C44 32 38 34 32 38"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Top frond (upward) */}
      <path
        d="M32 12 C30 6 28 2 32 0 C36 2 34 6 32 12"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

/**
 * Horizontal divider using the palm motif
 */
export function PalmDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px w-16 bg-brass/30" />
      <PalmMotif size={32} color="#B08D57" opacity={0.4} />
      <div className="h-px w-16 bg-brass/30" />
    </div>
  );
}
