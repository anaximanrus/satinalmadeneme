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
import { ProcurementProduct } from '@/types/procurement';

interface ProcurementProductStocksDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: ProcurementProduct;
}

export function ProcurementProductStocksDialog({
  open,
  onOpenChange,
  product,
}: ProcurementProductStocksDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Product Stock Levels</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Site</TableHead>
              <TableHead>Current Stock</TableHead>
              <TableHead>Reserved</TableHead>
              <TableHead>Available</TableHead>
              <TableHead>Min Stock</TableHead>
              <TableHead>Max Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Site A</TableCell>
              <TableCell>1,000</TableCell>
              <TableCell>200</TableCell>
              <TableCell>800</TableCell>
              <TableCell>500</TableCell>
              <TableCell>2,000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
}