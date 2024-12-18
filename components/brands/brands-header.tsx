'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function BrandsHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Brands</h1>
        <p className="text-muted-foreground">
          Manage your product brands and manufacturers
        </p>
      </div>
      <Button onClick={() => router.push('/brands/new')}>
        <Plus className="mr-2 h-4 w-4" />
        Add Brand
      </Button>
    </div>
  );
}