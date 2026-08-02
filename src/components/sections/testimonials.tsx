"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "NEXFUGA transformed our commercial tower's energy management. Operating costs dropped by 28% within six months.",
    author: "Rohan Sharma",
    role: "VP Facilities",
    company: "Apex Commercial Estates",
  },
  {
    quote: "Their AI security and BMS integration gave us centralized visibility over our entire hospital network.",
    author: "Dr. Ananya Rao",
    role: "Director of Operations",
    company: "CarePulse Hospitals",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0B132B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-widest">Client Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-black mt-2">Trusted by Industry Leaders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-[#F4B400] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic mb-6">"{t.quote}"</p>
              </div>
              <div>
                <h4 className="font-bold text-white text-base">{t.author}</h4>
                <p className="text-xs text-slate-400">{t.role}, {t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}