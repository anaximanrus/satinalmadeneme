import { Suspense } from 'react';
import { ProcurementFilterBar } from '@/components/procurements/filters/procurement-filter-bar';
import { ProcurementTabs } from '@/components/procurements/tabs/procurement-tabs';
import { ProcurementTable } from '@/components/procurements/table/procurement-table';
import { ProcurementsHeader } from '@/components/procurements/procurements-header';
import { ProcurementsTableSkeleton } from '@/components/procurements/table/procurement-table-skeleton';

export default function ProcurementsPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <ProcurementsHeader />
      <div className="space-y-4">
        <ProcurementFilterBar />
        <ProcurementTabs>
          <Suspense fallback={<ProcurementsTableSkeleton />}>
            <ProcurementTable />
          </Suspense>
        </ProcurementTabs>
      </div>
    </div>
  );
}