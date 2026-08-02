"use client";

import { ShieldCheck, Award, Cpu, Zap, Headphones, BarChart3, Lock, Globe } from "lucide-react";

const stats = [
  { label: "Industry Expertise", desc: "10+ years driving domain-specific automation.", icon: Award },
  { label: "End-to-End Delivery", desc: "Consulting to installation & maintenance.", icon: Cpu },
  { label: "Enterprise Security", desc: "ISO & cyber security protocol compliant.", icon: Lock },
  { label: "Certified Partners", desc: "Global OEM alliances (Siemens, Cisco).", icon: ShieldCheck },
  { label: "Scalable Architecture", desc: "Modular designs from single buildings to cities.", icon: Globe },
  { label: "AI Driven Efficiency", desc: "Autonomous ML energy optimization engines.", icon: BarChart3 },
  { label: "Energy Savings", desc: "Up to 35% reduction in electricity spend.", icon: Zap },
  { label: "Nationwide Support", desc: "24/7 SLA engineering support pan-India.", icon: Headphones },
];

export default function WhyNexfuga() {
  return (
    <section id="why-us" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0072CE] uppercase tracking-widest">Why NEXFUGA</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] mt-2">Built for Excellence & Scale</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-[#0072CE]/30 transition-all">
              <item.icon className="h-8 w-8 text-[#0072CE] mb-4" />
              <h3 className="text-lg font-bold text-[#0B132B] mb-1">{item.label}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}