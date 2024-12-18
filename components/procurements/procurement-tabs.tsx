'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProcurementTabsProps {
  children: React.ReactNode;
}

export function ProcurementTabs({ children }: ProcurementTabsProps) {
  return (
    <Tabs defaultValue="all" className="space-y-4">
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