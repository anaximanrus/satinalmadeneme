'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function SitesHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sites</h1>
        <p className="text-muted-foreground">
          Manage your construction sites and their details
        </p>
      </div>
      <Button onClick={() => router.push('/sites/new')}>
        <Plus className="mr-2 h-4 w-4" />
        Add Site
      </Button>
    </div>
  );
}