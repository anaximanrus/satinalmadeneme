import * as z from 'zod';

export const supplierFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  authorizedPerson: z.string().min(2, 'Authorized person name must be at least 2 characters'),
  status: z.enum(['active', 'passive']),
});

export type SupplierFormValues = z.infer<typeof supplierFormSchema>;