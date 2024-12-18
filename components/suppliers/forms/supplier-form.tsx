'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Supplier } from '@/types/supplier';
import { createSupplier, updateSupplier } from '@/lib/suppliers';
import { SupplierFormFields } from './supplier-form-fields';
import { supplierFormSchema, type SupplierFormValues } from './supplier-form-schema';

interface SupplierFormProps {
  initialData?: Supplier;
}

export function SupplierForm({ initialData }: SupplierFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  
  const form = useForm<SupplierFormValues>({
    resolver: zodResolver(supplierFormSchema),
    defaultValues: initialData || {
      status: 'active',
    },
  });

  async function onSubmit(values: SupplierFormValues) {
    try {
      if (initialData) {
        await updateSupplier(initialData.id, values);
        toast({
          title: 'Success',
          description: 'Supplier updated successfully',
        });
      } else {
        await createSupplier(values);
        toast({
          title: 'Success',
          description: 'Supplier created successfully',
        });
      }
      router.push('/suppliers');
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
        <SupplierFormFields form={form} />
        <div className="flex gap-4">
          <Button type="submit">
            {initialData ? 'Update Supplier' : 'Create Supplier'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/suppliers')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}