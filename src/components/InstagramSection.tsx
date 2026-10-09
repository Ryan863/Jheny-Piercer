"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/BrandIcons";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, FACEBOOK_URL } from "@/lib/utils";

export function InstagramSection() {
  return (
    <section className="relative py-20 bg-[#08080a] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-gradient-to-r from-[#0d0d12] via-[#121218] to-[#0d0d12] border border-amber-400/25 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Gold Flare */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-500/10">
                <InstagramIcon className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-amber-200">
                  Comunidade &amp; Bastidores
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal">
                Acompanhe atualizações diárias, novas joias e projetos em{" "}
                <span className="text-gold-gradient italic">{INSTAGRAM_HANDLE}</span>
              </h3>

              <p className="text-neutral-400 text-sm max-w-2xl font-light leading-relaxed">
                Postagens diárias de projetos cicatrizados, lançamentos exclusivos de peças em titânio e ouro 18k, e vídeos explicativos sobre autocuidado e cicatrização.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs uppercase tracking-widest shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Seguir no Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-neutral-300 hover:text-white text-xs uppercase tracking-widest transition-colors font-medium text-center"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
                <span>Página no Facebook</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
