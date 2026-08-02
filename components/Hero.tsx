'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Building2, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0B132B] text-white">
      {/* Background Animated Gradient Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d15_1px,transparent_1px),linear-gradient(to_bottom,#1f293d15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0072CE]/30 to-[#00D2FF]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00D2FF]/30 bg-[#0072CE]/10 text-[#00D2FF] text-xs sm:text-sm font-medium mb-8 backdrop-blur-md"
        >
          <Zap className="h-4 w-4 text-[#00D2FF]" />
          <span>Next-Generation Infrastructure Platform for India</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
        >
          Building India’s AI-Powered <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D2FF] via-[#0072CE] to-white">
            Smart Infrastructure
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 font-normal leading-relaxed"
        >
          Helping commercial enterprises, industries, real estate developers, and institutions modernise with AI, IoT, BMS, Solar Energy, Smart Security, and Autonomous Automation.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#0072CE] to-[#00D2FF] hover:shadow-[0_0_30px_rgba(0,210,255,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            Book Free Consultation
          </a>
          <a
            href="#solutions"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-slate-200 border border-white/20 hover:bg-white/10 transition-all"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Feature Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left"
        >
          {[
            { icon: Building2, label: 'Smart Buildings' },
            { icon: ShieldCheck, label: 'Enterprise Security' },
            { icon: Zap, label: 'Solar & EV Ready' },
            { icon: CheckCircle2, label: 'ISO Certified Infra' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-3"
            >
              <item.icon className="h-6 w-6 text-[#00D2FF]" />
              <span className="text-xs sm:text-sm font-medium text-slate-200">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}