'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function ProcurementsHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Procurements</h1>
        <p className="text-muted-foreground">
          Manage your procurement requests and proposals
        </p>
      </div>
      <Button onClick={() => router.push('/procurements/new')}>
        <Plus className="mr-2 h-4 w-4" />
        New Procurement
      </Button>
    </div>
  );
}