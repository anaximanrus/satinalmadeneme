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
import { UseFormReturn } from 'react-hook-form';
import { SiteFormValues } from './site-form-schema';

interface SiteFormFieldsProps {
  form: UseFormReturn<SiteFormValues>;
}

export function SiteFormFields({ form }: SiteFormFieldsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Site Name</FormLabel>
            <FormControl>
              <Input placeholder="Enter site name" {...field} />
            </FormControl>
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
        name="manager"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Site Manager</FormLabel>
            <FormControl>
              <Input placeholder="Enter manager name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="contactEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter contact email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="contactPhone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Phone</FormLabel>
            <FormControl>
              <Input placeholder="Enter contact phone" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address</FormLabel>
            <FormControl>
              <Input placeholder="Enter address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input placeholder="Enter city" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input placeholder="Enter country" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}