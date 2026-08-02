"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/schema";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // API logic integration point
    console.log("Form Data:", data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B132B] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 backdrop-blur-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-2">Book a Free Consultation</h2>
            <p className="text-slate-400 text-sm">Speak with an infrastructure system architect today.</p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="h-16 w-16 text-[#2ECC71] mx-auto" />
              <h3 className="text-2xl font-bold">Consultation Requested</h3>
              <p className="text-slate-300 text-sm">Our expert engineering team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Full Name *</label>
                  <input
                    {...register("fullName")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D2FF]"
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Work Email *</label>
                  <input
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D2FF]"
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Phone Number *</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D2FF]"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Organization *</label>
                  <input
                    {...register("organization")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D2FF]"
                    placeholder="Company or Facility Name"
                  />
                  {errors.organization && <p className="text-xs text-rose-400 mt-1">{errors.organization.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Primary Solution of Interest *</label>
                <select
                  {...register("solution")}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B132B] border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D2FF]"
                >
                  <option value="">Select a solution</option>
                  <option value="Smart Buildings">Smart Buildings / BMS</option>
                  <option value="Solar & EV">Solar & EV Infrastructure</option>
                  <option value="Smart Security">CCTV & Smart Security</option>
                  <option value="AI Automation">AI Automation & IoT</option>
                  <option value="Full Audit">Complete Site Audit</option>
                </select>
                {errors.solution && <p className="text-xs text-rose-400 mt-1">{errors.solution.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Project Message (Optional)</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#00D2FF]"
                  placeholder="Tell us about your facility scope or target timeline..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0072CE] to-[#00D2FF] hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitting ? "Submitting..." : "Schedule Consultation"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}