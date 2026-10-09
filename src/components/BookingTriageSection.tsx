"use client";

import React, { useState } from "react";
import { MessageCircle, Sparkles, Check, ArrowRight, ShieldCheck, Heart } from "lucide-react";
import { getWhatsAppUrl, FORMATTED_PHONE } from "@/lib/utils";

export function BookingTriageSection() {
  const [selectedService, setSelectedService] = useState<string>("primeira-perfuracao");
  const [userName, setUserName] = useState<string>("");
  const [userNote, setUserNote] = useState<string>("");

  const options = [
    {
      id: "primeira-perfuracao",
      label: "Primeira Perfuração / Novo Furo",
      desc: "Orelha, nariz, cartilagem com joia em titânio F-136",
    },
    {
      id: "lobuloplastia",
      label: "Lobuloplastia Sem Corte",
      desc: "Fechamento de lóbulo rasgado ou alargado",
    },
    {
      id: "laserterapia",
      label: "Laserterapia Cicatricial",
      desc: "Aceleração de cicatrização, alívio de dor ou granuloma",
    },
    {
      id: "troca-joia",
      label: "Troca / Upgrade de Joia",
      desc: "Atualização para joalheria nobre esterilizada",
    },
    {
      id: "microdermal",
      label: "Microdermal ou Surface",
      desc: "Ancoragem estética com base biocompatível",
    },
  ];

  const handleBooking = () => {
    const selectedObj = options.find((o) => o.id === selectedService);
    const serviceName = selectedObj?.label || "Procedimento Geral";
    
    let msg = `Olá, Jheny! Gostaria de agendar um horário para: *${serviceName}*.`;
    if (userName.trim()) {
      msg = `Olá, Jheny! Me chamo ${userName.trim()} e gostaria de agendar um horário para: *${serviceName}*.`;
    }
    if (userNote.trim()) {
      msg += ` Detalhe adicional: ${userNote.trim()}.`;
    }

    const url = getWhatsAppUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="agendamento" className="relative py-24 md:py-32 bg-[#060607]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/25 bg-amber-500/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-amber-200">
              Triagem Rápida &amp; Agendamento
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal">
            Pronto para transformar sua orelha com{" "}
            <span className="italic font-light text-gold-gradient">segurança total</span>?
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light">
            Selecione o procedimento desejado abaixo para abrir sua conversa direta no WhatsApp com a profissional.
          </p>
        </div>

        {/* Triage Interactive Box */}
        <div className="rounded-3xl bg-[#0c0c11] border border-amber-400/30 p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Options Grid */}
          <div>
            <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium block mb-4">
              1. Selecione o Procedimento de Interesse:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {options.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setSelectedService(opt.id)}
                  className={`cursor-pointer rounded-2xl p-4 border transition-all duration-300 flex items-start gap-3.5 ${
                    selectedService === opt.id
                      ? "bg-amber-400/10 border-amber-400/60 shadow-lg shadow-amber-500/10"
                      : "bg-white/[0.02] border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      selectedService === opt.id
                        ? "border-amber-400 bg-amber-400 text-black"
                        : "border-neutral-600 bg-transparent"
                    }`}
                  >
                    {selectedService === opt.id && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{opt.label}</div>
                    <div className="text-xs text-neutral-400 mt-0.5 font-light">{opt.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium block mb-2">
                Seu Nome (Opcional):
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Ex: Beatriz Lima"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400/50 transition-colors"
              />
            </div>

            <div>
              <label className="text-xs uppercase tracking-wider text-neutral-400 font-medium block mb-2">
                Dúvida ou Observação (Opcional):
              </label>
              <input
                type="text"
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="Ex: Já tenho a joia / Tenho medo de dor"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400/50 transition-colors"
              />
            </div>
          </div>

          {/* Submit Trigger */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-neutral-400 text-center sm:text-left">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Atendimento humanizado, sem julgamento e com horário exclusivo</span>
            </div>

            <button
              type="button"
              onClick={handleBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-black fill-black" />
              <span>Prosseguir no WhatsApp ({FORMATTED_PHONE})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
