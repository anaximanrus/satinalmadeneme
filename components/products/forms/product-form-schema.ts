import * as z from 'zod';

export const productFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  sku: z.string().min(3, 'SKU must be at least 3 characters'),
  brandId: z.string().min(1, 'Brand is required'),
  categoryId: z.string().min(1, 'Category is required'),
  status: z.enum(['active', 'passive']),
  unit: z.string().min(1, 'Unit is required'),
});

export type ProductFormValues = z.infer<typeof productFormSchema>;