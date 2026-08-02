"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";

export default function ExitIntentDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exit_shown")) {
        setOpen(true);
        sessionStorage.setItem("exit_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0B132B] text-white rounded-3xl p-8 max-w-lg w-full relative border border-white/10 shadow-2xl">
        <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-white">
          <X className="h-6 w-6" />
        </button>

        <div className="h-12 w-12 rounded-2xl bg-[#00D2FF]/10 text-[#00D2FF] flex items-center justify-center mb-6">
          <Sparkles className="h-6 w-6" />
        </div>

        <h3 className="text-2xl font-bold mb-2">Before You Leave...</h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          Get a personalized Smart Infrastructure Audit & Energy Saving Assessment for your facility, free of charge.
        </p>

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="block text-center py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#0072CE] to-[#00D2FF]"
        >
          Claim Free Infrastructure Audit
        </a>
      </div>
    </div>
  );
}