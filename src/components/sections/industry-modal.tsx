"use client";

import { useState } from "react";
import { X, Check } from "lucide-react";

const industryData = [
  { id: "real-estate", title: "Real Estate Developers", useCases: ["Tenant amenity apps", "Automated BMS", "Sub-metering"] },
  { id: "manufacturing", title: "Manufacturing Plants", useCases: ["Predictive machine monitoring", "Peak shaving", "Safety CCTV"] },
  { id: "healthcare", title: "Hospitals", useCases: ["Clean room air control", "Emergency backup telemetry", "Bio-access"] },
  { id: "education", title: "Campuses", useCases: ["Smart classrooms", "Campus-wide Wi-Fi", "Perimeter security"] },
];

export default function IndustryModalSection() {
  const [selected, setSelected] = useState<typeof industryData[0] | null>(null);

  return (
    <section id="industries" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0072CE] uppercase tracking-widest">Tailored Use Cases</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B132B] mt-2">Industries We Serve</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryData.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setSelected(ind)}
              className="p-6 rounded-2xl bg-white border border-slate-200 text-left hover:border-[#0072CE] shadow-sm transition-all"
            >
              <h3 className="font-bold text-[#0B132B] text-lg">{ind.title}</h3>
              <span className="text-xs text-[#0072CE] font-semibold mt-2 inline-block">View Use Cases →</span>
            </button>
          ))}
        </div>

        {/* Modal Overlay */}
        {selected && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full relative">
              <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-slate-400 hover:text-black">
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-2xl font-bold text-[#0B132B] mb-4">{selected.title}</h3>
              <p className="text-xs text-slate-500 mb-4">Core Smart Infrastructure Deployments:</p>
              <ul className="space-y-3">
                {selected.useCases.map((uc, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-[#2ECC71]" />
                    {uc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}