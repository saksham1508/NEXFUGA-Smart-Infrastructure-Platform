import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const auditRequests = pgTable('audit_requests', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  company: text('company').notNull(),
  phone: text('phone'),
  need: text('need'),
  message: text('message'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
})
