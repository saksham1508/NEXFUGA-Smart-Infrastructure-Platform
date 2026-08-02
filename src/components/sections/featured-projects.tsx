"use client";

const projects = [
  {
    title: "Commercial HQ Tower",
    type: "Corporate Office",
    problem: "Rising power tariffs and disjointed BMS controls across 24 floors.",
    solution: "Integrated NEXFUGA AI BMS, automated HVAC sensors, & solar rooftops.",
    outcome: "32% energy reduction & carbon footprint compliance in 12 months.",
  },
  {
    title: "Apex Super-Specialty Hospital",
    type: "Healthcare",
    problem: "Strict air pressure requirements and critical power monitoring needs.",
    solution: "Smart IoT environmental telemetry & redundant backup monitoring.",
    outcome: "100% SLA uptime achieved across surgery centers.",
  },
  {
    title: "Industrial Logistics Park",
    type: "Warehouse & Factory",
    problem: "Security blind spots and high night-time utility overhead.",
    solution: "AI perimeter CCTV surveillance and dynamic automated LED grids.",
    outcome: "Zero security breaches and 40% reduction in lighting draw.",
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#0072CE] uppercase tracking-widest">Case Studies</span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] mt-2">Proven Impact Across India</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#0072CE] uppercase tracking-wider">{p.type}</span>
                <h3 className="text-xl font-bold text-[#0B132B] mt-1 mb-6">{p.title}</h3>
                
                <div className="space-y-4 text-xs leading-relaxed">
                  <div>
                    <strong className="text-slate-800 block">Problem:</strong>
                    <span className="text-slate-600">{p.problem}</span>
                  </div>
                  <div>
                    <strong className="text-slate-800 block">Solution:</strong>
                    <span className="text-slate-600">{p.solution}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-[#2ECC71]">Outcome: {p.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}