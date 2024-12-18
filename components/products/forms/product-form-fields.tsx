'use client';

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
import { ProductFormValues } from './product-form-schema';
import { Brand } from '@/types/brand';
import { Category } from '@/types/category';

interface ProductFormFieldsProps {
  form: UseFormReturn<ProductFormValues>;
  brands: Brand[];
  categories: Category[];
}

export function ProductFormFields({ form, brands, categories }: ProductFormFieldsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Product Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter product name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="sku"
        render={({ field }) => (
          <FormItem>
            <FormLabel>SKU</FormLabel>
            <FormControl>
              <Input placeholder="Enter SKU" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="md:col-span-2">
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter product description"
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="brandId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Brand</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
        name="status"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Status</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="passive">Passive</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="unit"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Unit</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
  );
}