'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { ProcurementProduct } from '@/types/procurement';
import { useToast } from '@/hooks/use-toast';

interface ProcurementProductDeleteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: ProcurementProduct;
}

export function ProcurementProductDeleteDialog({
  open,
  onOpenChange,
  product,
}: ProcurementProductDeleteDialogProps) {
  const { toast } = useToast();

  async function handleDelete() {
    try {
      // Implement delete logic here
      toast({
        title: 'Success',
        description: 'Product deleted successfully',
      });
      onOpenChange(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete product',
        variant: 'destructive',
      });
    }
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the product
            from this procurement.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            className="bg-destructive text-destructive-foreground"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}