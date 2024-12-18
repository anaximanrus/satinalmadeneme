import { Suspense } from 'react';
import { SuppliersHeader } from '@/components/suppliers/suppliers-header';
import { SuppliersTable } from '@/components/suppliers/suppliers-table';
import { SuppliersTableSkeleton } from '@/components/suppliers/suppliers-table-skeleton';

export default function SuppliersPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <SuppliersHeader />
      <Suspense fallback={<SuppliersTableSkeleton />}>
        <SuppliersTable />
      </Suspense>
    </div>
  );
}