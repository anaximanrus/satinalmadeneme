'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { ProcurementProduct } from '@/types/procurement';

interface ProcurementProductSuppliersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: ProcurementProduct;
}

export function ProcurementProductSuppliersDialog({
  open,
  onOpenChange,
  product,
}: ProcurementProductSuppliersDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Add Suppliers</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Supplier A</TableCell>
              <TableCell>contact@suppliera.com</TableCell>
              <TableCell>New York, USA</TableCell>
              <TableCell>
                <Button size="sm">Add</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}