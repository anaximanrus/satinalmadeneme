'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Product } from '@/types/product';
import { createProduct, updateProduct } from '@/lib/products';
import { ProductFormFields } from './product-form-fields';
import { productFormSchema, type ProductFormValues } from './product-form-schema';
import { useEffect, useState } from 'react';
import { Brand } from '@/types/brand';
import { Category } from '@/types/category';
import { getBrands } from '@/lib/brands';
import { getCategories } from '@/lib/categories';

interface ProductFormProps {
  initialData?: Product;
}

export function ProductForm({ initialData }: ProductFormProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: initialData || {
      status: 'active',
    },
  });

  useEffect(() => {
    async function loadFormData() {
      try {
        const [brandsData, categoriesData] = await Promise.all([
          getBrands(),
          getCategories(),
        ]);
        setBrands(brandsData);
        setCategories(categoriesData);
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to load form data',
          variant: 'destructive',
        });
      }
    }
    loadFormData();
  }, [toast]);

  async function onSubmit(values: ProductFormValues) {
    try {
      if (initialData) {
        await updateProduct(initialData.id, values);
        toast({
          title: 'Success',
          description: 'Product updated successfully',
        });
      } else {
        await createProduct(values);
        toast({
          title: 'Success',
          description: 'Product created successfully',
        });
      }
      router.push('/products');
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
        <ProductFormFields 
          form={form}
          brands={brands}
          categories={categories}
        />
        <div className="flex gap-4">
          <Button type="submit">
            {initialData ? 'Update Product' : 'Create Product'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/products')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}