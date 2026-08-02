"use client";

import { Building, Stethoscope, Factory, Briefcase, GraduationCap, ShoppingBag, Landmark, Hotel } from "lucide-react";

const industries = [
  { name: "Real Estate", icon: Building },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Manufacturing", icon: Factory },
  { name: "Corporate", icon: Briefcase },
  { name: "Education", icon: GraduationCap },
  { name: "Retail Chains", icon: ShoppingBag },
  { name: "Government", icon: Landmark },
  { name: "Hospitality", icon: Hotel },
];

export default function TrustedIndustries() {
  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          Trusted Across India's Key Enterprise Sectors
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex flex-col items-center text-center gap-2 hover:border-[#0072CE]/30 transition-colors"
            >
              <ind.icon className="h-6 w-6 text-[#0072CE]" />
              <span className="text-xs font-semibold text-[#0B132B]">{ind.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}