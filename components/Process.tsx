'use client';

const steps = [
  { step: '01', title: 'Consultation', desc: 'Understanding operational requirements & site goals.' },
  { step: '02', title: 'Site Assessment', desc: 'Comprehensive audit of energy, security, & network infra.' },
  { step: '03', title: 'Solution Design', desc: 'Tailored architectural blueprint with ROI projection.' },
  { step: '04', title: 'Implementation', desc: 'System integration, installation, & live commissioning.' },
  { step: '05', title: 'Support & Optimization', desc: '24/7 SLA monitoring & continuous AI fine-tuning.' },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#0B132B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-[#00D2FF] mb-3">
            Execution Roadmap
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold">How We Deliver Excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => (
            <div key={idx} className="relative p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-4xl font-black text-[#00D2FF]/40 block mb-4">{item.step}</span>
                <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}