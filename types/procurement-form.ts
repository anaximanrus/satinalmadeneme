import { z } from 'zod';

export const procurementProductSchema = z.object({
  id: z.string().optional(),
  productId: z.string().min(1, 'Product is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  unit: z.string().min(1, 'Unit is required'),
  description: z.string().optional(),
});

export const procurementFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  siteId: z.string().min(1, 'Site is required'),
  startDate: z.date({
    required_error: 'Start date is required',
  }),
  endDate: z.date({
    required_error: 'End date is required',
  }).min(new Date(), 'End date must be in the future'),
  products: z.array(procurementProductSchema).min(1, 'At least one product is required'),
  status: z.enum(['approved', 'in_process', 'waiting_for_proposal', 'refused', 'canceled']),
});

export type ProcurementFormValues = z.infer<typeof procurementFormSchema>;
export type ProcurementProductFormValues = z.infer<typeof procurementProductSchema>;