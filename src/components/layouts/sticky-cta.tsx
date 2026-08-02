"use client";

import { MessageCircle, Calendar } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Trigger */}
      <a
        href="https://wa.me/918000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="h-12 w-12 rounded-full bg-[#2ECC71] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Quick Booking Floating Trigger */}
      <a
        href="#contact"
        aria-label="Book Consultation"
        className="h-12 w-12 rounded-full bg-[#0072CE] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Calendar className="h-6 w-6" />
      </a>
    </div>
  );
}