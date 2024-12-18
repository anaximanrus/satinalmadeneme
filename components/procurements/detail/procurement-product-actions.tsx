'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, ListFilter, UserPlus, Package, PlusCircle, Pencil, Trash } from 'lucide-react';
import { ProcurementProduct } from '@/types/procurement';
import { ProcurementProductOffersDialog } from './dialogs/procurement-product-offers-dialog';
import { ProcurementProductSuppliersDialog } from './dialogs/procurement-product-suppliers-dialog';
import { ProcurementProductStocksDialog } from './dialogs/procurement-product-stocks-dialog';
import { ProcurementProductOfferDialog } from './dialogs/procurement-product-offer-dialog';
import { ProcurementProductEditDialog } from './dialogs/procurement-product-edit-dialog';
import { ProcurementProductDeleteDialog } from './dialogs/procurement-product-delete-dialog';

interface ProcurementProductActionsProps {
  product: ProcurementProduct;
}

export function ProcurementProductActions({ product }: ProcurementProductActionsProps) {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setActiveDialog('offers')}>
            <ListFilter className="mr-2 h-4 w-4" />
            Browse Offers
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveDialog('suppliers')}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Supplier
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveDialog('stocks')}>
            <Package className="mr-2 h-4 w-4" />
            Stocks
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveDialog('add-offer')}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Offer
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveDialog('edit')}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit Details
          </DropdownMenuItem>
          <DropdownMenuItem 
            onClick={() => setActiveDialog('delete')}
            className="text-destructive"
          >
            <Trash className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ProcurementProductOffersDialog
        open={activeDialog === 'offers'}
        onOpenChange={() => setActiveDialog(null)}
        product={product}
      />

      <ProcurementProductSuppliersDialog
        open={activeDialog === 'suppliers'}
        onOpenChange={() => setActiveDialog(null)}
        product={product}
      />

      <ProcurementProductStocksDialog
        open={activeDialog === 'stocks'}
        onOpenChange={() => setActiveDialog(null)}
        product={product}
      />

      <ProcurementProductOfferDialog
        open={activeDialog === 'add-offer'}
        onOpenChange={() => setActiveDialog(null)}
        product={product}
      />

      <ProcurementProductEditDialog
        open={activeDialog === 'edit'}
        onOpenChange={() => setActiveDialog(null)}
        product={product}
      />

      <ProcurementProductDeleteDialog
        open={activeDialog === 'delete'}
        onOpenChange={() => setActiveDialog(null)}
        product={product}
      />
    </>
  );
}