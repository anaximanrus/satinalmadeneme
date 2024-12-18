import * as z from 'zod';

export const siteFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  status: z.enum(['active', 'passive']),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
  manager: z.string().min(2, 'Manager name must be at least 2 characters'),
  contactEmail: z.string().email('Invalid email address'),
  contactPhone: z.string().min(10, 'Phone number must be at least 10 characters'),
});

export type SiteFormValues = z.infer<typeof siteFormSchema>;