'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { FileSpreadsheet, FileText, Pencil } from 'lucide-react';
import { Procurement } from '@/types/procurement';

interface ProcurementActionsProps {
  procurement: Procurement;
}

export function ProcurementActions({ procurement }: ProcurementActionsProps) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => router.push(`/procurements/${procurement.id}/edit`)}
      >
        <Pencil className="mr-2 h-4 w-4" />
        Edit
      </Button>
      <Button variant="outline" size="sm">
        <FileSpreadsheet className="mr-2 h-4 w-4" />
        Export Excel
      </Button>
      <Button variant="outline" size="sm">
        <FileText className="mr-2 h-4 w-4" />
        Export PDF
      </Button>
    </div>
  );
}