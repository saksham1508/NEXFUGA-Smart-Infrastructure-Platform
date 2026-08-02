import Link from "next/link";
import { Cpu, Linkedin, Youtube, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B132B] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 text-white font-bold text-2xl">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-[#0072CE] to-[#00D2FF] flex items-center justify-center text-white">
                <Cpu className="h-5 w-5" />
              </div>
              <span>
                NEX<span className="text-[#00D2FF]">FUGA</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Building India's AI-Powered Smart Infrastructure Platform. Transforming buildings, campuses, and industries into autonomous, energy-efficient environments.
            </p>
            <div className="flex gap-4 pt-2">
              {[Linkedin, Youtube, Instagram, Facebook].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#00D2FF] hover:border-[#00D2FF]/50 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Core Links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#solutions" className="hover:text-white">Smart Buildings</a></li>
              <li><a href="#solutions" className="hover:text-white">Smart Home</a></li>
              <li><a href="#solutions" className="hover:text-white">Solar Rooftops</a></li>
              <li><a href="#solutions" className="hover:text-white">EV Infrastructure</a></li>
              <li><a href="#solutions" className="hover:text-white">AI Automation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Industries</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#industries" className="hover:text-white">Real Estate</a></li>
              <li><a href="#industries" className="hover:text-white">Healthcare</a></li>
              <li><a href="#industries" className="hover:text-white">Manufacturing</a></li>
              <li><a href="#industries" className="hover:text-white">Education</a></li>
              <li><a href="#industries" className="hover:text-white">Government</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#why-us" className="hover:text-white">About Us</a></li>
              <li><a href="#projects" className="hover:text-white">Case Studies</a></li>
              <li><a href="#partners" className="hover:text-white">Partners</a></li>
              <li><a href="#contact" className="hover:text-white">Careers</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4">
          <p>© {new Date().getFullYear()} NEXFUGA Technologies India. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}