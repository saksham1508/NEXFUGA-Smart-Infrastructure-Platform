"use client";

const steps = [
  { num: "01", name: "Consultation", desc: "Discovery session to evaluate goals and site scope." },
  { num: "02", name: "Site Assessment", desc: "Comprehensive on-site physical and technical audit." },
  { num: "03", name: "Solution Design", desc: "Custom engineered blueprint with projected ROI." },
  { num: "04", name: "Implementation", desc: "Precision deployment, integration, and commissioning." },
  { num: "05", name: "Optimization", desc: "Ongoing SLA maintenance and continuous AI tuning." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#0B132B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#00D2FF] uppercase tracking-widest">Execution Methodology</span>
          <h2 className="text-3xl sm:text-5xl font-black mt-2">How We Transform Your Site</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 relative">
              <span className="text-4xl font-black text-[#00D2FF]/40 block mb-3">{s.num}</span>
              <h3 className="text-lg font-bold text-white mb-2">{s.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}