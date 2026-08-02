"use client";

import { useState } from "react";
import { faqsData } from "@/config/faqs";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#0072CE] uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B132B] mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, idx) => (
            <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left font-bold text-[#0B132B] flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`h-5 w-5 text-[#0072CE] transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}