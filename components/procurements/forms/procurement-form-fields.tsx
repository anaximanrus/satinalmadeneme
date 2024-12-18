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
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CalendarIcon, Plus, Trash2 } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Site } from '@/types/site';
import { getSites } from '@/lib/sites';
import { ProcurementFormValues } from '@/types/procurement-form';
import { ProcurementProductFields } from './procurement-product-fields';

interface ProcurementFormFieldsProps {
  form: UseFormReturn<ProcurementFormValues>;
}

export function ProcurementFormFields({ form }: ProcurementFormFieldsProps) {
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    async function loadSites() {
      const data = await getSites();
      setSites(data);
    }
    loadSites();
  }, []);

  const products = form.watch('products') || [];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Procurement Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter procurement title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="siteId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Site</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select site" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {sites.map((site) => (
                    <SelectItem key={site.id} value={site.id}>
                      {site.name}
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
          name="startDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Start Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="endDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>End Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
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
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="in_process">In Process</SelectItem>
                  <SelectItem value="waiting_for_proposal">
                    Waiting for Proposal
                  </SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="refused">Refused</SelectItem>
                  <SelectItem value="canceled">Canceled</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Products</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              const currentProducts = form.getValues('products') || [];
              form.setValue('products', [
                ...currentProducts,
                { productId: '', quantity: 1, unit: '' },
              ]);
            }}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>

        <div className="space-y-4">
          {products.map((_, index) => (
            <div key={index} className="relative">
              <ProcurementProductFields form={form} index={index} />
              {products.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute -right-2 -top-2"
                  onClick={() => {
                    const currentProducts = form.getValues('products');
                    form.setValue(
                      'products',
                      currentProducts.filter((_, i) => i !== index)
                    );
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}