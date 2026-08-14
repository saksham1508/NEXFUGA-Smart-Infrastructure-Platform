'use server'

import { db } from '@/lib/db'
import { auditRequests } from '@/lib/db/schema'

export type AuditInput = {
  name: string
  email: string
  company: string
  phone?: string
  need: string
  message: string
}

export type AuditResult =
  | { ok: true }
  | { ok: false; error: string }

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitAudit(input: AuditInput): Promise<AuditResult> {
  // Server-side validation — never trust the client.
  const name = input.name?.trim() ?? ''
  const email = input.email?.trim() ?? ''
  const company = input.company?.trim() ?? ''
  const phone = input.phone?.trim() ?? ''
  const need = input.need?.trim() ?? ''
  const message = input.message?.trim() ?? ''

  if (!name || name.length > 120) return { ok: false, error: 'Invalid name.' }
  if (!EMAIL_RE.test(email) || email.length > 200)
    return { ok: false, error: 'Invalid email address.' }
  if (!company || company.length > 160)
    return { ok: false, error: 'Invalid company.' }
  if (phone && phone.length > 40)
    return { ok: false, error: 'Invalid phone number.' }
  if (!need || need.length > 120)
    return { ok: false, error: 'Please select an infrastructure need.' }
  if (message.length < 10 || message.length > 4000)
    return { ok: false, error: 'Message must be 10–4000 characters.' }

  try {
    await db.insert(auditRequests).values({
      name,
      email,
      company,
      phone: phone || null,
      need,
      message,
    })
    return { ok: true }
  } catch (err) {
    console.log('[v0] submitAudit error:', (err as Error).message)
    return { ok: false, error: 'Something went wrong. Please try again.' }
  }
}
