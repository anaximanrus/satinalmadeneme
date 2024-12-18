'use client';

import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function ProductsHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Products</h1>
        <p className="text-muted-foreground">
          Manage your product catalog and inventory
        </p>
      </div>
      <Button onClick={() => router.push('/products/new')}>
        <Plus className="mr-2 h-4 w-4" />
        Add Product
      </Button>
    </div>
  );
}