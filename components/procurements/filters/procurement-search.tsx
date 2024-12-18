'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { useDebouncedCallback } from '@/hooks/use-debounced-callback';

export function ProcurementSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const debouncedSearch = useDebouncedCallback((term: string) => {
    router.push(pathname + '?' + createQueryString('search', term));
  }, 300);

  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search procurements..."
        className="pl-9"
        onChange={(e) => debouncedSearch(e.target.value)}
        defaultValue={searchParams.get('search')?.toString()}
      />
    </div>
  );
}