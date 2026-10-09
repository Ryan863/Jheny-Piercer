"use client";

import React, { useState } from "react";
import { MessageCircle, X, Sparkles, Send } from "lucide-react";
import { getWhatsAppUrl, FORMATTED_PHONE } from "@/lib/utils";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    "Olá, Jheny! Gostaria de fazer uma perfuração nova na orelha.",
    "Olá! Quero saber sobre a Lobuloplastia sem corte.",
    "Olá! Preciso de Laserterapia cicatricial para minha perfuração.",
    "Olá! Gostaria de consultar modelos e valores de joias em titânio.",
  ];

  const handleSend = (msg: string) => {
    const url = getWhatsAppUrl(msg);
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <aside
      aria-label="Atendimento WhatsApp Jheny Piercer"
      className="fixed bottom-6 right-5 sm:right-7 z-50 flex flex-col items-end"
    >
      {/* Quick Action Popup Sheet */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[350px] rounded-3xl bg-[#0d0d12] border border-amber-400/30 p-5 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5 fill-emerald-400" />
              </div>
              <div>
                <h4 className="font-serif text-sm text-white font-medium">Jheny Piercer Oficial</h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Atendimento Rápido</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-300 font-light mt-3 mb-3">
            Escolha uma mensagem rápida para iniciar sua conversa com a profissional:
          </p>

          <div className="space-y-2">
            {quickMessages.map((msg, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(msg)}
                className="w-full text-left p-2.5 rounded-xl bg-white/[0.03] hover:bg-amber-400/10 hover:border-amber-400/40 border border-white/[0.06] text-[11px] text-neutral-200 hover:text-amber-200 transition-all flex items-center justify-between group"
              >
                <span className="line-clamp-1">{msg}</span>
                <Send className="w-3 h-3 text-neutral-500 group-hover:text-amber-300 shrink-0 ml-2" />
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/[0.06] text-center">
            <span className="text-[10px] text-neutral-500 uppercase tracking-wider">
              {FORMATTED_PHONE} • Rondonópolis - MT
            </span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        id="floating-whatsapp-btn"
        aria-label="Abrir WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-auto sm:px-5 sm:h-13 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-600/40 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-300/30"
      >
        {/* Pulsing Attention Ping */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-300 border-2 border-[#060607]" />
        </span>

        <MessageCircle className="w-6 h-6 fill-white stroke-none sm:mr-2.5" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wider uppercase text-white">
          Agendar no WhatsApp
        </span>
      </button>
    </aside>
  );
}
