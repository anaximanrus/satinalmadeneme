'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ProcurementProduct } from '@/types/procurement';
import { useToast } from '@/hooks/use-toast';
import { Brand } from '@/types/brand';
import { Category } from '@/types/category';
import { getBrands } from '@/lib/brands';
import { getCategories } from '@/lib/categories';

const editFormSchema = z.object({
  productId: z.string().min(1, 'Product is required'),
  brandId: z.string().min(1, 'Brand is required'),
  categoryId: z.string().min(1, 'Category is required'),
  quantity: z.number().min(1, 'Quantity must be at least 1'),
});

type EditFormValues = z.infer<typeof editFormSchema>;

interface ProcurementProductEditDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: ProcurementProduct;
}

export function ProcurementProductEditDialog({
  open,
  onOpenChange,
  product,
}: ProcurementProductEditDialogProps) {
  const { toast } = useToast();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const form = useForm<EditFormValues>({
    resolver: zodResolver(editFormSchema),
    defaultValues: {
      productId: product.productId,
      quantity: product.quantity,
      brandId: '',
      categoryId: '',
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

  async function onSubmit(values: EditFormValues) {
    try {
      // Implement product update logic here
      toast({
        title: 'Success',
        description: 'Product updated successfully',
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update product',
        variant: 'destructive',
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Product Details</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="brandId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Brand</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {brands.map((brand) => (
                        <SelectItem key={brand.id} value={brand.id}>
                          {brand.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Update Product</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}