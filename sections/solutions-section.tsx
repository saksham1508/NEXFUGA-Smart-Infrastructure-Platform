import { Zap, ShieldCheck, Wifi, Bot } from 'lucide-react';

const solutions = [
  {
    icon: Zap,
    title: 'Solar & Renewable Energy',
    description: 'On-grid, hybrid, and energy storage implementations designed to lower enterprise operational expenditure.',
  },
  {
    icon: ShieldCheck,
    title: 'Surveillance & Access Security',
    description: 'AI-driven IP CCTV monitoring, perimeter defense, and centralized biometric access control.',
  },
  {
    icon: Wifi,
    title: 'Enterprise Networking',
    description: 'Structured Cat6a/Fiber cabling, core switching, managed Wi-Fi 6, and secure VPN architectures.',
  },
  {
    icon: Bot,
    title: 'AI Facility Automation',
    description: 'IoT sensor deployment, predictive maintenance algorithms, and centralized BMS controls.',
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">End-to-End Infrastructure Capabilities</h2>
          <p className="mt-3 text-slate-600">Unified deployment and maintenance for scalable commercial operations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}