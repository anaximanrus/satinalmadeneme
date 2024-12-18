'use client';

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
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ProcurementProduct } from '@/types/procurement';
import { useToast } from '@/hooks/use-toast';

const offerFormSchema = z.object({
  price: z.number().min(0.01, 'Price must be greater than 0'),
  deliveryTime: z.number().min(1, 'Delivery time must be at least 1 day'),
  notes: z.string().optional(),
});

type OfferFormValues = z.infer<typeof offerFormSchema>;

interface ProcurementProductOfferDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: ProcurementProduct;
}

export function ProcurementProductOfferDialog({
  open,
  onOpenChange,
  product,
}: ProcurementProductOfferDialogProps) {
  const { toast } = useToast();
  const form = useForm<OfferFormValues>({
    resolver: zodResolver(offerFormSchema),
    defaultValues: {
      price: 0,
      deliveryTime: 1,
      notes: '',
    },
  });

  async function onSubmit(values: OfferFormValues) {
    try {
      // Implement offer submission logic here
      toast({
        title: 'Success',
        description: 'Offer added successfully',
      });
      onOpenChange(false);
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add offer',
        variant: 'destructive',
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Offer</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      step="0.01"
                      placeholder="Enter price"
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
              name="deliveryTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Time (days)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter delivery time"
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
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter any additional notes"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Add Offer</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}