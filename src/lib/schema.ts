import * as z from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  phone: z.string().min(10, "Please enter a valid mobile number"),
  organization: z.string().min(2, "Organization name is required"),
  solution: z.string().min(1, "Please select a solution"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;