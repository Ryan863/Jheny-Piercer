"use client";

import React from "react";
import { PROCEDURES } from "@/data/content";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function ProceduresSection() {
  const iconMap: Record<string, React.ReactNode> = {
    "perfuracoes-anatomicas": <Sparkles className="w-5 h-5 text-amber-300" />,
    "microdermal-surface": <Zap className="w-5 h-5 text-amber-300" />,
    "laserterapia": <Zap className="w-5 h-5 text-red-400" />,
    "lobuloplastia": <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="procedimentos" className="relative py-24 md:py-32 bg-[#060607]">
      {/* Background Decorative ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Editorial Style) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-500/5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-amber-300">
              Especialidades Clínicas &amp; Estéticas
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-tight">
            Procedimentos executados com{" "}
            <span className="italic font-light text-gold-gradient">
              precisão cirúrgica
            </span>{" "}
            e acabamento de joia.
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Da perfuração básica ao visagismo complexo, cada detalhe é planejado respeitando a anatomia individual e os mais rígidos protocolos de biossegurança.
          </p>
        </div>

        {/* Procedures Grid (Asymmetric Bento layout inspired by 21st-dev-patterns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROCEDURES.map((proc, idx) => (
            <SpotlightCard
              key={proc.id}
              className="flex flex-col justify-between group/card border-white/[0.08] hover:border-amber-400/40 transition-all duration-500"
            >
              <div>
                {/* Header Row: Tag & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300 font-medium">
                    {proc.tag}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover/card:border-amber-400/30 transition-colors">
                    {iconMap[proc.id] || <Sparkles className="w-5 h-5 text-amber-300" />}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover/card:text-amber-200 transition-colors font-medium mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-amber-400/80 mb-4 font-medium">
                  {proc.subtitle}
                </p>

                {/* Description */}
                <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                  {proc.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-2.5 mb-8 border-t border-white/[0.06] pt-4">
                  {proc.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="border-t border-white/[0.08] pt-5 mt-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                    Material / Padrão
                  </span>
                  <span className="text-xs text-neutral-200 font-medium">
                    {proc.materials}
                  </span>
                </div>

                <a
                  href={getWhatsAppUrl(
                    `Olá, Jheny! Gostaria de tirar dúvidas e agendar o procedimento de ${proc.title}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-amber-400/30 bg-amber-500/10 hover:bg-amber-400 hover:text-black text-amber-200 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 active:scale-95"
                >
                  <span>{proc.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Editorial Footnote Banner */}
        <div className="mt-12 p-6 rounded-2xl border border-white/[0.08] bg-[#0c0c10]/60 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-white">Não encontrou o que procurava ou tem dúvidas sobre anatomia?</h4>
              <p className="text-xs text-neutral-400 mt-0.5">Realizamos consultoria de visagismo gratuita via WhatsApp para avaliar a sua orelha antes de perfurar.</p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl("Olá, Jheny! Quero uma consultoria de visagismo da minha orelha.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-medium transition-colors text-center"
          >
            Fazer Consultoria
          </a>
        </div>

      </div>
    </section>
  );
}
