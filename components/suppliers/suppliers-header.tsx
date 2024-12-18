'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function SuppliersHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Suppliers</h1>
        <p className="text-muted-foreground">
          Manage your suppliers and their details
        </p>
      </div>
      <Button onClick={() => router.push('/suppliers/new')}>
        <Plus className="mr-2 h-4 w-4" />
        Add Supplier
      </Button>
    </div>
  );
}