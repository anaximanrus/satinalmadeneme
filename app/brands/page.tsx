import { Suspense } from 'react';
import { BrandsHeader } from '@/components/brands/brands-header';
import { BrandsTable } from '@/components/brands/brands-table';
import { BrandsTableSkeleton } from '@/components/brands/brands-table-skeleton';

export default function BrandsPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <BrandsHeader />
      <Suspense fallback={<BrandsTableSkeleton />}>
        <BrandsTable />
      </Suspense>
    </div>
  );
}