import * as z from 'zod';

export const categoryFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  parentId: z.string().nullable(),
  status: z.enum(['active', 'passive']),
});

export type CategoryFormValues = z.infer<typeof categoryFormSchema>;