"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Procedimentos", href: "#procedimentos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Biossegurança", href: "#biosseguranca" },
    { label: "Sobre a Profissional", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#060607]/85 backdrop-blur-xl border-b border-white/[0.06] py-3.5 shadow-2xl shadow-black/40"
            : "bg-transparent py-5 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="group flex items-center gap-2.5 transition-transform duration-200"
            >
              <div className="w-8 h-8 rounded-full border border-amber-400/30 flex items-center justify-center bg-amber-500/10 group-hover:border-amber-400/60 transition-colors">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.18em] uppercase font-semibold text-white group-hover:text-amber-200 transition-colors">
                  Jheny Piercer
                </span>
                <span className="text-[9px] tracking-[0.28em] uppercase text-amber-400/70 font-medium">
                  Body Piercing & Joalheria
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.15em] text-neutral-400 hover:text-amber-200 transition-colors duration-200 font-medium py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-300 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Pill Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppUrl("Olá, Jheny! Gostaria de agendar um horário para procedimento.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-amber-400/40 bg-amber-500/10 hover:bg-amber-400 hover:text-black text-amber-200 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-sm hover:shadow-amber-500/20 active:scale-95"
              >
                <span>Agendar Horário</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menu"
                className="md:hidden p-2 text-neutral-300 hover:text-white rounded-lg border border-white/10 bg-white/5"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif tracking-widest text-neutral-200 hover:text-amber-300 border-b border-white/5 pb-3 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <a
              href={getWhatsAppUrl("Olá, Jheny! Gostaria de agendar um horário para procedimento.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs tracking-widest uppercase shadow-lg shadow-amber-500/20"
            >
              Agendar Procedimento via WhatsApp
            </a>
            <p className="text-[11px] text-center text-neutral-500 tracking-wider uppercase">
              Rondonópolis - MT • Segunda a Domingo 09h às 18h
            </p>
          </div>
        </div>
      )}
    </>
  );
}
