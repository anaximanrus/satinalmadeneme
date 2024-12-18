import { Procurement } from '@/types/procurement';
import { ProcurementInfo } from './procurement-info';
import { ProcurementProductTable } from './procurement-product-table';
import { ProcurementActions } from './procurement-actions';
import { ProcurementSummary } from './procurement-summary';
import { ProcurementSupplierOffers } from './procurement-supplier-offers';

interface ProcurementDetailProps {
  procurement: Procurement;
}

export function ProcurementDetail({ procurement }: ProcurementDetailProps) {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <ProcurementInfo procurement={procurement} />
        <ProcurementActions procurement={procurement} />
      </div>
      <div className="rounded-md border bg-card p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Products</h2>
          <p className="text-sm text-muted-foreground">
            Manage products and their offers in this procurement
          </p>
        </div>
        <div className="space-y-6">
          <ProcurementProductTable products={procurement.products} />
          <ProcurementSummary products={procurement.products} />
          <ProcurementSupplierOffers />
        </div>
      </div>
    </div>
  );
}