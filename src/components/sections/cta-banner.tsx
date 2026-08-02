"use client";

import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0072CE] to-[#00D2FF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6">
          Ready to Transform Your Infrastructure?
        </h2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/90 mb-8">
          Join leading developers, industries, and enterprises across India in adopting intelligent, AI-driven automation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-[#0B132B] bg-white hover:bg-slate-100 shadow-xl transition-all flex items-center justify-center gap-2"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white border border-white/40 hover:bg-white/10 transition-all text-center"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
}