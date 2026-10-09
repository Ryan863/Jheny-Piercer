"use client";

import React from "react";
import { TESTIMONIALS } from "@/data/content";
import { Star, Quote, CheckCircle, Sparkles } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-32 bg-[#08080a] border-t border-white/[0.06]">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/25 bg-amber-500/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-amber-200">
              Avaliações Verificadas no Google
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal">
            O que dizem os clientes que confiam em nosso{" "}
            <span className="italic font-light text-gold-gradient">cuidado</span>.
          </h2>

          {/* Rating Summary Banner */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white font-serif text-xl font-bold">5.0</span>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">
              • Nota Máxima no Google Avaliações
            </span>
          </div>
        </div>

        {/* Testimonials Grid (Luxora Editorial Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((dep, idx) => (
            <div
              key={dep.id}
              className="group relative rounded-2xl bg-[#0c0c11] border border-white/[0.08] hover:border-amber-400/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Top Row: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(dep.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-amber-400/30 group-hover:text-amber-400/60 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-neutral-300 text-sm leading-relaxed font-light italic">
                  &ldquo;{dep.quote}&rdquo;
                </p>
              </div>

              {/* Author & Verified Tag */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base text-white font-medium">
                    {dep.author}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400/70 font-medium">
                    {dep.badge || dep.role}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-neutral-400">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
