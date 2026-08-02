"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { ArrowRight, ShieldCheck, Zap, Building2, Cpu } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#0B132B] text-white overflow-hidden">
      {/* Grid Pattern & Glow Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#0072CE]/30 to-[#00D2FF]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D2FF]/30 bg-[#0072CE]/10 text-[#00D2FF] text-xs sm:text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Cpu className="h-4 w-4" />
          <span>India's Pioneer AI-Powered Infrastructure Engine</span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-white max-w-5xl mx-auto"
        >
          Building India's AI-Powered <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D2FF] via-[#0072CE] to-white">
            Smart Infrastructure Platform
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed"
        >
          Helping businesses, builders, institutions, and industries modernise with AI, Smart Buildings, Solar Energy, IoT, Security, Enterprise Networking, and Intelligent Automation.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#0072CE] to-[#00D2FF] hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all flex items-center justify-center gap-2"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#solutions"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-slate-200 border border-white/20 hover:bg-white/10 transition-all text-center"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Floating Feature Badges */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
        >
          {[
            { icon: Building2, title: "Smart Buildings" },
            { icon: Zap, title: "Solar & EV Infrastructure" },
            { icon: ShieldCheck, title: "Enterprise Security" },
            { icon: Cpu, title: "AI Facility Automation" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3"
            >
              <item.icon className="h-6 w-6 text-[#00D2FF]" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200">{item.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}