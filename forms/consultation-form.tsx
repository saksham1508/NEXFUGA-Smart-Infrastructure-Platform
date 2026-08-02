'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 4 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  companyName: z.string().min(1, { message: 'Company name is required.' }),
  phone: z.string().min(10, { message: 'Enter a valid 10-digit phone number.' }),
  serviceInterest: z.enum(['Solar', 'CCTV & Security', 'Building Automation', 'Enterprise IT', 'Consulting']),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ConsultationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { serviceInterest: 'Building Automation' },
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call to backend
    await new Promise((resolve) => setTimeout(resolve, 1200));
    console.log('Consultation Request:', data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl bg-emerald-50 p-8 text-center text-emerald-900 border border-emerald-200">
        <h3 className="text-xl font-bold">Request Received!</h3>
        <p className="mt-2 text-sm">An infrastructure specialist from NEXFUGA will get in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-md">
      <div>
        <label className="block text-sm font-medium text-slate-700">Full Name</label>
        <input
          {...register('fullName')}
          className="mt-1 w-full rounded-md border border-slate-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="John Doe"
        />
        {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Work Email</label>
          <input
            {...register('email')}
            type="email"
            className="mt-1 w-full rounded-md border border-slate-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="john@company.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700">Phone Number</label>
          <input
            {...register('phone')}
            className="mt-1 w-full rounded-md border border-slate-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="+91 9876543210"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Company Name</label>
        <input
          {...register('companyName')}
          className="mt-1 w-full rounded-md border border-slate-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Enterprise Corp"
        />
        {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Primary Infrastructure Needs</label>
        <select
          {...register('serviceInterest')}
          className="mt-1 w-full rounded-md border border-slate-300 p-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
        >
          <option value="Building Automation">Building Automation (BMS)</option>
          <option value="Solar">Commercial Solar & Energy</option>
          <option value="CCTV & Security">CCTV & Access Control</option>
          <option value="Enterprise IT">Networking & Structured Cabling</option>
          <option value="Consulting">Digital Transformation / AI</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Request Consultation'}
      </button>
    </form>
  );
}