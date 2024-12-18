import { notFound } from 'next/navigation';
import { ProcurementForm } from '@/components/procurements/forms/procurement-form';
import { getProcurementById, getProcurementIds } from '@/lib/procurements';

interface EditProcurementPageProps {
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

export default async function EditProcurementPage({ params }: EditProcurementPageProps) {
  const procurement = await getProcurementById(params.id);

  if (!procurement) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Procurement</h1>
        <p className="text-muted-foreground">
          Update the details for procurement #{procurement.procurementNo}
        </p>
      </div>
      <div className="rounded-md border bg-card p-8">
        <ProcurementForm initialData={procurement} />
      </div>
    </div>
  );
}