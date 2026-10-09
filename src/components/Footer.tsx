"use client";

import React from "react";
import { Sparkles, MessageCircle, ShieldCheck, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/BrandIcons";
import {
  INSTAGRAM_URL,
  FACEBOOK_URL,
  getWhatsAppUrl,
  FORMATTED_PHONE,
  ADDRESS_TEXT,
} from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#040405] text-neutral-400 border-t border-white/[0.06] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.06]">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-amber-400/30 flex items-center justify-center bg-amber-500/10">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <span className="font-serif text-xl tracking-[0.18em] uppercase font-semibold text-white">
                  Jheny Piercer
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-amber-400/80 block font-medium">
                  Body Piercing &amp; Joalheria de Alto Padrão
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed font-light">
              Perfuração segura, estética refinada e joias que valorizam a sua essência. Cuidado humanizado, biossegurança rigorosa e zero julgamento. Desde 2019 em Rondonópolis - MT.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Jheny Piercer"
                className="w-9 h-9 rounded-full bg-white/[0.03] hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/40 flex items-center justify-center text-neutral-300 hover:text-amber-200 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Jheny Piercer"
                className="w-9 h-9 rounded-full bg-white/[0.03] hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/40 flex items-center justify-center text-neutral-300 hover:text-amber-200 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Oficial"
                className="w-9 h-9 rounded-full bg-white/[0.03] hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400/40 flex items-center justify-center text-neutral-300 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#procedimentos" className="hover:text-amber-300 transition-colors">
                  Procedimentos
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-300 transition-colors">
                  Galeria Real
                </a>
              </li>
              <li>
                <a href="#biosseguranca" className="hover:text-amber-300 transition-colors">
                  Biossegurança
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-amber-300 transition-colors">
                  Sobre a Profissional
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-amber-300 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-300 transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Specialities (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider font-semibold">
              Serviços
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Perfurações Auriculares</li>
              <li>Perfurações Faciais</li>
              <li>Microdermal &amp; Surface</li>
              <li>Laserterapia Cicatricial</li>
              <li>Lobuloplastia Sem Corte</li>
              <li>Joalheria em Titânio F-136</li>
            </ul>
          </div>

          {/* Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm text-white uppercase tracking-wider font-semibold">
              Atendimento
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-start gap-2 text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{ADDRESS_TEXT}</span>
              </p>
              <p className="text-neutral-400">
                <strong>Horário:</strong> Segunda a Domingo, 09h às 18h (Agendamento prévio)
              </p>
              <p className="text-neutral-400">
                <strong>WhatsApp:</strong> {FORMATTED_PHONE}
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-emerald-400 text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Ambiente Seguro com Esterilização em Autoclave</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} Jheny Piercer. Todos os direitos reservados. Rondonópolis - MT.</p>
          <div className="flex items-center gap-6">
            <span className="text-[11px] tracking-wider uppercase text-amber-400/80">
              Joalheria de Alto Padrão
            </span>
            <span className="text-[11px] tracking-wider uppercase text-neutral-400">
              Biossegurança Hospitalar
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
