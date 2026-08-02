"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Cpu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Industries", href: "#industries" },
    { label: "Projects", href: "#projects" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B132B]/90 backdrop-blur-md shadow-lg py-4 border-b border-white/10 text-white"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-2xl tracking-tight">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-[#0072CE] to-[#00D2FF] flex items-center justify-center text-white shadow-md">
            <Cpu className="h-5 w-5" />
          </div>
          <span>
            NEX<span className="text-[#00D2FF]">FUGA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-[#00D2FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0072CE] to-[#00D2FF] hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all transform hover:-translate-y-0.5"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B132B] px-4 pt-4 pb-6 border-b border-white/10 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-[#00D2FF]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full block text-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0072CE] to-[#00D2FF]"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}