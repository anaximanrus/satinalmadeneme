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
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProcurementProduct } from '@/types/procurement';

interface ProcurementProductOffersDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: ProcurementProduct;
}

export function ProcurementProductOffersDialog({
  open,
  onOpenChange,
  product,
}: ProcurementProductOffersDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Product Offers</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Supplier</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Delivery Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Supplier A</TableCell>
              <TableCell>$1,200</TableCell>
              <TableCell>5 days</TableCell>
              <TableCell>
                <Badge>Active</Badge>
              </TableCell>
              <TableCell>
                <Button size="sm">Select</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}