'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { UseFormReturn } from 'react-hook-form';
import { CategoryFormValues } from './category-form-schema';
import { Category } from '@/types/category';

interface CategoryFormFieldsProps {
  form: UseFormReturn<CategoryFormValues>;
  categories: Category[];
}

export function CategoryFormFields({ form, categories }: CategoryFormFieldsProps) {
  return (
    <div className="grid gap-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter category name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Enter category description"
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
        name="parentId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Parent Category</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value || "null"}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select parent category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="null">None</SelectItem>
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
    </div>
  );
}