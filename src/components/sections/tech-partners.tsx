"use client";

const partners = [
  "Cisco", "Schneider Electric", "Honeywell", "Siemens", 
  "Bosch", "Dell", "HP", "Lenovo", "Microsoft", "AWS", "Intel"
];

export default function TechPartners() {
  return (
    <section id="partners" className="py-16 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
          Technology & OEM Alliances
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner, idx) => (
            <span key={idx} className="text-base sm:text-xl font-black text-slate-700 tracking-tight">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}