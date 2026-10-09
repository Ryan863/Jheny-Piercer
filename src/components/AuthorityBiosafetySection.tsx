"use client";

import React from "react";
import Image from "next/image";
import { BIOSAFETY_PILLARS } from "@/data/content";
import { Award, ShieldCheck, Heart, Sparkles, Check, CheckCircle2 } from "lucide-react";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { getWhatsAppUrl } from "@/lib/utils";

export function AuthorityBiosafetySection() {
  return (
    <section id="biosseguranca" className="relative py-24 md:py-32 bg-[#060607]">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PARTE 1: SOBRE A PROFISSIONAL & AUTORIDADE */}
        <div id="sobre" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-28 scroll-mt-28">
          
          {/* Portrait with soft editorial glow and badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden bg-[#0c0c10] border border-amber-400/20 shadow-2xl">
              <Image
                src="/images/jheny-hero.png"
                alt="Jheny Piercer - Body Piercer Premiada"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060607] via-transparent to-transparent opacity-70" />
              
              {/* Bottom tag */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-semibold uppercase tracking-widest">
                  <Award className="w-4 h-4" />
                  <span>Jheny • Body Piercer</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-0.5">
                  Atuando desde 2019 • Especialista em Visagismo &amp; Lobuloplastia
                </p>
              </div>
            </div>
          </div>

          {/* Bio & Differentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/25 bg-amber-500/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-amber-200">
                Sobre a Profissional
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight">
              Perfuração segura, estética refinada e joias que{" "}
              <span className="italic font-light text-gold-gradient">
                valorizam a sua essência
              </span>.
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              Com trajetória consolidada desde 2019 em Rondonópolis, Jheny construiu sua reputação com base em três pilares inegociáveis: <strong>cuidado humanizado</strong>, <strong>biossegurança de nível hospitalar</strong> e <strong>respeito absoluto à sua anatomia</strong>.
            </p>

            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Cada cliente recebe atendimento individualizado com hora marcada, sem pressa, com explicações didáticas em todas as etapas — desde a escolha da joia até as orientações de pós-procedimento. Aqui, você encontra um ambiente acolhedor, profissional e com zero julgamento.
            </p>

            {/* Badges Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-amber-300 font-serif text-xl font-bold">6x Premiada</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Reconhecimento do setor</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-white font-serif text-xl font-bold">+20 Cursos</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Certificações técnicas</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] col-span-2 sm:col-span-1">
                <div className="text-amber-300 font-serif text-xl font-bold">6 Anos</div>
                <div className="text-[10px] text-neutral-400 uppercase tracking-wider mt-0.5">Desde 2019 em MT</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Olá, Jheny! Gostaria de conversar com você sobre um procedimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300 hover:text-amber-200 font-semibold border-b border-amber-400/40 pb-1 transition-colors"
              >
                <span>Falar Diretamente com a Jheny via WhatsApp</span>
                <span className="text-base">→</span>
              </a>
            </div>

          </div>
        </div>

        {/* PARTE 2: PROTOCOLO DE BIOSSEGURANÇA (DIFERENCIAL CRÍTICO) */}
        <div className="border-t border-white/[0.08] pt-20">
          
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-emerald-300">
                Padrão Cirúrgico Rigoroso
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal">
              Biossegurança sem concessões: sua saúde{" "}
              <span className="italic font-light text-gold-gradient">em primeiro lugar</span>.
            </h3>

            <p className="text-neutral-400 text-sm sm:text-base font-light">
              Diferente de estúdios comuns, no espaço Jheny Piercer a assepsia segue protocolos hospitalares. Veja como protegemos você em cada etapa:
            </p>
          </div>

          {/* Biosafety Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BIOSAFETY_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.step}
                className="relative rounded-2xl bg-[#0c0c11] border border-white/[0.08] hover:border-amber-400/30 p-6 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-3xl text-amber-400/40 font-bold">
                      {pillar.step}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-amber-300/80 px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                      {pillar.tag}
                    </span>
                  </div>

                  <h4 className="font-serif text-xl text-white font-medium mb-2.5">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-[11px] text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Protocolo verificado e auditado</span>
                </div>
              </div>
            ))}

            {/* Special 6th Card: Compromisso com Você */}
            <GlowingCard className="md:col-span-2 lg:col-span-1">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-amber-300 font-semibold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    Garantia &amp; Pós-Procedimento
                  </span>
                  
                  <h4 className="font-serif text-xl text-white font-medium mt-3 mb-2">
                    Acompanhamento até a Cicatrização
                  </h4>

                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Nosso cuidado não termina quando você sai da maca. Você recebe guia de cuidados personalizado e canal direto via WhatsApp para tirar dúvidas a qualquer momento durante toda a cicatrização.
                  </p>
                </div>

                <a
                  href={getWhatsAppUrl("Olá! Gostaria de entender mais sobre o pós-procedimento e cuidados.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-widest transition-colors font-medium"
                >
                  Tirar Dúvidas com a Jheny
                </a>
              </div>
            </GlowingCard>
          </div>

        </div>

      </div>
    </section>
  );
}
