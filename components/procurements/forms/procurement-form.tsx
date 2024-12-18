'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Procurement } from '@/types/procurement';
import { createProcurement, updateProcurement } from '@/lib/procurements';
import { ProcurementFormFields } from './procurement-form-fields';
import { procurementFormSchema, type ProcurementFormValues } from '@/types/procurement-form';

interface ProcurementFormProps {
  initialData?: Procurement;
}

export function ProcurementForm({ initialData }: ProcurementFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  
  const form = useForm<ProcurementFormValues>({
    resolver: zodResolver(procurementFormSchema),
    defaultValues: initialData ? {
      ...initialData,
      startDate: new Date(initialData.startDate),
      endDate: new Date(initialData.endDate),
    } : {
      status: 'in_process',
      products: [{ productId: '', quantity: 1, unit: '' }],
    },
  });

  async function onSubmit(values: ProcurementFormValues) {
    try {
      if (initialData) {
        await updateProcurement(initialData.id, values);
        toast({
          title: 'Success',
          description: 'Procurement updated successfully',
        });
      } else {
        await createProcurement(values);
        toast({
          title: 'Success',
          description: 'Procurement created successfully',
        });
      }
      router.push('/procurements');
      router.refresh();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong',
        variant: 'destructive',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <ProcurementFormFields form={form} />
        <div className="flex gap-4">
          <Button type="submit">
            {initialData ? 'Update Procurement' : 'Create Procurement'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/procurements')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}