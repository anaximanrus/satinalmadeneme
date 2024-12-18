import { Suspense } from 'react';
import { CategoriesHeader } from '@/components/categories/categories-header';
import { CategoriesTable } from '@/components/categories/categories-table';
import { CategoriesTableSkeleton } from '@/components/categories/categories-table-skeleton';

export default function CategoriesPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <CategoriesHeader />
      <Suspense fallback={<CategoriesTableSkeleton />}>
        <CategoriesTable />
      </Suspense>
    </div>
  );
}