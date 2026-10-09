"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/content";
import { Sparkles, ZoomIn, X, Shield, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Todas as Obras" },
    { id: "visagismo", label: "Visagismo Auricular" },
    { id: "autoral", label: "Projetos Autorais" },
    { id: "gemas", label: "Gemas & Zircônias" },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "visagismo") return item.category.includes("Visagismo");
    if (activeFilter === "autoral") return item.category.includes("Personalizados");
    if (activeFilter === "gemas") return item.category.includes("Coloridas");
    return true;
  });

  return (
    <section id="galeria" className="relative py-24 md:py-32 bg-[#08080a] border-t border-b border-white/[0.05]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/25 bg-amber-500/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-amber-200">
                Portfólio Real de Atendimentos
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal">
              A harmonia perfeita entre{" "}
              <span className="italic text-gold-gradient font-light">anatomia e joalheria</span>.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-light">
              Trabalhos reais executados em estúdio com joias em titânio de grau implante ASTM F-136 e acabamento biocompatível.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === f.id
                    ? "bg-amber-400 text-black font-semibold shadow-md shadow-amber-500/20"
                    : "bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Luxora Luxury presentation) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#0e0e13] border border-white/[0.08] hover:border-amber-400/50 transition-all duration-500 flex flex-col"
            >
              {/* Image Frame with hover zoom */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Top Badge: Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-200 border border-amber-400/30">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon Hover Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-lg text-white group-hover:text-amber-200 transition-colors font-medium">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5 line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-amber-400/80 font-medium tracking-wide">
                    {item.metal}
                  </span>
                  <span className="text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                    Ver detalhes <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Work Assurance Notice */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-neutral-400 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
          <Shield className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            Fotografias autênticas de aplicações realizadas por Jheny no estúdio oficial em Rondonópolis. Sem edição que mascare a textura e saúde real da pele.
          </span>
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#0d0d12] border border-white/15 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Big Image preview */}
              <div className="md:col-span-7 relative aspect-square sm:aspect-[4/5] bg-black">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details & CTA */}
              <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-amber-300 font-semibold px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                    {selectedImage.category}
                  </span>
                  
                  <h3 className="font-serif text-2xl text-white font-medium mt-4">
                    {selectedImage.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-300 font-light mt-3 leading-relaxed">
                    {selectedImage.description}
                  </p>

                  <div className="mt-6 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                      Especificações da Joia
                    </span>
                    <span className="text-xs font-medium text-amber-200">
                      {selectedImage.metal}
                    </span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={getWhatsAppUrl(
                      `Olá, Jheny! Vi a foto do projeto "${selectedImage.title}" no seu site e gostaria de fazer algo parecido.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs uppercase tracking-widest text-center shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all block"
                  >
                    Quero Esse Projeto
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedImage(null)}
                    className="w-full py-2.5 text-xs text-neutral-400 hover:text-white uppercase tracking-wider transition-colors"
                  >
                    Fechar visualização
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
