import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProceduresSection } from "@/components/ProceduresSection";
import { GallerySection } from "@/components/GallerySection";
import { AuthorityBiosafetySection } from "@/components/AuthorityBiosafetySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LocationHoursSection } from "@/components/LocationHoursSection";
import { InstagramSection } from "@/components/InstagramSection";
import { BookingTriageSection } from "@/components/BookingTriageSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060607] text-[#ebe7df] relative selection:bg-amber-400/30 selection:text-white">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Hero Section (100vh Clean Editorial) */}
      <HeroSection />

      {/* Procedures & Specialties Bento Grid */}
      <ProceduresSection />

      {/* High-Res Gallery of Real Ears & Titanium Jewelry */}
      <GallerySection />

      {/* Authority, Career Trajectory & Hospital Biosafety Protocol */}
      <AuthorityBiosafetySection />

      {/* Verified Google Reviews */}
      <TestimonialsSection />

      {/* Location, Studio Space & Opening Hours */}
      <LocationHoursSection />

      {/* Social Network & Instagram Portfolio Integration */}
      <InstagramSection />

      {/* Conversion Final Triage & WhatsApp Booking Dispatch */}
      <BookingTriageSection />

      {/* Editorial Footer */}
      <Footer />

      {/* Floating Sticky Conversion Action */}
      <FloatingWhatsApp />
    </main>
  );
}
