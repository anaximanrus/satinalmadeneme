import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProcurementNotFound() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Procurement Not Found</h1>
      <p className="text-muted-foreground">
        The procurement you are looking for does not exist.
      </p>
      <Button asChild>
        <Link href="/procurements">Return to Procurements</Link>
      </Button>
    </div>
  );
}