'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Cpu } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B132B]/90 backdrop-blur-md shadow-xl py-4 border-b border-white/10 text-white'
          : 'bg-transparent py-6 text-[#0B132B]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-[#0072CE] to-[#00D2FF] flex items-center justify-center text-white shadow-md">
            <Cpu className="h-5 w-5" />
          </div>
          <span className={isScrolled ? 'text-white' : 'text-[#0B132B]'}>
            NEX<span className="text-[#0072CE]">FUGA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {['Solutions', 'Industries', 'Why NEXFUGA', 'Process', 'Projects', 'Partners'].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className={`transition-colors hover:text-[#0072CE] ${
                  isScrolled ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0072CE] to-[#00D2FF] hover:opacity-95 shadow-lg shadow-[#0072CE]/20 transition-all hover:scale-[1.02]"
          >
            Book Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B132B] text-white px-4 pt-4 pb-6 border-b border-white/10 space-y-4">
          {['Solutions', 'Industries', 'Why NEXFUGA', 'Process', 'Projects', 'Partners'].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-slate-300 hover:text-white"
              >
                {item}
              </a>
            )
          )}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center block px-5 py-3 rounded-xl text-sm font-semibold text-white bg-[#0072CE]"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}