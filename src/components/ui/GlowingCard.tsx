"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowingCard({
  children,
  className = "",
  glowColor = "from-amber-500/20 via-yellow-600/10 to-transparent",
  ...props
}: GlowingCardProps) {
  return (
    <div
      className={cn(
        "group relative p-[1px] overflow-hidden rounded-2xl transition-all duration-300",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-40 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none",
          glowColor
        )}
      />
      <div className="relative h-full w-full bg-[#0d0d12] rounded-[15px] p-6 md:p-8 z-10 border border-white/5">
        {children}
      </div>
    </div>
  );
}
