'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Site } from '@/types/site';
import { createSite, updateSite } from '@/lib/sites';
import { SiteFormFields } from './site-form-fields';
import { siteFormSchema, type SiteFormValues } from './site-form-schema';

interface SiteFormProps {
  initialData?: Site;
}

export function SiteForm({ initialData }: SiteFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  
  const form = useForm<SiteFormValues>({
    resolver: zodResolver(siteFormSchema),
    defaultValues: initialData || {
      status: 'active',
    },
  });

  async function onSubmit(values: SiteFormValues) {
    try {
      if (initialData) {
        await updateSite(initialData.id, values);
        toast({
          title: 'Success',
          description: 'Site updated successfully',
        });
      } else {
        await createSite(values);
        toast({
          title: 'Success',
          description: 'Site created successfully',
        });
      }
      router.push('/sites');
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
        <SiteFormFields form={form} />
        <div className="flex gap-4">
          <Button type="submit">
            {initialData ? 'Update Site' : 'Create Site'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/sites')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}