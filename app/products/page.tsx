import { Suspense } from 'react';
import { ProductsHeader } from '@/components/products/products-header';
import { ProductsTable } from '@/components/products/products-table';
import { ProductsTableSkeleton } from '@/components/products/products-table-skeleton';

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <ProductsHeader />
      <Suspense fallback={<ProductsTableSkeleton />}>
        <ProductsTable />
      </Suspense>
    </div>
  );
}