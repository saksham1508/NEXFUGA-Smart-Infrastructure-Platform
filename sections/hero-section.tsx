'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Shield, Zap, Cpu } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400">
            <Cpu className="h-4 w-4" /> Next-Gen Smart Facilities
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Powering Modern Enterprise <span className="text-blue-500">Infrastructure</span>
          </h1>
          <p className="text-lg text-slate-400">
            Unifying Solar Systems, Building Automation, Enterprise Networking, CCTV, and AI Optimization under one intelligent umbrella.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button variant="primary" className="h-12 px-8 text-base">Explore Solutions</Button>
            <Button variant="outline" className="h-12 px-8 text-base border-slate-700 text-white hover:bg-slate-800">Book Audit</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}