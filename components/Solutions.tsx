'use client';

import {
  Building,
  Home,
  Sun,
  Zap,
  Shield,
  Network,
  Cpu,
  Bot,
  Layers,
  Activity,
  Compass,
  ArrowUpRight,
} from 'lucide-react';

const solutions = [
  {
    icon: Building,
    title: 'Smart Buildings',
    desc: 'Autonomous HVAC, lighting, and occupancy analytics for enterprise spaces.',
    benefits: 'Up to 30% reduction in operational energy spend.',
  },
  {
    icon: Home,
    title: 'Smart Home Automation',
    desc: 'Integrated control platforms for premium residences and developments.',
    benefits: 'Centralized touch, voice, and scene customization.',
  },
  {
    icon: Sun,
    title: 'Solar Rooftop Solutions',
    desc: 'Turnkey photovoltaic installation and grid synchronization.',
    benefits: 'Lower carbon footprint and long-term utility savings.',
  },
  {
    icon: Zap,
    title: 'EV Charging Infrastructure',
    desc: 'Fast DC/AC charger installations for commercial fleets and hubs.',
    benefits: 'Load-balanced dynamic charging capabilities.',
  },
  {
    icon: Shield,
    title: 'CCTV & Smart Security',
    desc: 'AI-driven video analytics, perimeter surveillance, and access control.',
    benefits: 'Real-time threat detection and facial recognition.',
  },
  {
    icon: Network,
    title: 'Enterprise Networking',
    desc: 'High-availability Wi-Fi 6, fiber optics, and structured cabling.',
    benefits: 'Zero-downtime backbone for critical operations.',
  },
  {
    icon: Layers,
    title: 'Building Management (BMS)',
    desc: 'Unified centralized monitoring for plant gear and facilities.',
    benefits: 'Predictive fault diagnosis and life-safety integration.',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    desc: 'Process automation engines tailored for facility asset management.',
    benefits: 'Automates routine operational routines seamlessly.',
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    desc: 'Sensor networks measuring air quality, telemetry, and water usage.',
    benefits: 'Granular asset data visualized in real time.',
  },
  {
    icon: Activity,
    title: 'Energy Management',
    desc: 'Real-time power monitoring and peak shaving analytics.',
    benefits: 'Optimizes peak demand tariff impacts.',
  },
  {
    icon: Compass,
    title: 'Digital Transformation',
    desc: 'End-to-end modern technology roadmap consulting.',
    benefits: 'Future-proof legacy facilities step-by-step.',
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-[#0072CE] mb-3">
            Integrated Expertise
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-[#0B132B]">
            Comprehensive Smart Solutions
          </p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Deploy scalable technology modules built for reliability, efficiency, and intelligence across your entire facility lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#0072CE]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-14 w-14 rounded-2xl bg-[#0072CE]/10 text-[#0072CE] flex items-center justify-center mb-6 group-hover:bg-[#0072CE] group-hover:text-white transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0B132B] mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-emerald-600 block mb-3">
                  Key Benefit: {item.benefits}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0072CE] group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}