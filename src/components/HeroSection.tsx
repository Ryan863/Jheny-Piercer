"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, MessageCircle, Award, ShieldCheck, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#060607] pt-20 md:pt-24 pb-12">
      {/* Editorial Luxury Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] bg-gradient-to-b from-amber-600/10 via-amber-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-700/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle Luxury Grid Lines (Ultra Faint) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Vertical Decorative Sidebar Text (Editorial Luxora Touch) */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-10">
        <span className="text-[10px] tracking-[0.4em] uppercase text-neutral-500 -rotate-90 origin-center whitespace-nowrap">
          PRECISÃO &amp; BIOSSEGURANÇA
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-700 to-transparent" />
      </div>

      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 pointer-events-none z-10">
        <span className="text-[10px] tracking-[0.4em] uppercase text-amber-400/60 -rotate-90 origin-center whitespace-nowrap">
          RONDONÓPOLIS • MT
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-amber-500/40 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-20 space-y-6">
            
            {/* Top Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/25 bg-amber-500/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-amber-200">
                Studio Exclusivo • Desde 2019
              </span>
            </div>

            {/* Editorial Main Title */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-[-0.01em] text-white">
              A arte do body piercing com{" "}
              <span className="italic font-light text-gold-gradient">
                elegância, precisão
              </span>{" "}
              e biossegurança.
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-neutral-300/90 text-base sm:text-lg font-light leading-relaxed tracking-wide">
              Profissional premiada em Rondonópolis. Perfurações seguras em titânio grau implante, laserterapia e lobuloplastia sem corte.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl(
                  "Olá, Jheny! Gostaria de agendar um horário para avaliação/procedimento de piercing."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-black fill-black" />
                <span>Agendar Procedimento via WhatsApp</span>
              </a>

              <a
                href="#procedimentos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-amber-400/40 text-neutral-200 hover:text-white text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300"
              >
                <span>Explorar Serviços</span>
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-white/[0.08] w-full grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-amber-300 font-semibold">6x</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 mt-0.5">Premiada na Área</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-white font-semibold">+20</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 mt-0.5">Certificações</div>
              </div>
              <div>
                <div className="font-serif text-2xl sm:text-3xl text-amber-300 font-semibold">5.0 ★</div>
                <div className="text-[11px] uppercase tracking-wider text-neutral-400 mt-0.5">Google Reviews</div>
              </div>
            </div>

          </div>

          {/* Right Column: Seamless Editorial Portrait of Jheny (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
            {/* Ambient Aura behind portrait */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-amber-300/10 to-transparent rounded-full blur-3xl scale-95 pointer-events-none" />

            <div className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-[4/5] flex items-center justify-center">
              {/* Photo with Soft Radial and Bottom Gradient Mask (no hard borders!) */}
              <div className="relative w-full h-full overflow-hidden mask-radial-editorial mask-bottom-fade">
                <Image
                  src="/images/jheny-hero.png"
                  alt="Jheny Piercer - Body Piercer Profissional e Especialista em Joalheria de Alto Padrão"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover object-top scale-105 hover:scale-100 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Editorial Badge 1 (Top Right) */}
              <div className="absolute -top-2 -right-2 sm:right-0 bg-[#0d0d12]/90 backdrop-blur-md border border-amber-400/30 px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20">
                <div className="p-1.5 rounded-lg bg-amber-400/10 text-amber-300">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white tracking-wide">6x Premiada</div>
                  <div className="text-[9px] uppercase tracking-wider text-neutral-400">Referência Regional</div>
                </div>
              </div>

              {/* Floating Editorial Badge 2 (Bottom Left) */}
              <div className="absolute bottom-6 -left-2 sm:left-0 bg-[#0d0d12]/90 backdrop-blur-md border border-white/15 px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white tracking-wide">Biossegurança Total</div>
                  <div className="text-[9px] uppercase tracking-wider text-neutral-400">Autoclave &amp; Joias Estéreis</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Minimal Scroll Indicator */}
        <div className="pt-12 md:pt-16 flex flex-col items-center justify-center text-center">
          <a
            href="#procedimentos"
            className="group flex flex-col items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-neutral-400 hover:text-amber-300 transition-colors"
          >
            <span>Role para conhecer</span>
            <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-400/40 group-hover:translate-y-0.5 transition-all">
              <ArrowDown className="w-3 h-3 text-neutral-400 group-hover:text-amber-300" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
