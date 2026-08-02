"use client";

import { solutionsData } from "@/config/solutions";
import { ArrowUpRight, Building2, Home, Sun, Zap, Shield, Network, Cpu, Bot, Layers, Activity, Compass } from "lucide-react";

const iconMap: Record<string, any> = {
  Building2, Home, Sun, Zap, Shield, Network, Cpu, Bot, Layers, Activity, Compass
};

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0072CE] uppercase tracking-widest">End-to-End Capabilities</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] mt-2">Comprehensive Smart Solutions</h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Modular technology stacks built for resilience, continuous monitoring, and maximum energy savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((item) => {
            const IconComponent = iconMap[item.iconName] || Building2;
            return (
              <div
                key={item.id}
                className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#0072CE]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center mb-6 group-hover:bg-[#0072CE] group-hover:text-white transition-colors">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0B132B] mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#2ECC71]">
                    {item.benefits}
                  </span>
                  <a href="#contact" className="text-[#0072CE] hover:translate-x-1 transition-transform">
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}