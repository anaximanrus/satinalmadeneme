'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Category } from '@/types/category';
import { createCategory, updateCategory, getCategories } from '@/lib/categories';
import { CategoryFormFields } from './category-form-fields';
import { categoryFormSchema, type CategoryFormValues } from './category-form-schema';

interface CategoryFormProps {
  initialData?: Category;
}

export function CategoryForm({ initialData }: CategoryFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [categories, setCategories] = useState<Category[]>([]);
  
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      status: 'active',
      parentId: null,
      ...initialData,
    },
  });

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        // Filter out the current category and its children to prevent circular references
        const filteredCategories = initialData
          ? data.filter(c => c.id !== initialData.id)
          : data;
        setCategories(filteredCategories);
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to load categories',
          variant: 'destructive',
        });
      }
    }
    loadCategories();
  }, [toast, initialData]);

  async function onSubmit(values: CategoryFormValues) {
    try {
      // Convert "null" string to actual null for parentId
      const formattedValues = {
        ...values,
        parentId: values.parentId === "null" ? null : values.parentId,
      };

      if (initialData) {
        await updateCategory(initialData.id, formattedValues);
        toast({
          title: 'Success',
          description: 'Category updated successfully',
        });
      } else {
        await createCategory(formattedValues);
        toast({
          title: 'Success',
          description: 'Category created successfully',
        });
      }
      router.push('/categories');
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
        <CategoryFormFields form={form} categories={categories} />
        <div className="flex gap-4">
          <Button type="submit">
            {initialData ? 'Update Category' : 'Create Category'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/categories')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}