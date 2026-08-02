'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const formSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Enter a valid mobile number'),
  organization: z.string().min(2, 'Organization name required'),
  solution: z.string().nonempty('Please select a solution'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // API Call integration placeholder
    console.log('Lead Submitted:', data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800/90 p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Schedule a personalized consultation with our smart system architects.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold">Thank You!</h3>
              <p className="text-slate-300">
                Your consultation request has been received. Our team will get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Full Name *</label>
                  <input
                    {...register('fullName')}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#00D2FF]"
                    placeholder="John Doe"
                  />
                  {errors.fullName && <span className="text-xs text-rose-400 mt-1">{errors.fullName.message}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Work Email *</label>
                  <input
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#00D2FF]"
                    placeholder="john@company.com"
                  />
                  {errors.email && <span className="text-xs text-rose-400 mt-1">{errors.email.message}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Phone Number *</label>
                  <input
                    {...register('phone')}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#00D2FF]"
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && <span className="text-xs text-rose-400 mt-1">{errors.phone.message}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">Organization *</label>
                  <input
                    {...register('organization')}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#00D2FF]"
                    placeholder="Company Name / Property"
                  />
                  {errors.organization && <span className="text-xs text-rose-400 mt-1">{errors.organization.message}</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Primary Solution of Interest *</label>
                <select
                  {...register('solution')}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#00D2FF]"
                >
                  <option value="">Select a solution</option>
                  <option value="Smart Buildings">Smart Buildings / BMS</option>
                  <option value="Solar & EV">Solar & EV Infrastructure</option>
                  <option value="Smart Security">CCTV & Enterprise Security</option>
                  <option value="IoT & AI">AI Automation & IoT</option>
                  <option value="Other">Full Infrastructure Audit</option>
                </select>
                {errors.solution && <span className="text-xs text-rose-400 mt-1">{errors.solution.message}</span>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">Project Brief (Optional)</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#00D2FF]"
                  placeholder="Tell us about your site scale, timeline, or key objectives..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#0072CE] to-[#00D2FF] hover:opacity-95 shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}