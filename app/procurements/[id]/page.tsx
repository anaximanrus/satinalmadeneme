import { notFound } from 'next/navigation';
import { getProcurementById, getProcurementIds } from '@/lib/procurements';
import { ProcurementDetail } from '@/components/procurements/detail/procurement-detail';

interface ProcurementDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const ids = await getProcurementIds();
  return ids.map((id) => ({
    id,
  }));
}

export default async function ProcurementDetailPage({ params }: ProcurementDetailPageProps) {
  const procurement = await getProcurementById(params.id);

  if (!procurement) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Procurement Details</h1>
        <p className="text-muted-foreground">
          View details for procurement #{procurement.procurementNo}
        </p>
      </div>
      <ProcurementDetail procurement={procurement} />
    </div>
  );
}