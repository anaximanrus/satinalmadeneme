import { ProcurementSearch } from './procurement-search';
import { ProcurementFilters } from './procurement-filters';

export function ProcurementFilterBar() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <ProcurementSearch />
      <ProcurementFilters />
    </div>
  );
}