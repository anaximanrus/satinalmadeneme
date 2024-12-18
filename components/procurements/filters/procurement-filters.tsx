'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { getSites } from '@/lib/sites';
import { Site } from '@/types/site';

export function ProcurementFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    async function loadSites() {
      const data = await getSites();
      setSites(data);
    }
    loadSites();
  }, []);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex gap-2">
      <Select
        defaultValue={searchParams.get('status')?.toString()}
        onValueChange={(value) => {
          router.push(pathname + '?' + createQueryString('status', value));
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="in_process">In Process</SelectItem>
          <SelectItem value="waiting_for_proposal">Waiting for Proposal</SelectItem>
          <SelectItem value="refused">Refused</SelectItem>
          <SelectItem value="canceled">Canceled</SelectItem>
        </SelectContent>
      </Select>

      <Select
        defaultValue={searchParams.get('site')?.toString()}
        onValueChange={(value) => {
          router.push(pathname + '?' + createQueryString('site', value));
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Site" />
        </SelectTrigger>
        <SelectContent>
          {sites?.map((site) => (
            <SelectItem key={site.id} value={site.id}>
              {site.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}