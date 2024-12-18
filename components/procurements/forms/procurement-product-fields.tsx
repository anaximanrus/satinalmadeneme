'use client';

import { useEffect, useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import { Product } from '@/types/product';
import { getProducts } from '@/lib/products';
import { ProcurementFormValues } from '@/types/procurement-form';

interface ProcurementProductFieldsProps {
  form: UseFormReturn<ProcurementFormValues>;
  index: number;
}

export function ProcurementProductFields({ form, index }: ProcurementProductFieldsProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <div className="grid gap-4 rounded-lg border p-4">
      <FormField
        control={form.control}
        name={`products.${index}.productId`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Product</FormLabel>
            <Select onValueChange={field.onChange} value={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select product" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {products.map((product) => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name={`products.${index}.quantity`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`products.${index}.unit`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="piece">Piece</SelectItem>
                  <SelectItem value="kg">Kilogram</SelectItem>
                  <SelectItem value="ton">Ton</SelectItem>
                  <SelectItem value="m">Meter</SelectItem>
                  <SelectItem value="m2">Square Meter</SelectItem>
                  <SelectItem value="m3">Cubic Meter</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name={`products.${index}.description`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter product specifications or requirements"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}