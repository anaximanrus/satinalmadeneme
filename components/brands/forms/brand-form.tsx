'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Brand } from '@/types/brand';
import { createBrand, updateBrand } from '@/lib/brands';
import { BrandFormFields } from './brand-form-fields';
import { brandFormSchema, type BrandFormValues } from './brand-form-schema';

interface BrandFormProps {
  initialData?: Brand;
}

export function BrandForm({ initialData }: BrandFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  
  const form = useForm<BrandFormValues>({
    resolver: zodResolver(brandFormSchema),
    defaultValues: initialData || {
      status: 'active',
    },
  });

  async function onSubmit(values: BrandFormValues) {
    try {
      if (initialData) {
        await updateBrand(initialData.id, values);
        toast({
          title: 'Success',
          description: 'Brand updated successfully',
        });
      } else {
        await createBrand(values);
        toast({
          title: 'Success',
          description: 'Brand created successfully',
        });
      }
      router.push('/brands');
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
        <BrandFormFields form={form} />
        <div className="flex gap-4">
          <Button type="submit">
            {initialData ? 'Update Brand' : 'Create Brand'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/brands')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}