'use client'

import { useState, useTransition, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { submitAudit } from '@/app/actions/audit'
import {
  Sun,
  Cctv,
  Network,
  Building2,
  PlugZap,
  BrainCircuit,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Gauge,
  Activity,
  Leaf,
  Menu,
  X,
  Zap,
  Mail,
  Phone,
  MapPin,
  Check,
} from 'lucide-react'

const NAV_LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'AI & Automation', href: '#ai' },
  { label: 'Consulting', href: '#consulting' },
  { label: 'About', href: '#about' },
]

const SOLUTIONS = [
  {
    icon: Sun,
    title: 'Commercial Solar',
    desc: 'Rooftop and ground-mount PV systems engineered for maximum yield and rapid ROI across facilities.',
    metric: 'Payback in 3–5 yrs',
    features: [
      'Bifacial panels + string/central inverters',
      'Battery storage & peak-shaving',
      'Live generation & savings dashboards',
    ],
  },
  {
    icon: Building2,
    title: 'Building Automation (BMS)',
    desc: 'Unified HVAC, lighting, and energy controls that adapt in real time to occupancy and load.',
    metric: 'Up to 40% less energy',
    features: [
      'Occupancy & daylight-aware controls',
      'BACnet / Modbus device integration',
      'Fault detection & predictive scheduling',
    ],
  },
  {
    icon: Network,
    title: 'Networking & Cabling',
    desc: 'Enterprise-grade structured cabling and Wi-Fi 7 backbones built for zero downtime.',
    metric: '99.9% uptime',
    features: [
      'Cat6A / OM4 fiber structured cabling',
      'Wi-Fi 7 mesh & VLAN segmentation',
      'Redundant links with failover',
    ],
  },
  {
    icon: Cctv,
    title: 'AI CCTV Security',
    desc: 'Perimeter intelligence with real-time anomaly detection, LPR, and instant alerting.',
    metric: 'Sub-second alerts',
    features: [
      'Person, vehicle & license-plate recognition',
      'Behavioral anomaly detection',
      'Cloud + on-prem NVR redundancy',
    ],
  },
  {
    icon: PlugZap,
    title: 'EV Charging',
    desc: 'Scalable AC/DC charging infrastructure with load balancing and billing integration.',
    metric: '7kW–350kW ready',
    features: [
      'AC destination & DC fast charging',
      'Dynamic load balancing',
      'OCPP billing & access control',
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI Orchestration',
    desc: 'A single control plane that ties every system into one intelligent, self-optimizing platform.',
    metric: 'One control plane',
    features: [
      'Cross-system automation rules',
      'Unified analytics & reporting',
      'Self-optimizing energy & load logic',
    ],
  },
]

const STATS = [
  {
    icon: Leaf,
    value: 'Up to 40%',
    label: 'Energy Savings',
    desc: 'Solar + smart BMS cut operating costs from day one.',
  },
  {
    icon: Activity,
    value: '99.9%',
    label: 'Network Uptime',
    desc: 'Redundant, monitored infrastructure you can trust.',
  },
  {
    icon: ShieldCheck,
    value: '24/7',
    label: 'AI Perimeter Monitoring',
    desc: 'Autonomous threat detection that never sleeps.',
  },
  {
    icon: Gauge,
    value: '3-6x',
    label: 'Faster Deployment',
    desc: 'Pre-engineered stacks accelerate every rollout.',
  },
]

const NEEDS = [
  'Commercial Solar Systems',
  'Building Automation (BMS)',
  'Enterprise Networking & Cabling',
  'AI-based CCTV Security',
  'EV Charging Infrastructure',
  'Full Smart Infrastructure Audit',
]

type IconProps = { className?: string }

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.9 1.2h3.68l-8.04 9.19L24 22.8h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.2h7.6l5.24 6.93L18.9 1.2zm-1.29 19.4h2.04L6.48 3.3H4.3l13.31 17.3z" />
    </svg>
  )
}

function GitHubIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3z" />
    </svg>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 font-display ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
        <Zap className="h-4 w-4" aria-hidden />
      </span>
      <span className="text-lg font-bold tracking-tight">NEXFUGA</span>
    </span>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-navy-foreground">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy-foreground/70 transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-flex"
        >
          <Calendar className="h-4 w-4" aria-hidden />
          Book Audit
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-navy-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-navy px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-foreground/80 hover:bg-white/5 hover:text-cyan"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Book Audit
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-32 pb-24 text-navy-foreground"
    >
      {/* layered gradient backdrop */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(0,210,255,0.18), transparent 60%), radial-gradient(50% 50% at 10% 20%, rgba(0,114,206,0.22), transparent 55%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(70% 60% at 50% 20%, black, transparent 80%)',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Smart Infrastructure Platform
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            Next-gen infrastructure for the{' '}
            <span className="bg-gradient-to-r from-cyan to-primary bg-clip-text text-transparent">
              intelligent enterprise
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/70"
          >
            NEXFUGA unifies commercial solar, building automation, enterprise
            networking, AI security, and EV charging into one self-optimizing
            platform — so factories, facilities, and fast-scaling teams cut
            costs, downtime, and risk from a single pane of glass.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#solutions"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 sm:w-auto"
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:border-cyan hover:text-cyan sm:w-auto"
            >
              <Calendar className="h-4 w-4" aria-hidden />
              Schedule Audit
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Solutions() {
  return (
    <section id="solutions" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Core Pillars
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            One platform. Every smart system.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Six modular solutions that integrate seamlessly — start with the one
            you need today, then connect them all under a single intelligent
            control plane as you scale.
          </p>
        </div>

        <div id="ai" className="mt-14 grid scroll-mt-16 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s, i) => (
            <motion.article
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" aria-hidden />
                </div>
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                  {s.metric}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <span
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section
      id="consulting"
      className="scroll-mt-16 bg-navy py-24 text-navy-foreground"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan">
              Why NEXFUGA
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Measurable outcomes, not just installations.
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-navy-foreground/70">
              We engineer infrastructure around ROI. From energy independence to
              zero-downtime networks, every system is instrumented, monitored,
              and continuously optimized.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Vendor-neutral, standards-based design',
                'End-to-end consulting, build, and support',
                'Real-time dashboards for every deployment',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan/20 text-cyan">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  <span className="text-navy-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <s.icon className="h-6 w-6 text-cyan" aria-hidden />
                <p className="mt-4 font-display text-3xl font-bold tracking-tight">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-cyan">
                  {s.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/60">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

type FormState = {
  name: string
  email: string
  company: string
  phone: string
  need: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const EMPTY: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  need: '',
  message: '',
}

function LeadForm() {
  const [values, setValues] = useState<FormState>(EMPTY)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()

  const set =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setValues((v) => ({ ...v, [key]: e.target.value }))
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

  const validate = (v: FormState): FormErrors => {
    const next: FormErrors = {}
    if (!v.name.trim()) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
      next.email = 'Enter a valid work email.'
    if (!v.company.trim()) next.company = 'Company is required.'
    if (v.phone && !/^[+()\-\s\d]{7,}$/.test(v.phone))
      next.phone = 'Enter a valid phone number.'
    if (!v.need) next.need = 'Select your infrastructure need.'
    if (v.message.trim().length < 10)
      next.message = 'Tell us a bit more (10+ characters).'
    return next
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitError(null)
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length > 0) return

    startTransition(async () => {
      const res = await submitAudit({
        name: values.name,
        email: values.email,
        company: values.company,
        phone: values.phone,
        need: values.need,
        message: values.message,
      })
      if (res.ok) {
        setSubmitted(true)
        setValues(EMPTY)
      } else {
        setSubmitError(res.error)
      }
    })
  }

  const fieldBase =
    'w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

  return (
    <section id="contact" className="scroll-mt-16 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-navy/5">
          <div className="grid lg:grid-cols-[1fr_1.2fr]">
            {/* left promo panel */}
            <div className="relative hidden flex-col justify-between bg-navy p-10 text-navy-foreground lg:flex">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    'radial-gradient(60% 60% at 20% 10%, rgba(0,210,255,0.25), transparent 60%)',
                }}
                aria-hidden
              />
              <div className="relative">
                <Logo className="text-navy-foreground" />
                <h2 className="mt-8 text-balance font-display text-3xl font-bold leading-tight">
                  Book your free smart infrastructure audit.
                </h2>
                <p className="mt-4 text-pretty leading-relaxed text-navy-foreground/70">
                  Our engineers assess your facility and deliver a prioritized
                  roadmap — energy, security, networking, and automation in one
                  report.
                </p>
              </div>
              <ul className="relative mt-10 space-y-4 text-sm">
                {[
                  { icon: Mail, text: 'info@nexfuga.com' },
                  { icon: Phone, text: '+91 8839825442 9399234376' },
                  { icon: MapPin, text: 'Global delivery · On-site & remote' },
                ].map((c) => (
                  <li key={c.text} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-cyan">
                      <c.icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="text-navy-foreground/80">{c.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* form */}
            <div className="p-6 sm:p-10">
              {submitted ? (
                <div
                  className="flex h-full min-h-80 flex-col items-center justify-center text-center"
                  role="status"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold">
                    Request received
                  </h3>
                  <p className="mt-2 max-w-sm text-pretty text-muted-foreground">
                    Thanks — a NEXFUGA infrastructure specialist will reach out
                    within one business day to schedule your audit.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-primary hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <h3 className="font-display text-2xl font-bold tracking-tight">
                    Tell us about your project
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    All fields help us tailor your audit.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" error={errors.name} htmlFor="name">
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={set('name')}
                        placeholder="Jane Doe"
                        className={`${fieldBase} ${errors.name ? 'border-destructive' : 'border-input'}`}
                        aria-invalid={!!errors.name}
                      />
                    </Field>
                    <Field
                      label="Work email"
                      error={errors.email}
                      htmlFor="email"
                    >
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={set('email')}
                        placeholder="jane@company.com"
                        className={`${fieldBase} ${errors.email ? 'border-destructive' : 'border-input'}`}
                        aria-invalid={!!errors.email}
                      />
                    </Field>
                    <Field
                      label="Company"
                      error={errors.company}
                      htmlFor="company"
                    >
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        value={values.company}
                        onChange={set('company')}
                        placeholder="Acme Industries"
                        className={`${fieldBase} ${errors.company ? 'border-destructive' : 'border-input'}`}
                        aria-invalid={!!errors.company}
                      />
                    </Field>
                    <Field
                      label="Phone"
                      error={errors.phone}
                      htmlFor="phone"
                      optional
                    >
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={set('phone')}
                        placeholder="+1 (555) 000-0000"
                        className={`${fieldBase} ${errors.phone ? 'border-destructive' : 'border-input'}`}
                        aria-invalid={!!errors.phone}
                      />
                    </Field>
                  </div>

                  <div className="mt-4">
                    <Field
                      label="Infrastructure needs"
                      error={errors.need}
                      htmlFor="need"
                    >
                      <select
                        id="need"
                        value={values.need}
                        onChange={set('need')}
                        className={`${fieldBase} ${errors.need ? 'border-destructive' : 'border-input'}`}
                        aria-invalid={!!errors.need}
                      >
                        <option value="" disabled>
                          Select an option…
                        </option>
                        {NEEDS.map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="mt-4">
                    <Field
                      label="Message"
                      error={errors.message}
                      htmlFor="message"
                    >
                      <textarea
                        id="message"
                        rows={4}
                        value={values.message}
                        onChange={set('message')}
                        placeholder="Describe your facility, goals, and timeline…"
                        className={`${fieldBase} resize-none ${errors.message ? 'border-destructive' : 'border-input'}`}
                        aria-invalid={!!errors.message}
                      />
                    </Field>
                  </div>

                  {submitError && (
                    <p
                      className="mt-4 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
                      role="alert"
                    >
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={pending}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {pending ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        Request My Audit
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  optional?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground"
      >
        {label}
        {optional && (
          <span className="text-xs font-normal text-muted-foreground">
            (optional)
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function Footer() {
  return (
    <footer id="about" className="scroll-mt-16 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo className="text-navy-foreground" />
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/60">
              NEXFUGA is a smart infrastructure platform unifying solar,
              automation, networking, AI security, and EV charging for the
              modern enterprise.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: LinkedInIcon, label: 'LinkedIn' },
                { icon: TwitterIcon, label: 'Twitter' },
                { icon: GitHubIcon, label: 'GitHub' },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-navy-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <s.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-navy-foreground/50">
              Solutions
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {SOLUTIONS.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a
                    href="#solutions"
                    className="text-navy-foreground/70 transition-colors hover:text-cyan"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-navy-foreground/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan" aria-hidden />
                info@nexfuga.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan" aria-hidden />
                +91 8839825442 9399234376
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan" aria-hidden />
                Global delivery
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-navy-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} NEXFUGA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cyan">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-cyan">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Solutions />
      <Stats />
      <LeadForm />
      <Footer />
    </main>
  )
}
