'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface ProcurementTabsProps {
  children: React.ReactNode;
}

export function ProcurementTabs({ children }: ProcurementTabsProps) {
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

  return (
    <Tabs 
      defaultValue={searchParams.get('tab') || 'all'}
      onValueChange={(value) => {
        router.push(pathname + '?' + createQueryString('tab', value));
      }}
      className="space-y-4"
    >
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="open">Open</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="refused">Refused</TabsTrigger>
      </TabsList>
      <TabsContent value="all">{children}</TabsContent>
      <TabsContent value="open">{children}</TabsContent>
      <TabsContent value="completed">{children}</TabsContent>
      <TabsContent value="refused">{children}</TabsContent>
    </Tabs>
  );
}