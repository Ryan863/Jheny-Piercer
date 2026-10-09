"use client";

import React from "react";
import { MapPin, Clock, Calendar, Navigation, ShieldCheck, Phone, Compass } from "lucide-react";
import { ADDRESS_TEXT, GOOGLE_MAPS_URL, FORMATTED_PHONE, OFFICIAL_PHONE, getWhatsAppUrl } from "@/lib/utils";

export function LocationHoursSection() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    ADDRESS_TEXT
  )}`;

  return (
    <section id="localizacao" className="relative py-24 md:py-32 bg-[#060607]">
      {/* Ambient background glow */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/25 bg-amber-500/10">
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-amber-200">
              Estúdio &amp; Atendimento
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal">
            Localização privilegiada e atendimento{" "}
            <span className="italic font-light text-gold-gradient">com hora marcada</span>.
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Ambiente reservado, 100% climatizado, planejado para oferecer discrição, conforto e biossegurança máxima.
          </p>
        </div>

        {/* Location & Schedule Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Left Card: Address & Action (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0c0c11] border border-white/[0.08] p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/25 flex items-center justify-center shrink-0 text-amber-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400/80 font-medium block">
                    Endereço Oficial
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mt-1">
                    Jheny Piercer Studio
                  </h3>
                  <p className="text-neutral-300 text-sm mt-2 leading-relaxed font-light">
                    {ADDRESS_TEXT}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">
                    Rondonópolis - MT • CEP 78715-702
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/[0.06]">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2.5 text-xs text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ambiente privativo e esterilizado</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-2.5 text-xs text-neutral-300">
                  <Compass className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Fácil acesso e estacionamento</span>
                </div>
              </div>
            </div>

            {/* Direct Route Triggers */}
            <div className="pt-8 mt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-widest font-semibold border border-white/10 transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Traçar Rota no Google Maps</span>
              </a>

              <a
                href={getWhatsAppUrl("Olá! Gostaria de confirmar como chegar ao estúdio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-amber-400/30 text-amber-200 hover:bg-amber-400 hover:text-black text-xs uppercase tracking-widest font-medium transition-all"
              >
                <span>Dúvidas de Localização</span>
              </a>
            </div>
          </div>

          {/* Right Card: Hours & Booking Rules (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0c0c11] border border-white/[0.08] p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-medium">Horário de Funcionamento</h4>
                  <p className="text-[10px] uppercase tracking-wider text-amber-400/70">Atendimento Exclusivo</p>
                </div>
              </div>

              {/* Schedule Table */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">Segunda a Sexta</span>
                  <span className="text-amber-200 font-semibold tracking-wide">09:00 às 18:00</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-neutral-300 font-medium">Sábado e Domingo</span>
                  <span className="text-amber-200 font-semibold tracking-wide">09:00 às 18:00</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/25 space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <Calendar className="w-4 h-4" />
                  <span>Apenas com Agendamento Prévio</span>
                </div>
                <p className="text-[11px] text-neutral-300 font-light leading-relaxed">
                  Para garantir a esterilização individual dos instrumentos e dedicar 100% da atenção ao seu procedimento, os atendimentos são realizados exclusivamente com hora marcada.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={getWhatsAppUrl("Olá, Jheny! Gostaria de consultar os horários disponíveis para agendamento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs uppercase tracking-widest text-center shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all block"
              >
                Consultar Horários Disponíveis
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
