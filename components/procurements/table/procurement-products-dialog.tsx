'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Package } from 'lucide-react';
import { useState } from 'react';
import { ProcurementProduct } from '@/types/procurement';

interface ProcurementProductsDialogProps {
  products: ProcurementProduct[];
}

export function ProcurementProductsDialog({ products }: ProcurementProductsDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Package className="mr-2 h-4 w-4" />
          View Products
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Procurement Products</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.productId}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.unit}</TableCell>
                <TableCell>{product.description || '—'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}