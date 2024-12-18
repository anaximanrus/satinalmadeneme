import { Suspense } from 'react';
import { SitesHeader } from '@/components/sites/sites-header';
import { SitesTable } from '@/components/sites/sites-table';
import { SitesTableSkeleton } from '@/components/sites/sites-table-skeleton';

export default function SitesPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <SitesHeader />
      <Suspense fallback={<SitesTableSkeleton />}>
        <SitesTable />
      </Suspense>
    </div>
  );
}